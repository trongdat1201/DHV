package com.project.web_clone.service;

import com.project.web_clone.entity.TeacherResearchTopic;
import com.project.web_clone.model.CreateTeacherResearchTopicRequest;
import com.project.web_clone.repo.TeacherResearchTopicRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherResearchTopicService {

    private final TeacherResearchTopicRepository repository;

    public TeacherResearchTopicService(TeacherResearchTopicRepository repository) {
        this.repository = repository;
    }

    public List<TeacherResearchTopic> list(String locale) {
        String resolvedLocale = resolveLocale(locale);
        return repository.findByLocaleOrderBySortOrderAscIdDesc(resolvedLocale);
    }

    private String resolveLocale(String locale) {
        return (locale == null || locale.isBlank()) ? "vi" : locale.trim();
    }

    public TeacherResearchTopic create(CreateTeacherResearchTopicRequest req) {
        if (req == null) {
            throw new IllegalArgumentException("Dữ liệu không hợp lệ");
        }
        if (req.getTitle() == null || req.getTitle().isBlank()) {
            throw new IllegalArgumentException("Vui lòng nhập tên chủ đề");
        }

        String locale = resolveLocale(req.getLocale());
        String title = req.getTitle().trim();

        if (repository.existsByLocaleAndTitleIgnoreCase(locale, title)) {
            throw new IllegalArgumentException("Chủ đề đã tồn tại (trùng tên)");
        }

        TeacherResearchTopic t = new TeacherResearchTopic();
        t.setLocale(locale);
        t.setTitle(title);
        t.setSortOrder(req.getSortOrder());

        return repository.save(t);
    }

    public TeacherResearchTopic update(Long id, CreateTeacherResearchTopicRequest req) {
        if (id == null) {
            throw new IllegalArgumentException("ID không hợp lệ");
        }
        if (req == null) {
            throw new IllegalArgumentException("Dữ liệu không hợp lệ");
        }
        if (req.getTitle() == null || req.getTitle().isBlank()) {
            throw new IllegalArgumentException("Vui lòng nhập tên chủ đề");
        }

        TeacherResearchTopic t = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy chủ đề"));

        String newLocale = (req.getLocale() == null || req.getLocale().isBlank())
                ? t.getLocale()
                : resolveLocale(req.getLocale());
        String newTitle = req.getTitle().trim();

        repository.findFirstByLocaleAndTitleIgnoreCase(newLocale, newTitle)
                .ifPresent(existing -> {
                    if (existing.getId() != null && !existing.getId().equals(id)) {
                        throw new IllegalArgumentException("Chủ đề đã tồn tại (trùng tên)");
                    }
                });

        t.setLocale(newLocale);
        t.setTitle(newTitle);
        if (req.getSortOrder() != null) {
            t.setSortOrder(req.getSortOrder());
        }

        return repository.save(t);
    }

    public void delete(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("ID không hợp lệ");
        }
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Không tìm thấy chủ đề");
        }
        repository.deleteById(id);
    }
}
