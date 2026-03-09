package com.project.web_clone.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.web_clone.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findBySlug(String slug);
    Optional<Category> findByName(String name);
    List<Category> findAllByOrderByDisplayOrderAsc();
    boolean existsByName(String name);
    boolean existsBySlug(String slug);
}
