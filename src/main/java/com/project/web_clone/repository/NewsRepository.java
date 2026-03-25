package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.web_clone.entity.News;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    
    Page<News> findByIsPublishedTrueOrderByPublishDateDesc(Pageable pageable);

    @org.springframework.data.jpa.repository.Query("SELECT DISTINCT n.category FROM News n WHERE n.isPublished = true AND n.category IS NOT NULL AND n.category <> '' ORDER BY n.category ASC")
    List<String> findDistinctPublishedCategories();
    
    Page<News> findByCategoryAndIsPublishedTrueOrderByPublishDateDesc(String category, Pageable pageable);
    
    News findBySlug(String slug);
    
    List<News> findByTitleContainingOrContentContaining(String title, String content);
    
    @org.springframework.data.jpa.repository.Query("SELECT n FROM News n WHERE n.isPublished = true AND LOWER(n.title) LIKE LOWER(CONCAT('%', :search, '%')) ORDER BY n.publishDate DESC")
    Page<News> searchPublishedNews(@org.springframework.data.repository.query.Param("search") String search, Pageable pageable);

    @org.springframework.data.jpa.repository.Query("SELECT n FROM News n WHERE n.category = :category AND n.isPublished = true AND LOWER(n.title) LIKE LOWER(CONCAT('%', :search, '%')) ORDER BY n.publishDate DESC")
    Page<News> searchByCategoryAndKeyword(@org.springframework.data.repository.query.Param("category") String category, @org.springframework.data.repository.query.Param("search") String search, Pageable pageable);

    @org.springframework.data.jpa.repository.Query(
            "SELECT n FROM News n " +
                    "WHERE n.isPublished = true " +
                    "AND n.category IS NOT NULL " +
                    "AND (" +
                    "LOWER(n.category) LIKE '%activity%' " +
                    "OR LOWER(n.category) LIKE '%hoat-dong%' " +
                    "OR LOWER(n.category) LIKE '%hoạt động%' " +
                    "OR LOWER(n.category) LIKE '%tin tức hoạt động%'" +
                    ") " +
                    "ORDER BY n.publishDate DESC")
    Page<News> findActivityNews(Pageable pageable);

    @org.springframework.data.jpa.repository.Query(
            "SELECT n FROM News n " +
                    "WHERE n.isPublished = true " +
                    "AND n.category IS NOT NULL " +
                    "AND (" +
                    "LOWER(TRIM(n.category)) = 'tin tức tuyển dụng' " +
                    "OR LOWER(TRIM(n.category)) = 'bam-recruitment' " +
                    "OR LOWER(TRIM(n.category)) = 'recruitment' " +
                    "OR LOWER(TRIM(n.category)) = 'tuyen-dung' " +
                    "OR LOWER(n.category) LIKE '%tin tức tuyển dụng%' " +
                    "OR LOWER(n.category) LIKE '%recruitment%'" +
                    ") " +
                    "ORDER BY n.publishDate DESC")
    Page<News> findRecruitmentNews(Pageable pageable);
}
