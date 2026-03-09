package com.project.web_clone.config;

import com.project.web_clone.service.SettingsService;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.Map;

@ControllerAdvice
public class GlobalViewModel {

    private final SettingsService settingsService;

    public GlobalViewModel(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    @ModelAttribute("settings")
    public Map<String, String> settings() {
        return settingsService.load("vi");
    }
}
