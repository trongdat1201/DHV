package com.project.web_clone.controller;

import com.project.web_clone.model.CreateTeacherResearchTopicRequest;
import com.project.web_clone.model.TeacherResearchTopicDto;
import com.project.web_clone.service.TeacherResearchTopicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/admin/teacher-research-topics")
public class AdminTeacherResearchTopicController {

    private final TeacherResearchTopicService service;

    public AdminTeacherResearchTopicController(TeacherResearchTopicService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody CreateTeacherResearchTopicRequest req) {
        try {
            var created = service.create(req);
            return ResponseEntity.ok(TeacherResearchTopicDto.fromEntity(created));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody CreateTeacherResearchTopicRequest req) {
        try {
            var updated = service.update(id, req);
            return ResponseEntity.ok(TeacherResearchTopicDto.fromEntity(updated));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        try {
            service.delete(id);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
}
