package com.project.web_clone.service;

import java.text.Normalizer;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.web_clone.dto.TeacherResearchProjectUpsertRequest;
import com.project.web_clone.entity.TeacherResearchProject;
import com.project.web_clone.repo.TeacherResearchProjectRepository;
import com.project.web_clone.repo.TeacherResearchTopicRepository;

@Service
public class TeacherResearchProjectService {
    private final TeacherResearchProjectRepository repository;
    private final TeacherResearchTopicRepository topicRepository;

    public TeacherResearchProjectService(
            TeacherResearchProjectRepository repository,
            TeacherResearchTopicRepository topicRepository) {
        this.repository = repository;
        this.topicRepository = topicRepository;
    }

    public List<TeacherResearchProject> listLatest(Optional<Long> topicId, int limit) {
        int safeLimit = Math.max(1, Math.min(limit, 200));
        if (topicId.isPresent()) {
            return repository.findByTopicIdOrderByUpdatedAtDescIdDesc(
                    topicId.get(),
                    PageRequest.of(0, safeLimit));
        }
        return repository.findAll(PageRequest.of(
                0,
                safeLimit,
                Sort.by(Sort.Direction.DESC, "updatedAt").and(Sort.by(Sort.Direction.DESC, "id")))).getContent();
    }

    public Optional<TeacherResearchProject> findBySlug(String slug) {
        if (slug == null || slug.isBlank()) {
            return Optional.empty();
        }
        return repository.findBySlug(slug.trim());
    }

    @Transactional
    public TeacherResearchProject create(TeacherResearchProjectUpsertRequest req) {
        Long topicId = requireTopicId(req.topicId());
        String topicTitle = resolveTopicTitle(topicId);
        validateTimeText(req.timeText());
        String title = requireNonBlank(req.title(), "Tiêu đề không được để trống");
        String content = requireNonBlank(req.content(), "Nội dung không được để trống");

        TeacherResearchProject entity = new TeacherResearchProject();
        entity.setTopicId(topicId);
        entity.setTopicTitle(topicTitle);
        entity.setTimeText(req.timeText().trim());
        entity.setTitle(title);
        entity.setImageUrl(trimToNull(req.imageUrl()));
        entity.setContent(content);
        entity.setCreatedAt(LocalDateTime.now());
        entity.setUpdatedAt(LocalDateTime.now());

        String desiredSlug = trimToNull(req.slug());
        String baseSlug = desiredSlug != null ? normalizeSlug(desiredSlug) : normalizeSlug(entity.getTitle());
        entity.setSlug(ensureUniqueSlug(baseSlug));
        return repository.save(entity);
    }

    @Transactional
    public TeacherResearchProject update(Long id, TeacherResearchProjectUpsertRequest req) {
        TeacherResearchProject entity = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy công trình nghiên cứu"));

        Long topicId = requireTopicId(req.topicId());
        String topicTitle = resolveTopicTitle(topicId);
        validateTimeText(req.timeText());
        String title = requireNonBlank(req.title(), "Tiêu đề không được để trống");
        String content = requireNonBlank(req.content(), "Nội dung không được để trống");

        entity.setTopicId(topicId);
        entity.setTopicTitle(topicTitle);
        entity.setTimeText(req.timeText().trim());
        entity.setTitle(title);
        entity.setImageUrl(trimToNull(req.imageUrl()));
        entity.setContent(content);
        entity.setUpdatedAt(LocalDateTime.now());

        String desiredSlug = trimToNull(req.slug());
        if (desiredSlug != null) {
            String normalized = normalizeSlug(desiredSlug);
            if (!Objects.equals(normalized, entity.getSlug())) {
                entity.setSlug(ensureUniqueSlug(normalized));
            }
        }

        return repository.save(entity);
    }

    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            return;
        }
        repository.deleteById(id);
    }

    private static final Pattern YEAR_PATTERN = Pattern.compile("^(19|20)\\d{2}$");
    private static final Pattern DATE_PATTERN = Pattern.compile("^\\d{2}/\\d{2}/(19|20)\\d{2}$");

    public static void validateTimeText(String timeText) {
        if (timeText == null || timeText.isBlank()) {
            throw new IllegalArgumentException("Thời gian không được để trống");
        }
        String value = timeText.trim();
        if (YEAR_PATTERN.matcher(value).matches()) {
            return;
        }
        if (DATE_PATTERN.matcher(value).matches()) {
            return;
        }
        throw new IllegalArgumentException("Thời gian phải là năm (YYYY) hoặc ngày/tháng/năm (DD/MM/YYYY)");
    }

    private String ensureUniqueSlug(String baseSlug) {
        String safeBase = (baseSlug == null || baseSlug.isBlank()) ? "cong-trinh" : baseSlug;
        String candidate = safeBase;
        int suffix = 2;
        while (repository.existsBySlug(candidate)) {
            candidate = safeBase + "-" + suffix;
            suffix++;
        }
        return candidate;
    }

    private static String normalizeSlug(String input) {
        String normalized = Normalizer.normalize(input, Normalizer.Form.NFD);
        normalized = normalized.replaceAll("\\p{InCombiningDiacriticalMarks}+", "");
        normalized = normalized.toLowerCase(Locale.ROOT);
        normalized = normalized.replace('đ', 'd');
        normalized = normalized.replaceAll("[^a-z0-9]+", "-");
        normalized = normalized.replaceAll("^-+|-+$", "");
        if (normalized.isBlank()) {
            return "cong-trinh";
        }
        return normalized;
    }

    private static String trimToNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isBlank() ? null : trimmed;
    }

    private Long requireTopicId(Long topicId) {
        if (topicId == null) {
            throw new IllegalArgumentException("Vui lòng chọn chủ đề");
        }
        return topicId;
    }

    private String resolveTopicTitle(Long topicId) {
        return topicRepository.findById(topicId)
                .map(t -> {
                    String title = trimToNull(t.getTitle());
                    if (title == null) {
                        throw new IllegalArgumentException("Chủ đề không hợp lệ");
                    }
                    return title;
                })
                .orElseThrow(() -> new IllegalArgumentException("Chủ đề không hợp lệ"));
    }

    private static String requireNonBlank(String value, String message) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(message);
        }
        return value.trim();
    }
}
