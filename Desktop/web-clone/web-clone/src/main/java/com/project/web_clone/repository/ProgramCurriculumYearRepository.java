package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.ProgramCurriculumYear;

public interface ProgramCurriculumYearRepository extends JpaRepository<ProgramCurriculumYear, Long> {

    List<ProgramCurriculumYear> findByProgramIdOrderByOrderIndexAsc(Long programId);

    void deleteByProgramId(Long programId);
}
