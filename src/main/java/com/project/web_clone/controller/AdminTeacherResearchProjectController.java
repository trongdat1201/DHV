package com.project.web_clone.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.web_clone.dto.TeacherResearchProjectDto;
import com.project.web_clone.dto.TeacherResearchProjectUpsertRequest;
import com.project.web_clone.service.TeacherResearchProjectService;

@RestController
@RequestMapping("/api/admin/teacher-research-projects")
@PreAuthorize("hasRole('ADMIN')")
public class AdminTeacherResearchProjectController {
    private final TeacherResearchProjectService service;

    public AdminTeacherResearchProjectController(TeacherResearchProjectService service) {
        this.service = service;
    }

    @GetMapping
    public List<TeacherResearchProjectDto> list(
            @RequestParam(name = "topicId", required = false) Long topicId,
            @RequestParam(name = "limit", defaultValue = "200") int limit) {
        return service.listLatest(Optional.ofNullable(topicId), limit)
                .stream()
                .map(TeacherResearchProjectDto::fromEntity)
                .toList();
    }

    @PostMapping
    public TeacherResearchProjectDto create(@RequestBody TeacherResearchProjectUpsertRequest req) {
        return TeacherResearchProjectDto.fromEntity(service.create(req));
    }

    @PutMapping("/{id}")
    public TeacherResearchProjectDto update(
            @PathVariable Long id,
            @RequestBody TeacherResearchProjectUpsertRequest req) {
        return TeacherResearchProjectDto.fromEntity(service.update(id, req));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    // Fallback for environments that block HTTP DELETE
    @PostMapping("/{id}/delete")
    public ResponseEntity<Void> deleteViaPost(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
