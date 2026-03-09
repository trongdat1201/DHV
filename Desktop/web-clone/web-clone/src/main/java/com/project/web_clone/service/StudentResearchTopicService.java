package com.project.web_clone.service;

import com.project.web_clone.entity.StudentResearchTopic;
import com.project.web_clone.model.CreateStudentResearchTopicRequest;
import com.project.web_clone.repo.StudentResearchTopicRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.NoSuchElementException;

@Service
public class StudentResearchTopicService {

    private final StudentResearchTopicRepository repository;

    public StudentResearchTopicService(StudentResearchTopicRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<StudentResearchTopic> list(String locale) {
        String loc = (locale == null || locale.isBlank()) ? "vi" : locale;
        return repository.findByLocaleOrderBySortOrderAscIdDesc(loc);
    }

    @Transactional
    public StudentResearchTopic create(CreateStudentResearchTopicRequest req) {
        if (req == null) {
            throw new IllegalArgumentException("Missing request");
        }
        if (req.getTitle() == null || req.getTitle().isBlank()) {
            throw new IllegalArgumentException("Missing title");
        }
        // Ràng buộc: năm (4 số) hoặc ngày/tháng/năm (dd/MM/yyyy hoặc dd-MM-yyyy)
        if (req.getTimePoint() == null || req.getTimePoint().isBlank()) {
            throw new IllegalArgumentException("Thời gian không được để trống");
        }
        String tp = req.getTimePoint().trim();
        boolean validYear = tp.matches("\\d{4}");
        boolean validDate = tp.matches("\\d{2}/\\d{2}/\\d{4}") || tp.matches("\\d{2}-\\d{2}-\\d{4}");
        if (!validYear && !validDate) {
            throw new IllegalArgumentException(
                    "Thời gian phải là năm (VD: 2024) hoặc ngày/tháng/năm (VD: 30/12/2020 hoặc 30-12-2020)");
        }

        String locale = (req.getLocale() == null || req.getLocale().isBlank()) ? "vi" : req.getLocale();

        // Always append to end
        List<StudentResearchTopic> all = repository.findByLocaleOrderBySortOrderAscIdDesc(locale);
        int nextSort = all.isEmpty() ? 0
                : (all.get(all.size() - 1).getSortOrder() == null ? all.size()
                        : all.get(all.size() - 1).getSortOrder() + 1);

        StudentResearchTopic t = new StudentResearchTopic();
        t.setLocale(locale);
        t.setImageUrl(req.getImageUrl());
        t.setTitle(req.getTitle().trim());
        t.setTimePoint(req.getTimePoint());
        t.setProjectName(req.getProjectName());
        t.setDescription(req.getDescription());
        t.setSortOrder(nextSort);
        return repository.save(t);
    }

    @Transactional
    public StudentResearchTopic update(long id, CreateStudentResearchTopicRequest req) {
        if (req == null) {
            throw new IllegalArgumentException("Missing request");
        }
        if (req.getTitle() == null || req.getTitle().isBlank()) {
            throw new IllegalArgumentException("Missing title");
        }
        // Ràng buộc: năm (4 số) hoặc ngày/tháng/năm (dd/MM/yyyy hoặc dd-MM-yyyy)
        if (req.getTimePoint() == null || req.getTimePoint().isBlank()) {
            throw new IllegalArgumentException("Thời gian không được để trống");
        }
        String tp = req.getTimePoint().trim();
        boolean validYear = tp.matches("\\d{4}");
        boolean validDate = tp.matches("\\d{2}/\\d{2}/\\d{4}") || tp.matches("\\d{2}-\\d{2}-\\d{4}");
        if (!validYear && !validDate) {
            throw new IllegalArgumentException(
                    "Thời gian phải là năm (VD: 2024) hoặc ngày/tháng/năm (VD: 30/12/2020 hoặc 30-12-2020)");
        }

        StudentResearchTopic t = repository.findById(id).orElseThrow(NoSuchElementException::new);

        if (req.getLocale() != null && !req.getLocale().isBlank()) {
            t.setLocale(req.getLocale());
        }
        t.setImageUrl(req.getImageUrl());
        t.setTitle(req.getTitle().trim());
        t.setTimePoint(req.getTimePoint());
        t.setProjectName(req.getProjectName());
        t.setDescription(req.getDescription());
        // sortOrder is not updated by user anymore
        return repository.save(t);
    }

    @Transactional
    public void delete(long id) {
        if (!repository.existsById(id)) {
            throw new NoSuchElementException("Không tìm thấy đề tài với id: " + id);
        }
        repository.deleteById(id);
    }
}
