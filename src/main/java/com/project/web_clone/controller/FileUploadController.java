package com.project.web_clone.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/upload")
public class FileUploadController {

    private static final String DEFAULT_FOLDER = "news";
    private static final Set<String> ALLOWED_FOLDERS = new HashSet<>(Arrays.asList("news", "events", "alumni"));

    @Value("${app.upload-dir:./uploads}")
    private String uploadDir;

    @PostMapping("/image")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file,
                                          @RequestParam(value = "folder", required = false) String folder) {
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "File rỗng"));
            }

            String contentType = file.getContentType();
            if (contentType == null || !contentType.startsWith("image/")) {
                return ResponseEntity.badRequest().body(Map.of("error", "Chỉ cho phép upload ảnh"));
            }

            String originalFilename = file.getOriginalFilename();
            String extension = "";
            if (originalFilename != null && originalFilename.contains(".")) {
                extension = originalFilename.substring(originalFilename.lastIndexOf("."));
            }
            String filename = UUID.randomUUID().toString() + extension;

            String normalizedFolder = DEFAULT_FOLDER;
            if (folder != null) {
                normalizedFolder = folder.trim().toLowerCase();
            }
            if (normalizedFolder.isEmpty()) {
                normalizedFolder = DEFAULT_FOLDER;
            }

            if (!ALLOWED_FOLDERS.contains(normalizedFolder)) {
                return ResponseEntity.badRequest()
                    .body(Map.of("error", "Folder không hợp lệ. Chỉ cho phép: news, events, alumni"));
            }

            Path uploadRoot = Paths.get(uploadDir).toAbsolutePath();
            Path targetDir = uploadRoot.resolve(normalizedFolder);
            if (!Files.exists(targetDir)) {
                Files.createDirectories(targetDir);
            }
            Path targetFile = targetDir.resolve(filename);
            Files.copy(file.getInputStream(), targetFile, StandardCopyOption.REPLACE_EXISTING);

            String imageUrl = "/uploads/" + normalizedFolder + "/" + filename;
            Map<String, String> response = new HashMap<>();
            response.put("url", imageUrl);
            response.put("filename", filename);

            return ResponseEntity.ok(response);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Lỗi khi upload: " + e.getMessage()));
        }
    }
}