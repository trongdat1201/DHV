package com.project.web_clone.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.web_clone.entity.Event;
import com.project.web_clone.repository.EventRepository;

@Service
public class EventService {
    
    private final EventRepository eventRepository;
    
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }
    
    // Get all published events with pagination
    public Page<Event> getPublishedEvents(Pageable pageable) {
        return eventRepository.findByIsPublishedTrue(pageable);
    }
    
    // Get events by category
    public Page<Event> getEventsByCategory(String category, Pageable pageable) {
        return eventRepository.findByIsPublishedTrueAndCategory(category, pageable);
    }
    
    // Search events
    public Page<Event> searchEvents(String keyword, Pageable pageable) {
        return eventRepository.searchEvents(keyword, pageable);
    }
    
    // Get event by slug
    public Event getEventBySlug(String slug) {
        return eventRepository.findBySlug(slug);
    }
    
    // Get event by ID
    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }
    
    // Create or update event
    @Transactional
    public Event saveEvent(Event event) {
        // Generate slug from title if not provided
        if (event.getSlug() == null || event.getSlug().isEmpty()) {
            String slug = generateSlug(event.getTitle());
            // Ensure slug is unique
            String uniqueSlug = ensureUniqueSlug(slug, event.getId());
            event.setSlug(uniqueSlug);
        }
        
        // Auto-extract first image from content if imageUrl is not provided
        if (event.getImageUrl() == null || event.getImageUrl().isEmpty()) {
            String firstImageUrl = extractFirstImageFromContent(event.getContent());
            if (firstImageUrl != null) {
                event.setImageUrl(firstImageUrl);
            }
        }
        return eventRepository.save(event);
    }
    
    // Delete event
    @Transactional
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
    
    // Increment view count
    @Transactional
    public void incrementViewCount(Long id) {
        Event event = eventRepository.findById(id).orElse(null);
        if (event != null) {
            event.setViewCount(event.getViewCount() + 1);
            eventRepository.save(event);
        }
    }
    
    // Get events by month and year
    public List<Event> getEventsByMonth(int year, int month) {
        return eventRepository.findEventsByMonthAndYear(year, month);
    }
    
    // Get events by date range
    public List<Event> getEventsByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return eventRepository.findEventsByDateRange(startDate, endDate);
    }
    
    // Get valid events (not expired)
    public Page<Event> getValidEvents(Pageable pageable) {
        return eventRepository.findValidEvents(LocalDateTime.now(), pageable);
    }
    
    // Helper method to extract first image from HTML content
    private String extractFirstImageFromContent(String content) {
        if (content == null || content.isEmpty()) {
            return null;
        }
        
        // Simple regex to find first <img src="...">
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>");
        java.util.regex.Matcher matcher = pattern.matcher(content);
        
        if (matcher.find()) {
            return matcher.group(1);
        }
        
        return null;
    }
    
    // Generate slug from title
    private String generateSlug(String title) {
        if (title == null || title.isEmpty()) {
            return "event-" + System.currentTimeMillis();
        }
        
        // Convert Vietnamese characters to ASCII equivalents
        String slug = title.toLowerCase()
            .replaceAll("[àáạảãâầấậẩẫăằắặẳẵ]", "a")
            .replaceAll("[èéẹẻẽêềếệểễ]", "e")
            .replaceAll("[ìíịỉĩ]", "i")
            .replaceAll("[òóọỏõôồốộổỗơờớợởỡ]", "o")
            .replaceAll("[ùúụủũưừứựửữ]", "u")
            .replaceAll("[ỳýỵỷỹ]", "y")
            .replaceAll("[đ]", "d")
            .replaceAll("[^a-z0-9]+", "-")  // Replace non-alphanumeric with hyphens
            .replaceAll("^-+|-+$", "");     // Remove leading/trailing hyphens
        
        return slug.isEmpty() ? "event-" + System.currentTimeMillis() : slug;
    }
    
    // Ensure slug is unique by appending number if needed
    private String ensureUniqueSlug(String baseSlug, Long currentEventId) {
        String slug = baseSlug;
        int counter = 1;
        
        while (true) {
            Event existing = eventRepository.findBySlug(slug);
            if (existing == null || (currentEventId != null && existing.getId().equals(currentEventId))) {
                return slug;
            }
            slug = baseSlug + "-" + counter;
            counter++;
        }
    }}