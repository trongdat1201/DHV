package com.project.web_clone.dto;

import java.time.LocalDateTime;

import com.project.web_clone.entity.TeacherResearchProject;

public record TeacherResearchProjectDto(
        Long id,
        Long topicId,
        String topicTitle,
        String timeText,
        String title,
        String slug,
        String imageUrl,
        String content,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {

    public static TeacherResearchProjectDto fromEntity(TeacherResearchProject entity) {
        return new TeacherResearchProjectDto(
                entity.getId(),
                entity.getTopicId(),
                entity.getTopicTitle(),
                entity.getTimeText(),
                entity.getTitle(),
                entity.getSlug(),
                entity.getImageUrl(),
                entity.getContent(),
                entity.getCreatedAt(),
                entity.getUpdatedAt());
    }
}
