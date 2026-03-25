package com.project.web_clone.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.TeacherResearchProject;

public interface TeacherResearchProjectRepository extends JpaRepository<TeacherResearchProject, Long> {
    boolean existsBySlug(String slug);

    Optional<TeacherResearchProject> findBySlug(String slug);

    List<TeacherResearchProject> findByTopicIdOrderByUpdatedAtDescIdDesc(Long topicId, Pageable pageable);
}
