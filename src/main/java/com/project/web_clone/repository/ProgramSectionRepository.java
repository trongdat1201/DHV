package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.ProgramSection;

public interface ProgramSectionRepository extends JpaRepository<ProgramSection, Long> {

    List<ProgramSection> findByProgramIdOrderByOrderIndexAsc(Long programId);

    void deleteByProgramId(Long programId);
}
