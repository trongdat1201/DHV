package com.project.web_clone.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.web_clone.entity.EducationalProgramIntro;
import com.project.web_clone.entity.EducationalProgramMajor;
import com.project.web_clone.service.EducationalProgramService;

@RestController
@RequestMapping("/api/educational-program")
public class EducationalProgramApiController {

    private final EducationalProgramService educationalProgramService;

    public EducationalProgramApiController(EducationalProgramService educationalProgramService) {
        this.educationalProgramService = educationalProgramService;
    }

    // ===================== INTRO =====================

    @GetMapping("/{programTypeSlug}/intro")
    public ResponseEntity<EducationalProgramIntro> getIntro(@PathVariable String programTypeSlug) {
        return educationalProgramService.getIntro(programTypeSlug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.ok(new EducationalProgramIntro()));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{programTypeSlug}/intro")
    public ResponseEntity<EducationalProgramIntro> upsertIntro(
            @PathVariable String programTypeSlug,
            @RequestBody EducationalProgramIntro payload) {
        return ResponseEntity.ok(educationalProgramService.upsertIntro(programTypeSlug, payload));
    }

    // ===================== MAJORS =====================

    @GetMapping("/{programTypeSlug}/majors")
    public ResponseEntity<Map<String, Object>> getMajors(@PathVariable String programTypeSlug) {
        List<EducationalProgramMajor> majors = educationalProgramService.getMajors(programTypeSlug);
        Map<String, Object> res = new HashMap<>();
        res.put("items", majors);
        return ResponseEntity.ok(res);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{programTypeSlug}/majors")
    public ResponseEntity<EducationalProgramMajor> createMajor(
            @PathVariable String programTypeSlug,
            @RequestBody EducationalProgramMajor payload) {
        return ResponseEntity.ok(educationalProgramService.createMajor(programTypeSlug, payload));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/majors/{id}")
    public ResponseEntity<EducationalProgramMajor> updateMajor(
            @PathVariable Long id,
            @RequestBody EducationalProgramMajor payload) {
        return ResponseEntity.ok(educationalProgramService.updateMajor(id, payload));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/majors/{id}")
    public ResponseEntity<Void> deleteMajor(@PathVariable Long id) {
        educationalProgramService.deleteMajor(id);
        return ResponseEntity.ok().build();
    }
}
