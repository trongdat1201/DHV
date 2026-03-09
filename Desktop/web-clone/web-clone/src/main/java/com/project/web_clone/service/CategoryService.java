package com.project.web_clone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.web_clone.entity.Category;
import com.project.web_clone.repository.CategoryRepository;

@Service
public class CategoryService {
    
    private final CategoryRepository categoryRepository;
    
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    
    public List<Category> getAllCategories() {
        return categoryRepository.findAllByOrderByDisplayOrderAsc();
    }
    
    public Category getCategoryBySlug(String slug) {
        return categoryRepository.findBySlug(slug).orElse(null);
    }
    
    public Category getCategoryByName(String name) {
        return categoryRepository.findByName(name).orElse(null);
    }
    
    public Category save(Category category) {
        return categoryRepository.save(category);
    }
    
    public void delete(Long id) {
        categoryRepository.deleteById(id);
    }
    
    public boolean existsByName(String name) {
        return categoryRepository.existsByName(name);
    }
    
    public boolean existsBySlug(String slug) {
        return categoryRepository.existsBySlug(slug);
    }
}
