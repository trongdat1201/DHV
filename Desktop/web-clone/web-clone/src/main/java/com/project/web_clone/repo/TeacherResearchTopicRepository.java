package com.project.web_clone.repo;

import com.project.web_clone.entity.TeacherResearchTopic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TeacherResearchTopicRepository extends JpaRepository<TeacherResearchTopic, Long> {
    List<TeacherResearchTopic> findByLocaleOrderBySortOrderAscIdDesc(String locale);

    boolean existsByLocaleAndTitleIgnoreCase(String locale, String title);

    Optional<TeacherResearchTopic> findFirstByLocaleAndTitleIgnoreCase(String locale, String title);
}
