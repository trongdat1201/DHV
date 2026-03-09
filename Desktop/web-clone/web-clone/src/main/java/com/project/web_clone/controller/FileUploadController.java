package com.project.web_clone.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

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

    // Đường dẫn lưu file (lưu vào target để Spring Boot serve ngay lập tức)
    private static final String UPLOAD_DIR = "target/classes/static/uploads/news/";
    private static final String SOURCE_UPLOAD_DIR = "src/main/resources/static/uploads/news/";

    @PostMapping("/image")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            // Kiểm tra file có rỗng không
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "File rỗng"));
            }

            // Kiểm tra định dạng file (chỉ cho phép ảnh)
            String contentType = file.getContentType();
            if (contentType == null || !contentType.startsWith("image/")) {
                return ResponseEntity.badRequest().body(Map.of("error", "Chỉ cho phép upload ảnh"));
            }

            // Tạo tên file unique
            String originalFilename = file.getOriginalFilename();
            String extension = "";
            if (originalFilename != null && originalFilename.contains(".")) {
                extension = originalFilename.substring(originalFilename.lastIndexOf("."));
            }
            String filename = UUID.randomUUID().toString() + extension;

            // Lưu vào target/classes (để serve ngay)
            Path targetPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(targetPath)) {
                Files.createDirectories(targetPath);
            }
            Path targetFilePath = targetPath.resolve(filename);
            Files.copy(file.getInputStream(), targetFilePath, StandardCopyOption.REPLACE_EXISTING);

            // Lưu vào src/main/resources (để giữ lại khi build)
            Path sourcePath = Paths.get(SOURCE_UPLOAD_DIR);
            if (!Files.exists(sourcePath)) {
                Files.createDirectories(sourcePath);
            }
            Path sourceFilePath = sourcePath.resolve(filename);
            Files.copy(Files.newInputStream(targetFilePath), sourceFilePath, StandardCopyOption.REPLACE_EXISTING);

            // Trả về URL của ảnh
            String imageUrl = "/uploads/news/" + filename;
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
