package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.web_clone.entity.AlumniQuote;

@Repository
public interface AlumniQuoteRepository extends JpaRepository<AlumniQuote, Long> {
    List<AlumniQuote> findAllByOrderByCreatedAtDesc();
}
