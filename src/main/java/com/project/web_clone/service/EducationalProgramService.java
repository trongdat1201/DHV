package com.project.web_clone.service;

import java.text.Normalizer;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.web_clone.entity.EducationalProgramIntro;
import com.project.web_clone.entity.EducationalProgramMajor;
import com.project.web_clone.entity.MajorCurriculum;
import com.project.web_clone.repository.EducationalProgramIntroRepository;
import com.project.web_clone.repository.EducationalProgramMajorRepository;

@Service
public class EducationalProgramService {

    private final EducationalProgramIntroRepository introRepository;
    private final EducationalProgramMajorRepository majorRepository;

    public EducationalProgramService(
            EducationalProgramIntroRepository introRepository,
            EducationalProgramMajorRepository majorRepository) {
        this.introRepository = introRepository;
        this.majorRepository = majorRepository;
    }

    // ===================== INTRO =====================

    public Optional<EducationalProgramIntro> getIntro(String programTypeSlug) {
        return introRepository.findByProgramTypeSlug(programTypeSlug);
    }

    @Transactional
    public EducationalProgramIntro upsertIntro(String programTypeSlug, EducationalProgramIntro payload) {
        EducationalProgramIntro intro = introRepository.findByProgramTypeSlug(programTypeSlug)
                .orElseGet(EducationalProgramIntro::new);

        intro.setProgramTypeSlug(programTypeSlug);
        intro.setProgramName(payload.getProgramName());
        intro.setDescriptionHtml(payload.getDescriptionHtml());

        return introRepository.save(intro);
    }

    // ===================== MAJORS =====================

    public List<EducationalProgramMajor> getMajors(String programTypeSlug) {
        return majorRepository.findByProgramTypeSlugOrderByOrderIndexAsc(programTypeSlug);
    }

    public Optional<EducationalProgramMajor> getMajorBySlug(String programTypeSlug, String majorSlug) {
        return majorRepository.findByProgramTypeSlugAndSlug(programTypeSlug, majorSlug);
    }

    @Transactional
    public EducationalProgramMajor createMajor(String programTypeSlug, EducationalProgramMajor payload) {
        payload.setId(null);
        payload.setProgramTypeSlug(programTypeSlug);

        if (payload.getName() == null || payload.getName().isBlank()) {
            throw new IllegalArgumentException("Major name is required");
        }

        payload.setSlug(generateSlug(payload.getName()));

        if (payload.getOrderIndex() == 0) {
            int nextOrder = majorRepository.findByProgramTypeSlugOrderByOrderIndexAsc(programTypeSlug)
                    .stream()
                    .map(EducationalProgramMajor::getOrderIndex)
                    .max(Comparator.naturalOrder())
                    .orElse(0) + 1;
            payload.setOrderIndex(nextOrder);
        }

        // Ensure curriculum relations are wired
        if (payload.getCurriculums() != null) {
            for (MajorCurriculum c : payload.getCurriculums()) {
                if (c != null) c.setMajor(payload);
            }
        }

        return majorRepository.save(payload);
    }

    @Transactional
    public EducationalProgramMajor updateMajor(Long id, EducationalProgramMajor payload) {
        if (id == null) {
            throw new IllegalArgumentException("Major ID is required");
        }

        EducationalProgramMajor existing = majorRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Major not found: " + id));

        // --- Các field bắt buộc ---
        if (payload.getName() == null || payload.getName().isBlank()) {
            throw new IllegalArgumentException("Major name is required");
        }
        existing.setName(payload.getName());
        existing.setSlug(generateSlug(payload.getName()));

        // --- Text fields: chỉ ghi đè khi payload khác null (giữ nguyên dữ liệu cũ nếu frontend không gửi) ---
        if (payload.getSummary() != null) {
            existing.setSummary(payload.getSummary());
        }
        if (payload.getHeroImageUrl() != null) {
            existing.setHeroImageUrl(payload.getHeroImageUrl());
        }
        if (payload.getCareerProspectHtml() != null) {
            existing.setCareerProspectHtml(payload.getCareerProspectHtml());
        }
        if (payload.getJobOpportunityHtml() != null) {
            existing.setJobOpportunityHtml(payload.getJobOpportunityHtml());
        }
        if (payload.getPloHtml() != null) {
            existing.setPloHtml(payload.getPloHtml());
        }

        // --- PLO fields (trước đây bị bỏ sót, ghi đè null xuống DB) ---
        if (payload.getPloKnowledge() != null) {
            existing.setPloKnowledge(payload.getPloKnowledge());
        }
        if (payload.getPloSkills() != null) {
            existing.setPloSkills(payload.getPloSkills());
        }
        if (payload.getPloAutonomy() != null) {
            existing.setPloAutonomy(payload.getPloAutonomy());
        }

        // --- orderIndex: chỉ cập nhật nếu frontend gửi giá trị hợp lệ (> 0) ---
        if (payload.getOrderIndex() > 0) {
            existing.setOrderIndex(payload.getOrderIndex());
        }

        // --- Curriculums: clear + re-add để orphanRemoval dọn bản ghi cũ ---
        existing.getCurriculums().clear();
        if (payload.getCurriculums() != null) {
            for (MajorCurriculum c : payload.getCurriculums()) {
                if (c != null) {
                    c.setId(null);      // luôn insert mới, tránh detached-entity conflict
                    c.setMajor(existing);
                    existing.getCurriculums().add(c);
                }
            }
        }

        return majorRepository.save(existing);
    }

    @Transactional
    public void deleteMajor(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Major ID is required");
        }
        majorRepository.deleteById(id);
    }

    // Utility to generate slug
    private String generateSlug(String input) {
        if (input == null || input.isBlank())
            return "";

        String nowhitespace = input.toLowerCase().trim().replaceAll("\\s+", "-");
        String normalized = Normalizer.normalize(nowhitespace, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("");
        return slug.replaceAll("[^a-z0-9-]", "").replaceAll("-+", "-");
    }
}
