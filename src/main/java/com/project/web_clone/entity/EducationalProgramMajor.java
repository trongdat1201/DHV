package com.project.web_clone.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "educational_program_majors")
public class EducationalProgramMajor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String programTypeSlug; // dai-hoc, sau-dai-hoc...

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String summary; // Mô tả chung (dùng cho cả list và detail)

    @Column(length = 1000)
    private String heroImageUrl; // Ảnh banner/ảnh đại diện

    @Column(columnDefinition = "LONGTEXT")
    private String careerProspectHtml;

    @Column(columnDefinition = "LONGTEXT")
    private String jobOpportunityHtml;

    @Column(columnDefinition = "LONGTEXT")
    private String ploHtml;

    @Column(columnDefinition = "LONGTEXT")
    private String ploKnowledge;

    @Column(columnDefinition = "LONGTEXT")
    private String ploSkills;

    @Column(columnDefinition = "LONGTEXT")
    private String ploAutonomy;

    @OneToMany(mappedBy = "major", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("year DESC")
    private List<MajorCurriculum> curriculums = new ArrayList<>();

    private int orderIndex;
    private boolean isActive = true;
    private LocalDateTime updatedAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProgramTypeSlug() { return programTypeSlug; }
    public void setProgramTypeSlug(String programTypeSlug) { this.programTypeSlug = programTypeSlug; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public String getHeroImageUrl() { return heroImageUrl; }
    public void setHeroImageUrl(String heroImageUrl) { this.heroImageUrl = heroImageUrl; }

    public String getCareerProspectHtml() { return careerProspectHtml; }
    public void setCareerProspectHtml(String careerProspectHtml) { this.careerProspectHtml = careerProspectHtml; }

    public String getJobOpportunityHtml() { return jobOpportunityHtml; }
    public void setJobOpportunityHtml(String jobOpportunityHtml) { this.jobOpportunityHtml = jobOpportunityHtml; }

    public String getPloHtml() { return ploHtml; }
    public void setPloHtml(String ploHtml) { this.ploHtml = ploHtml; }

    public String getPloKnowledge() { return ploKnowledge; }
    public void setPloKnowledge(String ploKnowledge) { this.ploKnowledge = ploKnowledge; }

    public String getPloSkills() { return ploSkills; }
    public void setPloSkills(String ploSkills) { this.ploSkills = ploSkills; }

    public String getPloAutonomy() { return ploAutonomy; }
    public void setPloAutonomy(String ploAutonomy) { this.ploAutonomy = ploAutonomy; }

    public List<MajorCurriculum> getCurriculums() { return curriculums; }
    public void setCurriculums(List<MajorCurriculum> curriculums) {
        this.curriculums = (curriculums == null) ? new ArrayList<>() : curriculums;
        for (MajorCurriculum c : this.curriculums) {
            if (c != null) c.setMajor(this);
        }
    }

    public int getOrderIndex() { return orderIndex; }
    public void setOrderIndex(int orderIndex) { this.orderIndex = orderIndex; }

    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    @PrePersist
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
