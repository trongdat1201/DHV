package com.project.web_clone.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.DirectoryStream;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
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

    // Đường dẫn lưu file gốc (dựa trên thư mục dự án hiện tại)
    private static final String DEFAULT_FOLDER = "news";
    private static final Set<String> ALLOWED_FOLDERS = new HashSet<>(Arrays.asList("news", "events", "alumni"));

    @PostMapping("/image")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file,
                                          @RequestParam(value = "folder", required = false) String folder) {
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
            String normalizedFolder = DEFAULT_FOLDER;
            if (folder != null) {
                normalizedFolder = folder.trim().toLowerCase();
            }
            if (normalizedFolder == null || normalizedFolder.isEmpty()) {
                normalizedFolder = DEFAULT_FOLDER;
            }

            if (!ALLOWED_FOLDERS.contains(normalizedFolder)) {
                return ResponseEntity.badRequest()
                    .body(Map.of("error", "Folder không hợp lệ. Chỉ cho phép: news, events, alumni"));
            }

            Path sourceUploadRoot = resolveUploadRoot();
            Path sourceDir = sourceUploadRoot.resolve(normalizedFolder);
            if (!Files.exists(sourceDir)) {
                Files.createDirectories(sourceDir);
            }
            Path sourceFilePath = sourceDir.resolve(filename);
            Files.copy(file.getInputStream(), sourceFilePath, StandardCopyOption.REPLACE_EXISTING);

            // Trả về URL của ảnh
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

    private static Path resolveUploadRoot() throws IOException {
        Path userDir = Paths.get(System.getProperty("user.dir"));
        Path[] candidates = new Path[] {
            userDir.resolve("src").resolve("main").resolve("resources").resolve("static").resolve("uploads"),
            userDir.resolve("web-clone").resolve("src").resolve("main").resolve("resources").resolve("static").resolve("uploads")
        };

        for (Path candidate : candidates) {
            if (Files.exists(candidate)) {
                return candidate;
            }
        }

        try (DirectoryStream<Path> stream = Files.newDirectoryStream(userDir)) {
            for (Path child : stream) {
                if (!Files.isDirectory(child)) {
                    continue;
                }

                Path nested = child.resolve("src").resolve("main").resolve("resources").resolve("static").resolve("uploads");
                if (Files.exists(nested)) {
                    return nested;
                }
            }
        }

        return userDir.resolve("src").resolve("main").resolve("resources").resolve("static").resolve("uploads");
    }
}
