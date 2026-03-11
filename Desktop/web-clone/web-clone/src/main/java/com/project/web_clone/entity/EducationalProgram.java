package com.project.web_clone.entity;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

import org.hibernate.annotations.BatchSize;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;


@Entity
@Table(
    name = "educational_program",
    indexes = {
        @Index(name = "idx_ep_slug", columnList = "slug", unique = true),
        @Index(name = "idx_ep_type", columnList = "type")
    }
)
public class EducationalProgram {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(length = 1000)
    private String thumbnail;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ProgramType type;

    private boolean isActive = true;

    private int orderIndex;

    // ── Chương trình học (cố định – giống Đại học) ──────────────────────────
    // Set<> không gây MultipleBagFetchException; @BatchSize tránh N+1
    @OneToMany(mappedBy = "program", cascade = CascadeType.ALL,
               orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderBy("orderIndex ASC")
    @BatchSize(size = 50)
    private Set<ProgramCurriculumYear> curriculumYears = new LinkedHashSet<>();

    // ── Section linh hoạt (dynamic) ─────────────────────────────────────────
    @OneToMany(mappedBy = "program", cascade = CascadeType.ALL,
               orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderBy("orderIndex ASC")
    @BatchSize(size = 50)
    private Set<ProgramSection> sections = new LinkedHashSet<>();

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() { createdAt = updatedAt = LocalDateTime.now(); }

    @PreUpdate
    protected void onUpdate() { updatedAt = LocalDateTime.now(); }

    // ── equals / hashCode theo id (Hibernate best practice) ─────────────────

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof EducationalProgram)) return false;
        EducationalProgram that = (EducationalProgram) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() { return getClass().hashCode(); }

    // ── Getters / Setters ────────────────────────────────────────────────────

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public String getThumbnail() { return thumbnail; }
    public void setThumbnail(String thumbnail) { this.thumbnail = thumbnail; }

    public ProgramType getType() { return type; }
    public void setType(ProgramType type) { this.type = type; }

    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }

    public int getOrderIndex() { return orderIndex; }
    public void setOrderIndex(int orderIndex) { this.orderIndex = orderIndex; }

    public Set<ProgramCurriculumYear> getCurriculumYears() { return curriculumYears; }
    public void setCurriculumYears(Set<ProgramCurriculumYear> years) {
        this.curriculumYears.clear();
        if (years != null) {
            for (ProgramCurriculumYear y : years) {
                if (y != null) { y.setProgram(this); this.curriculumYears.add(y); }
            }
        }
    }

    public Set<ProgramSection> getSections() { return sections; }
    public void setSections(Set<ProgramSection> sections) {
        this.sections.clear();
        if (sections != null) {
            for (ProgramSection s : sections) {
                if (s != null) { s.setProgram(this); this.sections.add(s); }
            }
        }
    }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
}
