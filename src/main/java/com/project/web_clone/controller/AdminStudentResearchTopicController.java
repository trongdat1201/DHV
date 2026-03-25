package com.project.web_clone.controller;

import com.project.web_clone.model.CreateStudentResearchTopicRequest;
import com.project.web_clone.model.StudentResearchTopicDto;
import com.project.web_clone.service.StudentResearchTopicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/admin/student-research-topics")
public class AdminStudentResearchTopicController {

    private final StudentResearchTopicService service;

    public AdminStudentResearchTopicController(StudentResearchTopicService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody CreateStudentResearchTopicRequest req) {
        try {
            var created = service.create(req);
            return ResponseEntity.ok(StudentResearchTopicDto.fromEntity(created));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody CreateStudentResearchTopicRequest req) {
        try {
            var updated = service.update(id, req);
            return ResponseEntity.ok(StudentResearchTopicDto.fromEntity(updated));
        } catch (NoSuchElementException ex) {
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        try {
            service.delete(id);
            return ResponseEntity.ok().build();
        } catch (NoSuchElementException ex) {
            return ResponseEntity.status(404).body("Không tìm thấy đề tài với id: " + id);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body("Lỗi khi xóa đề tài: " + ex.getMessage());
        }
    }
}
