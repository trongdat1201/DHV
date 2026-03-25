package com.project.web_clone.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;

import com.project.web_clone.entity.Event;
import com.project.web_clone.service.EventService;

@RestController
@RequestMapping("/api/events")
public class EventController {
    
    private final EventService eventService;
    
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }
    
    // Get events with pagination, filtering, and search
    @GetMapping
    public ResponseEntity<Map<String, Object>> getEvents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        
        try {
            Pageable pageable = PageRequest.of(page, size, Sort.by("startDate").descending());
            Page<Event> eventPage;
            
            if (search != null && !search.isEmpty()) {
                eventPage = eventService.searchEvents(search, pageable);
            } else if (category != null && !category.isEmpty()) {
                eventPage = eventService.getEventsByCategory(category, pageable);
            } else {
                eventPage = eventService.getPublishedEvents(pageable);
            }
            
            Map<String, Object> response = new HashMap<>();
            response.put("content", eventPage.getContent()); // For Spring Data compatibility
            response.put("events", eventPage.getContent());
            response.put("currentPage", eventPage.getNumber() + 1); // Convert to 1-based
            response.put("totalPages", eventPage.getTotalPages());
            response.put("totalItems", eventPage.getTotalElements());
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
    
    // Get single event by ID
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Event event = eventService.getEventById(id);
        if (event == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(event);
    }
    
    private String stripHtml(String html) {
        if (html == null) return null;
        String stripped = html.replaceAll("<[^>]*>", "");
        return HtmlUtils.htmlUnescape(stripped).trim();
    }

    // Create new event
    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        try {
            event.setTitle(stripHtml(event.getTitle()));
            if (event.getSummary() != null) {
                event.setSummary(stripHtml(event.getSummary()));
            }
            Event savedEvent = eventService.saveEvent(event);
            return ResponseEntity.ok(savedEvent);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    // Update event
    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event event) {
        try {
            event.setId(id);
            event.setTitle(stripHtml(event.getTitle()));
            if (event.getSummary() != null) {
                event.setSummary(stripHtml(event.getSummary()));
            }
            Event updatedEvent = eventService.saveEvent(event);
            return ResponseEntity.ok(updatedEvent);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    // Update event (POST fallback for compatibility)
    @PostMapping("/{id}")
    public ResponseEntity<Event> updateEventPost(@PathVariable Long id, @RequestBody Event event) {
        return updateEvent(id, event);
    }
    
    // Delete event
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        try {
            eventService.deleteEvent(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    // Get events by month (for calendar)
    @GetMapping("/by-month")
    public ResponseEntity<Map<String, Object>> getEventsByMonth(
            @RequestParam int year,
            @RequestParam int month) {
        try {
            List<Event> events = eventService.getEventsByMonth(year, month);
            
            Map<String, Object> response = new HashMap<>();
            response.put("events", events);
            response.put("year", year);
            response.put("month", month);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
}
