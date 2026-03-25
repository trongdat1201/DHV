package com.project.web_clone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.ProgramSectionItem;

public interface ProgramSectionItemRepository extends JpaRepository<ProgramSectionItem, Long> {

    List<ProgramSectionItem> findBySectionIdOrderByOrderIndexAsc(Long sectionId);

    void deleteBySectionId(Long sectionId);
}
