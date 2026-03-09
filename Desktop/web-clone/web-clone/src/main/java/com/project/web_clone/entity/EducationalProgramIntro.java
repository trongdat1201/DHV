package com.project.web_clone.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "educational_program_intro")
public class EducationalProgramIntro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String programTypeSlug; // dai-hoc, sau-dai-hoc, etc.

    private String programName;
    
    @Column(columnDefinition = "TEXT")
    private String descriptionHtml;

    private LocalDateTime updatedAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getProgramTypeSlug() { return programTypeSlug; }
    public void setProgramTypeSlug(String programTypeSlug) { this.programTypeSlug = programTypeSlug; }
    public String getProgramName() { return programName; }
    public void setProgramName(String programName) { this.programName = programName; }
    public String getDescriptionHtml() { return descriptionHtml; }
    public void setDescriptionHtml(String descriptionHtml) { this.descriptionHtml = descriptionHtml; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    @PrePersist
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
