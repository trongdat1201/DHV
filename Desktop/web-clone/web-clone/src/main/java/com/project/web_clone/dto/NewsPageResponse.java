package com.project.web_clone.dto;

import java.util.List;

import com.project.web_clone.entity.News;

public class NewsPageResponse {
    private List<News> news;
    private int currentPage;
    private int totalPages;
    private long totalItems;

    public NewsPageResponse() {
    }

    public NewsPageResponse(List<News> news, int currentPage, int totalPages, long totalItems) {
        this.news = news;
        this.currentPage = currentPage;
        this.totalPages = totalPages;
        this.totalItems = totalItems;
    }

    // Getters and Setters
    public List<News> getNews() {
        return news;
    }

    public void setNews(List<News> news) {
        this.news = news;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public long getTotalItems() {
        return totalItems;
    }

    public void setTotalItems(long totalItems) {
        this.totalItems = totalItems;
    }
}
