package com.project.web_clone.repo;

import com.project.web_clone.entity.StudentResearchTopic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentResearchTopicRepository extends JpaRepository<StudentResearchTopic, Long> {
    List<StudentResearchTopic> findByLocaleOrderBySortOrderAscIdDesc(String locale);
}
