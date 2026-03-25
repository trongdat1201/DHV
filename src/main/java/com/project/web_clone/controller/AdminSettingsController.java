package com.project.web_clone.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.web_clone.model.UpdateSettingRequest;
import com.project.web_clone.service.SettingsService;

@RestController
@RequestMapping("/api")
public class AdminSettingsController {

    private final SettingsService settingsService;
    private static final String UPLOAD_DIR = "src/main/resources/static/uploads/events/";

    public AdminSettingsController(SettingsService settingsService) {
        this.settingsService = settingsService;
    }

    // Original update endpoint
    @PostMapping("/admin/settings/update")
    public ResponseEntity<?> update(@RequestBody UpdateSettingRequest req) {
        if (req.getKey() == null || req.getKey().isBlank()) {
            return ResponseEntity.badRequest().body("Missing key");
        }
        settingsService.updateSetting("vi", req.getKey(), req.getValueType(), req.getValue());
        return ResponseEntity.ok().build();
    }

    // Save individual setting (for inline editing)
    @PostMapping("/settings/{key}")
    public ResponseEntity<?> saveSetting(@PathVariable String key, @RequestBody Map<String, String> body) {
        String value = body.get("value");
        if (value == null) {
            return ResponseEntity.badRequest().body("Missing value");
        }
        settingsService.updateSetting("vi", key, "html", value);
        return ResponseEntity.ok().build();
    }

    // Save event data
    @PostMapping("/settings/event/{eventId}")
    public ResponseEntity<?> saveEvent(@PathVariable String eventId, @RequestBody Map<String, String> eventData) {
        try {
            // Save each field as a separate setting
            String prefix = eventId + "_";
            eventData.forEach((field, value) -> {
                settingsService.updateSetting("vi", prefix + field, "html", value);
            });
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error saving event: " + e.getMessage());
        }
    }

    // Delete event
    @DeleteMapping("/settings/event/{eventId}")
    public ResponseEntity<?> deleteEvent(@PathVariable String eventId) {
        try {
            // Delete all settings related to this event
            String[] fields = {"image", "category", "date", "title", "desc"};
            for (String field : fields) {
                String key = eventId + "_" + field;
                settingsService.deleteSetting(key);
            }
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error deleting event: " + e.getMessage());
        }
    }

    // Delete one setting key (used by inline CRUD blocks such as partner logos)
    @DeleteMapping("/admin/settings/{key}")
    public ResponseEntity<?> deleteSetting(@PathVariable String key) {
        try {
            if (key == null || key.isBlank()) {
                return ResponseEntity.badRequest().body("Missing key");
            }
            settingsService.deleteSetting(key);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error deleting setting: " + e.getMessage());
        }
    }

    // Upload image
    @PostMapping("/upload-image")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, 
                                        @RequestParam("key") String key) {
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body("No file selected");
            }

            // Create uploads directory if it doesn't exist
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Generate unique filename
            String originalFilename = file.getOriginalFilename();
            String extension = originalFilename != null && originalFilename.contains(".") 
                ? originalFilename.substring(originalFilename.lastIndexOf("."))
                : ".jpg";
            String filename = UUID.randomUUID().toString() + extension;
            
            // Save file
            Path filePath = uploadPath.resolve(filename);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Generate URL
            String imageUrl = "/uploads/events/" + filename;

            // Save URL to settings
            settingsService.updateSetting("vi", key, "image", imageUrl);

            Map<String, String> response = new HashMap<>();
            response.put("url", imageUrl);
            response.put("key", key);
            
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            return ResponseEntity.internalServerError()
                .body("Error uploading image: " + e.getMessage());
        }
    }
}
