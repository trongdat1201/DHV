package com.project.web_clone.service;

import java.text.Normalizer;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.web_clone.entity.EducationalProgram;
import com.project.web_clone.entity.ProgramCurriculumSubject;
import com.project.web_clone.entity.ProgramCurriculumYear;
import com.project.web_clone.entity.ProgramSection;
import com.project.web_clone.entity.ProgramSectionItem;
import com.project.web_clone.entity.ProgramType;
import com.project.web_clone.repository.EducationalProgramRepository;

@Service
public class EducationalProgramDetailService {

    private final EducationalProgramRepository programRepo;

    public EducationalProgramDetailService(EducationalProgramRepository programRepo) {
        this.programRepo = programRepo;
    }

    // ── READ ─────────────────────────────────────────────────────────────────

    public List<EducationalProgram> getByType(ProgramType type) {
        return programRepo.findByTypeOrderByOrderIndexAsc(type);
    }

    public List<EducationalProgram> getActiveByType(ProgramType type) {
        return programRepo.findByTypeAndIsActiveTrueOrderByOrderIndexAsc(type);
    }

    public Optional<EducationalProgram> getBySlug(String slug) {
        return programRepo.findBySlug(slug);
    }

    /**
     * Load đầy đủ program + sections + items + curriculumYears + subjects
     * theo slug — an toàn, không bị MultipleBagFetchException, không LazyInit.
     *
     * Chiến lược: findBySlug (simple) + explicit init trong cùng @Transactional.
     * @BatchSize(50) trên mỗi collection → Hibernate tự batch tất cả N IDs
     * vào 1 IN-query, tránh N+1.
     * Tổng: ~4 queries. Không exception. Đảm bảo dữ liệu đầy đủ khi render.
     */
    @Transactional(readOnly = true)
    public Optional<EducationalProgram> getDetailBySlug(String slug) {
        Optional<EducationalProgram> progOpt = programRepo.findBySlug(slug);
        if (progOpt.isEmpty()) return Optional.empty();

        EducationalProgram program = progOpt.get();

        // Init sections (1 query nhờ @BatchSize)
        program.getSections().size();
        // Init items của từng section (1 IN-query nhờ @BatchSize)
        for (ProgramSection section : program.getSections()) {
            section.getItems().size();
        }

        // Init curriculumYears (1 query nhờ @BatchSize)
        program.getCurriculumYears().size();
        // Init subjects của từng year (1 IN-query nhờ @BatchSize)
        for (ProgramCurriculumYear year : program.getCurriculumYears()) {
            year.getSubjects().size();
        }

        return Optional.of(program);
    }

    // ── CREATE ────────────────────────────────────────────────────────────────

    @Transactional
    public EducationalProgram create(ProgramType type, EducationalProgram payload) {
        payload.setId(null);
        payload.setType(type);

        if (payload.getName() == null || payload.getName().isBlank()) {
            throw new IllegalArgumentException("Name is required");
        }
        if (payload.getSlug() == null || payload.getSlug().isBlank()) {
            payload.setSlug(generateSlug(payload.getName()));
        }
        if (programRepo.existsBySlug(payload.getSlug())) {
            throw new IllegalArgumentException("Slug already exists: " + payload.getSlug());
        }

        wireCurriculumYears(payload);
        wireSections(payload);

        return programRepo.save(payload);
    }

    // ── UPDATE ────────────────────────────────────────────────────────────────

    @Transactional
    public EducationalProgram update(Long id, EducationalProgram payload) {
        EducationalProgram existing = programRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Program not found: " + id));

        if (payload.getName() != null && !payload.getName().isBlank()) {
            existing.setName(payload.getName());
        }
        if (payload.getSummary() != null)   existing.setSummary(payload.getSummary());
        if (payload.getThumbnail() != null) existing.setThumbnail(payload.getThumbnail());
        if (payload.getOrderIndex() > 0)    existing.setOrderIndex(payload.getOrderIndex());

        // ── Curriculum years: clear + re-add ────────────────────────────────
        if (payload.getCurriculumYears() != null) {
            existing.getCurriculumYears().clear();
            for (ProgramCurriculumYear y : payload.getCurriculumYears()) {
                if (y == null) continue;
                y.setId(null);
                y.setProgram(existing);
                if (y.getSubjects() != null) {
                    for (ProgramCurriculumSubject s : y.getSubjects()) {
                        if (s != null) { s.setId(null); s.setCurriculumYear(y); }
                    }
                }
                existing.getCurriculumYears().add(y);
            }
        }

        // ── Sections: clear + re-add ─────────────────────────────────────────
        if (payload.getSections() != null) {
            existing.getSections().clear();
            for (ProgramSection sec : payload.getSections()) {
                if (sec == null) continue;
                sec.setId(null);
                sec.setProgram(existing);
                if (sec.getItems() != null) {
                    for (ProgramSectionItem item : sec.getItems()) {
                        if (item != null) { item.setId(null); item.setSection(sec); }
                    }
                }
                existing.getSections().add(sec);
            }
        }

        return programRepo.save(existing);
    }

    // ── DELETE ────────────────────────────────────────────────────────────────

    @Transactional
    public void delete(Long id) {
        if (!programRepo.existsById(id)) {
            throw new IllegalArgumentException("Program not found: " + id);
        }
        programRepo.deleteById(id);
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private void wireCurriculumYears(EducationalProgram program) {
        if (program.getCurriculumYears() == null) return;
        for (ProgramCurriculumYear y : program.getCurriculumYears()) {
            if (y == null) continue;
            y.setProgram(program);
            if (y.getSubjects() != null) {
                for (ProgramCurriculumSubject s : y.getSubjects()) {
                    if (s != null) s.setCurriculumYear(y);
                }
            }
        }
    }

    private void wireSections(EducationalProgram program) {
        if (program.getSections() == null) return;
        for (ProgramSection sec : program.getSections()) {
            if (sec == null) continue;
            sec.setProgram(program);
            if (sec.getItems() != null) {
                for (ProgramSectionItem item : sec.getItems()) {
                    if (item != null) item.setSection(sec);
                }
            }
        }
    }

    private String generateSlug(String input) {
        if (input == null || input.isBlank()) return "";
        String noWhitespace = input.toLowerCase().trim().replaceAll("\\s+", "-");
        String normalized = Normalizer.normalize(noWhitespace, Normalizer.Form.NFD);
        String slug = Pattern.compile("\\p{InCombiningDiacriticalMarks}+")
                             .matcher(normalized).replaceAll("");
        return slug.replaceAll("[^a-z0-9-]", "").replaceAll("-+", "-");
    }
}
