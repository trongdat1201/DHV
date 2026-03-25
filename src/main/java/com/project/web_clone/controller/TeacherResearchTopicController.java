package com.project.web_clone.controller;

import com.project.web_clone.model.TeacherResearchTopicDto;
import com.project.web_clone.service.TeacherResearchTopicService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/teacher-research-topics")
public class TeacherResearchTopicController {

    private final TeacherResearchTopicService service;

    public TeacherResearchTopicController(TeacherResearchTopicService service) {
        this.service = service;
    }

    @GetMapping
    public List<TeacherResearchTopicDto> list(@RequestParam(value = "locale", required = false) String locale) {
        return service.list(locale).stream().map(TeacherResearchTopicDto::fromEntity).toList();
    }
}
