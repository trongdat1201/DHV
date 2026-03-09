package com.project.web_clone.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "major_curriculums")
public class MajorCurriculum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;

    @Column(columnDefinition = "LONGTEXT")
    private String html;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_id")
    @JsonIgnore
    private EducationalProgramMajor major;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }

    public String getHtml() { return html; }
    public void setHtml(String html) { this.html = html; }

    public EducationalProgramMajor getMajor() { return major; }
    public void setMajor(EducationalProgramMajor major) { this.major = major; }
}