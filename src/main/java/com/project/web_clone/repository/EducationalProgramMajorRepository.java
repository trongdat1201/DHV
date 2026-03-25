package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.EducationalProgramMajor;

public interface EducationalProgramMajorRepository extends JpaRepository<EducationalProgramMajor, Long> {
    List<EducationalProgramMajor> findByProgramTypeSlugOrderByOrderIndexAsc(String programTypeSlug);

    java.util.Optional<EducationalProgramMajor> findByProgramTypeSlugAndSlug(String programTypeSlug, String slug);
}
