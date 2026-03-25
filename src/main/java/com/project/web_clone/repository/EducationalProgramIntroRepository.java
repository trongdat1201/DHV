package com.project.web_clone.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.EducationalProgramIntro;

public interface EducationalProgramIntroRepository extends JpaRepository<EducationalProgramIntro, Long> {
    Optional<EducationalProgramIntro> findByProgramTypeSlug(String programTypeSlug);
}
