package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.MajorCurriculum;

public interface MajorCurriculumRepository extends JpaRepository<MajorCurriculum, Long> {
    List<MajorCurriculum> findByMajorIdOrderByYearAsc(Long majorId);
}
