package com.project.web_clone.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.web_clone.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    
    // Find published events with pagination and sorting
    Page<Event> findByIsPublishedTrue(Pageable pageable);
    
    // Find by category
    Page<Event> findByIsPublishedTrueAndCategory(String category, Pageable pageable);
    
    // Search events by title or content
    @Query("SELECT e FROM Event e WHERE e.isPublished = true AND (LOWER(e.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(e.content) LIKE LOWER(CONCAT('%', :keyword, '%')))")
    Page<Event> searchEvents(@Param("keyword") String keyword, Pageable pageable);
    
    // Find events by month and year
    @Query("SELECT e FROM Event e WHERE e.isPublished = true AND YEAR(e.startDate) = :year AND MONTH(e.startDate) = :month ORDER BY e.startDate ASC")
    List<Event> findEventsByMonthAndYear(@Param("year") int year, @Param("month") int month);
    
    // Find events by date range
    @Query("SELECT e FROM Event e WHERE e.isPublished = true AND e.startDate >= :startDate AND e.startDate <= :endDate ORDER BY e.startDate ASC")
    List<Event> findEventsByDateRange(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
    
    // Find valid events (not expired) - events where endDate is null or endDate >= now
    @Query("SELECT e FROM Event e WHERE e.isPublished = true AND (e.endDate IS NULL OR e.endDate >= :now) ORDER BY e.startDate DESC")
    Page<Event> findValidEvents(@Param("now") LocalDateTime now, Pageable pageable);
    
    // Find by slug
    Event findBySlug(String slug);
}
