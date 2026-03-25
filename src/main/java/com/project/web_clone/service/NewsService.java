package com.project.web_clone.service;

import java.text.Normalizer;
import java.util.List;
import java.util.Locale;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.project.web_clone.entity.News;
import com.project.web_clone.repository.NewsRepository;

@Service
public class NewsService {
    
    private final NewsRepository newsRepository;
    
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }
    
    public Page<News> getNews(int page, int size, String category, String search) {
        Pageable pageable = PageRequest.of(page, size);
        
        if (category != null && !category.isEmpty()) {
            if (search != null && !search.isEmpty()) {
                return newsRepository.searchByCategoryAndKeyword(category, search, pageable);
            }
            return newsRepository.findByCategoryAndIsPublishedTrueOrderByPublishDateDesc(category, pageable);
        }
        
        if (search != null && !search.isEmpty()) {
            return newsRepository.searchPublishedNews(search, pageable);
        }
        
        return newsRepository.findByIsPublishedTrueOrderByPublishDateDesc(pageable);
    }
    
    public Page<News> getPublishedNews(Pageable pageable) {
        return newsRepository.findByIsPublishedTrueOrderByPublishDateDesc(pageable);
    }
    
    public Page<News> getNewsByCategory(String category, Pageable pageable) {
        return newsRepository.findByCategoryAndIsPublishedTrueOrderByPublishDateDesc(category, pageable);
    }
    
    public News getNewsBySlug(String slug) {
        return newsRepository.findBySlug(slug);
    }
    
    public News findById(Long id) {
        return newsRepository.findById(id).orElse(null);
    }
    
    public News save(News news) {
        return newsRepository.save(news);
    }
    
    public News saveNews(News news) {
        return newsRepository.save(news);
    }
    
    public void delete(Long id) {
        newsRepository.deleteById(id);
    }
    
    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
    
    public List<News> searchByKeyword(String keyword) {
        return newsRepository.findByTitleContainingOrContentContaining(keyword, keyword);
    }
    
    public Page<News> searchNews(String search, Pageable pageable) {
        return newsRepository.searchPublishedNews(search, pageable);
    }

    public List<String> getPublishedCategories() {
        return newsRepository.findDistinctPublishedCategories();
    }

    public List<News> getActivityNews(int limit) {
        int safeLimit = Math.max(1, limit);
        return newsRepository
                .findActivityNews(PageRequest.of(0, safeLimit))
                .getContent();
    }

    public List<News> getRecruitmentNews(int limit) {
        int safeLimit = Math.max(1, limit);

        List<News> publishedNews = newsRepository
                .findByIsPublishedTrueOrderByPublishDateDesc(PageRequest.of(0, 500, Sort.by(Sort.Direction.DESC, "publishDate")))
                .getContent();

        List<News> byCategory = publishedNews.stream()
                .filter(this::isRecruitmentCategory)
                .limit(safeLimit)
                .toList();

        if (!byCategory.isEmpty()) {
            return byCategory;
        }

        // Fallback if DB category is not normalized: detect by title/content keywords
        return publishedNews.stream()
                .filter(this::isRecruitmentByContent)
                .limit(safeLimit)
                .toList();
    }

    private boolean isRecruitmentCategory(News news) {
        if (news == null || news.getCategory() == null) {
            return false;
        }

        String raw = news.getCategory().trim();
        if (raw.isEmpty()) {
            return false;
        }

        String normalized = normalizeText(raw);

        return normalized.equals("tin tuc tuyen dung")
                || normalized.equals("bam recruitment")
                || normalized.equals("recruitment")
                || normalized.equals("tuyen dung")
                || normalized.contains("tuyen dung")
                || normalized.contains("recruitment")
                || normalized.contains("viec lam")
                || normalized.contains("career")
                || normalized.contains("job");
    }

    private boolean isRecruitmentByContent(News news) {
        String title = normalizeText(news != null ? news.getTitle() : null);
        String summary = normalizeText(news != null ? news.getSummary() : null);
        String content = normalizeText(news != null ? news.getContent() : null);

        return containsRecruitmentKeyword(title)
                || containsRecruitmentKeyword(summary)
                || containsRecruitmentKeyword(content);
    }

    private boolean containsRecruitmentKeyword(String text) {
        if (text == null || text.isBlank()) {
            return false;
        }

        return text.contains("tuyen dung")
                || text.contains("viec lam")
                || text.contains("co hoi nghe nghiep")
                || text.contains("recruitment")
                || text.contains("career")
                || text.contains("job")
                || text.contains("hiring");
    }

    private String normalizeText(String input) {
        if (input == null) {
            return "";
        }

        String noAccent = Normalizer.normalize(input, Normalizer.Form.NFD)
                .replaceAll("\\p{InCombiningDiacriticalMarks}+", "")
                .replace('đ', 'd')
                .replace('Đ', 'D');

        return noAccent
                .toLowerCase(Locale.ROOT)
                .replace('-', ' ')
                .replace('_', ' ')
                .replaceAll("\\s+", " ")
                .trim();
    }
}
