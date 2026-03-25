package com.project.web_clone.model;

import com.project.web_clone.entity.StudentResearchTopic;

import java.time.Instant;

public record StudentResearchTopicDto(
        Long id,
        String locale,
        String imageUrl,
        String title,
        String timePoint,
        String projectName,
        String description,
        Integer sortOrder,
        Instant createdAt,
        Instant updatedAt) {
    public static StudentResearchTopicDto fromEntity(StudentResearchTopic e) {
        return new StudentResearchTopicDto(
                e.getId(),
                e.getLocale(),
                e.getImageUrl(),
                e.getTitle(),
                e.getTimePoint(),
                e.getProjectName(),
                e.getDescription(),
                e.getSortOrder(),
                e.getCreatedAt(),
                e.getUpdatedAt());
    }
}
