package com.project.web_clone.dto;

public record TeacherResearchProjectUpsertRequest(
        Long topicId,
        String topicTitle,
        String timeText,
        String title,
        String imageUrl,
        String content,
        String slug) {
}
