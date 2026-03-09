package com.project.web_clone.controller;

import com.project.web_clone.model.StudentResearchTopicDto;
import com.project.web_clone.service.StudentResearchTopicService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/student-research-topics")
public class StudentResearchTopicController {

    private final StudentResearchTopicService service;

    public StudentResearchTopicController(StudentResearchTopicService service) {
        this.service = service;
    }

    @GetMapping
    public List<StudentResearchTopicDto> list(@RequestParam(value = "locale", required = false) String locale) {
        return service.list(locale).stream().map(StudentResearchTopicDto::fromEntity).toList();
    }
}
