package com.project.web_clone.model;

import com.project.web_clone.entity.TeacherResearchTopic;

public record TeacherResearchTopicDto(
        Long id,
        String locale,
        String title,
        Integer sortOrder) {
    public static TeacherResearchTopicDto fromEntity(TeacherResearchTopic e) {
        return new TeacherResearchTopicDto(
                e.getId(),
                e.getLocale(),
                e.getTitle(),
                e.getSortOrder());
    }
}
