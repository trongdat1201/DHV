package com.project.web_clone.entity;

import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.BatchSize;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import jakarta.persistence.Table;

/**
 * Năm học của EducationalProgram.
 * Dùng Set<ProgramCurriculumSubject> thay List<> để an toàn khi load cùng sections.
 */
@Entity
@Table(name = "program_curriculum_year")
public class ProgramCurriculumYear {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String yearTitle;

    /** Optional hero image URL for this curriculum year. */
    @Column(length = 1000)
    private String imageUrl;

    /** Optional rich-text description (TinyMCE HTML). */
    @Column(columnDefinition = "TEXT")
    private String html;

    private int orderIndex;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "program_id", nullable = false)
    @JsonIgnore
    private EducationalProgram program;

    @OneToMany(mappedBy = "curriculumYear", cascade = CascadeType.ALL,
               orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderBy("orderIndex ASC")
    @BatchSize(size = 50)
    private Set<ProgramCurriculumSubject> subjects = new LinkedHashSet<>();

    // ── equals / hashCode ────────────────────────────────────────────────────

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProgramCurriculumYear)) return false;
        ProgramCurriculumYear that = (ProgramCurriculumYear) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() { return getClass().hashCode(); }

    // ── Getters / Setters ────────────────────────────────────────────────────

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getYearTitle() { return yearTitle; }
    public void setYearTitle(String yearTitle) { this.yearTitle = yearTitle; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getHtml() { return html; }
    public void setHtml(String html) { this.html = html; }

    public int getOrderIndex() { return orderIndex; }
    public void setOrderIndex(int orderIndex) { this.orderIndex = orderIndex; }

    public EducationalProgram getProgram() { return program; }
    public void setProgram(EducationalProgram program) { this.program = program; }

    public Set<ProgramCurriculumSubject> getSubjects() { return subjects; }
    public void setSubjects(Set<ProgramCurriculumSubject> subjects) {
        this.subjects.clear();
        if (subjects != null) {
            for (ProgramCurriculumSubject s : subjects) {
                if (s != null) { s.setCurriculumYear(this); this.subjects.add(s); }
            }
        }
    }
}
