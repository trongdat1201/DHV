package com.project.web_clone.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.project.web_clone.dto.TeacherResearchProjectDto;
import com.project.web_clone.service.TeacherResearchProjectService;

@RestController
@RequestMapping("/api/teacher-research-projects")
public class TeacherResearchProjectApiController {
    private final TeacherResearchProjectService service;

    public TeacherResearchProjectApiController(TeacherResearchProjectService service) {
        this.service = service;
    }

    @GetMapping
    public List<TeacherResearchProjectDto> list(
            @RequestParam(name = "topicId", required = false) Long topicId,
            @RequestParam(name = "limit", defaultValue = "100") int limit) {
        return service.listLatest(Optional.ofNullable(topicId), limit)
                .stream()
                .map(TeacherResearchProjectDto::fromEntity)
                .toList();
    }

    @GetMapping("/by-slug/{slug}")
    public TeacherResearchProjectDto getBySlug(@PathVariable("slug") String slug) {
        return service.findBySlug(slug)
                .map(TeacherResearchProjectDto::fromEntity)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Không tìm thấy công trình nghiên cứu"));
    }
}
