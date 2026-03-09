package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.ProgramCurriculumSubject;

public interface ProgramCurriculumSubjectRepository extends JpaRepository<ProgramCurriculumSubject, Long> {

    List<ProgramCurriculumSubject> findByCurriculumYearIdOrderByOrderIndexAsc(Long yearId);

    void deleteByCurriculumYearId(Long yearId);
}
