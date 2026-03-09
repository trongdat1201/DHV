package com.project.web_clone.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;

import com.project.web_clone.entity.News;
import com.project.web_clone.service.NewsService;

@RestController
@RequestMapping("/api/news")
public class NewsApiController {
    
    private final NewsService newsService;
    
    public NewsApiController(NewsService newsService) {
        this.newsService = newsService;
    }
    
    @GetMapping
    public ResponseEntity<Map<String, Object>> getNews(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        
        Page<News> newsPage = newsService.getNews(page, size, category, search);
        
        List<Map<String, Object>> newsItems = newsPage.getContent().stream()
            .map(news -> {
                Map<String, Object> item = new HashMap<>();
                item.put("id", news.getId());
                item.put("title", news.getTitle());
                item.put("slug", news.getSlug());
                item.put("summary", news.getSummary());
                item.put("content", news.getContent());
                item.put("category", news.getCategory());
                item.put("imageUrl", news.getImageUrl());
                item.put("publishDate", news.getPublishDate().toString());
                item.put("viewCount", news.getViewCount());
                return item;
            })
            .collect(Collectors.toList());
        
        Map<String, Object> response = new HashMap<>();
        response.put("news", newsItems);
        response.put("currentPage", newsPage.getNumber() + 1);
        response.put("totalPages", newsPage.getTotalPages());
        response.put("totalItems", newsPage.getTotalElements());
        response.put("hasNext", newsPage.hasNext());
        response.put("hasPrevious", newsPage.hasPrevious());
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/categories")
    public ResponseEntity<List<String>> getCategories() {
        return ResponseEntity.ok(newsService.getPublishedCategories());
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<News> getNewsById(@PathVariable Long id) {
        News news = newsService.findById(id);
        if (news != null) {
            return ResponseEntity.ok(news);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<News> getNewsBySlug(@PathVariable String slug) {
        News news = newsService.getNewsBySlug(slug);
        if (news != null) {
            return ResponseEntity.ok(news);
        }
        return ResponseEntity.notFound().build();
    }
    
    private static final Pattern IMG_SRC_PATTERN = Pattern.compile("<img[^>]+src=\"([^\"]+)\"", Pattern.CASE_INSENSITIVE);

    private String extractFirstImageUrl(String html) {
        if (html == null) return null;
        Matcher matcher = IMG_SRC_PATTERN.matcher(html);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return null;
    }

    private String stripHtml(String html) {
        if (html == null) return null;
        // Loại bỏ hoàn toàn HTML tags
        String stripped = html.replaceAll("<[^>]*>", "");
        // Giải mã các thực thể HTML (vd: &Agrave; -> À)
        return HtmlUtils.htmlUnescape(stripped).trim();
    }

    @PostMapping
    public ResponseEntity<News> createNews(@RequestBody News news) {
        // Sanitize title and summary (remove HTML tags)
        news.setTitle(stripHtml(news.getTitle()));
        if (news.getSummary() != null) {
            news.setSummary(stripHtml(news.getSummary()));
        }

        // Auto thumbnail: if imageUrl is blank, extract first image from content
        if (news.getImageUrl() == null || news.getImageUrl().trim().isEmpty()) {
            String firstImg = extractFirstImageUrl(news.getContent());
            if (firstImg != null && !firstImg.trim().isEmpty()) {
                news.setImageUrl(firstImg);
            }
        }

        News savedNews = newsService.saveNews(news);
        return ResponseEntity.ok(savedNews);
    }

    @org.springframework.web.bind.annotation.PutMapping("/{id}")
    public ResponseEntity<News> updateNews(@PathVariable Long id, @RequestBody News news) {
        News existingNews = newsService.findById(id);
        if (existingNews == null) {
            return ResponseEntity.notFound().build();
        }

        // Sanitize and update fields
        existingNews.setTitle(stripHtml(news.getTitle()));
        existingNews.setSlug(news.getSlug());
        
        if (news.getSummary() != null) {
            existingNews.setSummary(stripHtml(news.getSummary()));
        } else {
            String cleanContent = stripHtml(news.getContent());
            if (cleanContent != null) {
                existingNews.setSummary(cleanContent.substring(0, Math.min(cleanContent.length(), 200)) + "...");
            }
        }
        
        existingNews.setContent(news.getContent());
        existingNews.setCategory(news.getCategory());

        // Auto thumbnail: if imageUrl is blank, extract first image from content
        if (news.getImageUrl() == null || news.getImageUrl().trim().isEmpty()) {
            String firstImg = extractFirstImageUrl(news.getContent());
            existingNews.setImageUrl(firstImg);
        } else {
            existingNews.setImageUrl(news.getImageUrl());
        }

        existingNews.setPublishDate(news.getPublishDate());
        existingNews.setIsPublished(news.getIsPublished());

        News updatedNews = newsService.saveNews(existingNews);
        return ResponseEntity.ok(updatedNews);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNews(@PathVariable Long id) {
        newsService.deleteNews(id);
        return ResponseEntity.ok().build();
    }
}
