package com.project.web_clone.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.web_clone.dto.AlumniBannerDTO;
import com.project.web_clone.dto.AlumniQuoteDTO;
import com.project.web_clone.entity.AlumniBanner;
import com.project.web_clone.entity.AlumniQuote;
import com.project.web_clone.repository.AlumniBannerRepository;
import com.project.web_clone.repository.AlumniQuoteRepository;

@RestController
@RequestMapping("/api/alumni")
public class AlumniController {

    private static final Logger logger = LoggerFactory.getLogger(AlumniController.class);
    private final AlumniQuoteRepository alumniQuoteRepository;
    private final AlumniBannerRepository alumniBannerRepository;

    public AlumniController(AlumniQuoteRepository alumniQuoteRepository, AlumniBannerRepository alumniBannerRepository) {
        this.alumniQuoteRepository = alumniQuoteRepository;
        this.alumniBannerRepository = alumniBannerRepository;
    }

    // Get all alumni quotes
    @GetMapping("/quotes")
    public ResponseEntity<List<AlumniQuoteDTO>> getAllQuotes() {
        try {
            logger.info("Getting all alumni quotes");
            List<AlumniQuote> quotes = alumniQuoteRepository.findAllByOrderByCreatedAtDesc();
            logger.info("Found {} quotes", quotes.size());
            List<AlumniQuoteDTO> dtos = quotes.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
            return ResponseEntity.ok(dtos);
        } catch (Exception e) {
            logger.error("Error fetching alumni quotes: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Get specific alumni quote
    @GetMapping("/quotes/{id}")
    public ResponseEntity<AlumniQuoteDTO> getQuoteById(@PathVariable Long id) {
        try {
            logger.info("Getting alumni quote with id: {}", id);
            return alumniQuoteRepository.findById(id)
                .map(quote -> {
                    logger.info("Found quote: {}", quote.getAuthor());
                    return ResponseEntity.ok(convertToDTO(quote));
                })
                .orElseGet(() -> {
                    logger.warn("Quote not found with id: {}", id);
                    return ResponseEntity.notFound().build();
                });
        } catch (Exception e) {
            logger.error("Error fetching alumni quote with id {}: ", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Create new alumni quote
    @PostMapping("/quotes")
    public ResponseEntity<?> createQuote(@RequestBody AlumniQuoteDTO quoteDTO) {
        try {
            logger.info("Creating alumni quote: author={}, position={}", quoteDTO.getAuthor(), quoteDTO.getPosition());
            
            // Validate required fields
            if (quoteDTO.getAuthor() == null || quoteDTO.getAuthor().trim().isEmpty()) {
                logger.warn("Author is required");
                return ResponseEntity.badRequest().body("Author is required");
            }
            if (quoteDTO.getPosition() == null || quoteDTO.getPosition().trim().isEmpty()) {
                logger.warn("Position is required");
                return ResponseEntity.badRequest().body("Position is required");
            }
            
            AlumniQuote quote = new AlumniQuote();
            quote.setAuthor(quoteDTO.getAuthor());
            quote.setPosition(quoteDTO.getPosition());
            
            String description = quoteDTO.getDescription() != null ? quoteDTO.getDescription() : quoteDTO.getContent();
            if (description == null || description.trim().isEmpty()) {
                logger.warn("Description/Content is required");
                return ResponseEntity.badRequest().body("Description is required");
            }
            
            quote.setDescription(description);
            quote.setImageUrl(normalizeImageUrl(quoteDTO.getImageUrl(), "alumni"));
            quote.setCreatedAt(LocalDateTime.now());
            quote.setUpdatedAt(LocalDateTime.now());

            AlumniQuote saved = alumniQuoteRepository.save(quote);
            logger.info("Alumni quote saved successfully with id: {}", saved.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(convertToDTO(saved));
        } catch (Exception e) {
            logger.error("Error creating alumni quote: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }

    // Update alumni quote
    @PutMapping("/quotes/{id}")
    public ResponseEntity<?> updateQuote(@PathVariable Long id, @RequestBody AlumniQuoteDTO quoteDTO) {
        try {
            logger.info("Updating alumni quote with id: {}", id);
            return alumniQuoteRepository.findById(id)
                .map(quote -> {
                    quote.setAuthor(quoteDTO.getAuthor());
                    quote.setPosition(quoteDTO.getPosition());
                    quote.setDescription(quoteDTO.getDescription() != null ? quoteDTO.getDescription() : quoteDTO.getContent());
                    if (quoteDTO.getImageUrl() != null) {
                        quote.setImageUrl(normalizeImageUrl(quoteDTO.getImageUrl(), "alumni"));
                    }
                    quote.setUpdatedAt(LocalDateTime.now());
                    
                    AlumniQuote updated = alumniQuoteRepository.save(quote);
                    logger.info("Alumni quote updated successfully with id: {}", updated.getId());
                    return ResponseEntity.ok(convertToDTO(updated));
                })
                .orElseGet(() -> {
                    logger.warn("Quote not found with id: {}", id);
                    return ResponseEntity.notFound().build();
                });
        } catch (Exception e) {
            logger.error("Error updating alumni quote with id {}: ", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }

    // Delete alumni quote
    @DeleteMapping("/quotes/{id}")
    public ResponseEntity<?> deleteQuote(@PathVariable Long id) {
        try {
            logger.info("Deleting alumni quote with id: {}", id);
            if (alumniQuoteRepository.existsById(id)) {
                alumniQuoteRepository.deleteById(id);
                logger.info("Alumni quote deleted successfully with id: {}", id);
                return ResponseEntity.ok().build();
            } else {
                logger.warn("Quote not found with id: {}", id);
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            logger.error("Error deleting alumni quote with id {}: ", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }

    // Helper method to convert entity to DTO
    private AlumniQuoteDTO convertToDTO(AlumniQuote quote) {
        AlumniQuoteDTO dto = new AlumniQuoteDTO();
        dto.setId(quote.getId());
        dto.setAuthor(quote.getAuthor());
        dto.setPosition(quote.getPosition());
        dto.setDescription(quote.getDescription());
        dto.setContent(quote.getDescription());
        dto.setImageUrl(normalizeImageUrl(quote.getImageUrl(), "alumni"));
        
        // Create picture object structure matching frontend expectations
        if (dto.getImageUrl() != null) {
            PictureDTO picture = new PictureDTO(dto.getImageUrl(), "DHV - Trường Đại Học Hùng Vương TPHCM");
            dto.setPictureQuoute(picture);
        }
        
        return dto;
    }

    private String normalizeImageUrl(String imageUrl, String folder) {
        if (imageUrl == null) {
            return null;
        }

        String trimmed = imageUrl.trim();
        if (trimmed.isEmpty()) {
            return null;
        }

        if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
            return trimmed;
        }

        String cleaned = trimmed;
        if (cleaned.startsWith("/")) {
            cleaned = cleaned.substring(1);
        }

        if (cleaned.startsWith("uploads/")) {
            return "/" + cleaned;
        }

        String normalizedFolder = folder != null ? folder.trim().toLowerCase() : "";
        if (normalizedFolder.isEmpty()) {
            normalizedFolder = "alumni";
        }

        return "/uploads/" + normalizedFolder + "/" + cleaned;
    }

    // Inner class for picture DTO
    public static class PictureDTO {
        private String url;
        private String alt;

        public PictureDTO(String url, String alt) {
            this.url = url;
            this.alt = alt;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getAlt() {
            return alt;
        }

        public void setAlt(String alt) {
            this.alt = alt;
        }
    }

    // ===== ALUMNI BANNER ENDPOINTS =====
    
    @GetMapping("/banner")
    public ResponseEntity<AlumniBannerDTO> getBanner() {
        try {
            logger.info("Getting alumni banner");
            AlumniBanner banner = alumniBannerRepository.findAll().stream().findFirst().orElse(null);
            if (banner == null) {
                logger.warn("No banner found");
                return ResponseEntity.notFound().build();
            }
            AlumniBannerDTO dto = new AlumniBannerDTO(
                banner.getId(),
                banner.getTitle(),
                banner.getContent(),
                normalizeImageUrl(banner.getImageUrl(), "alumni")
            );
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            logger.error("Error fetching alumni banner: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @PutMapping("/banner/{id}")
    public ResponseEntity<?> updateBanner(@PathVariable Long id, @RequestBody AlumniBannerDTO bannerDTO) {
        try {
            logger.info("Updating alumni banner with id: {}", id);
            
            return alumniBannerRepository.findById(id)
                .map(banner -> {
                    if (bannerDTO.getTitle() != null) {
                        banner.setTitle(bannerDTO.getTitle().trim());
                    }
                    if (bannerDTO.getContent() != null) {
                        banner.setContent(bannerDTO.getContent().trim());
                    }
                    if (bannerDTO.getImageUrl() != null) {
                        banner.setImageUrl(normalizeImageUrl(bannerDTO.getImageUrl().trim(), "alumni"));
                    }
                    banner.setUpdatedAt(LocalDateTime.now());
                    
                    AlumniBanner saved = alumniBannerRepository.save(banner);
                    logger.info("Banner updated successfully");
                    
                    AlumniBannerDTO dto = new AlumniBannerDTO(
                        saved.getId(),
                        saved.getTitle(),
                        saved.getContent(),
                        normalizeImageUrl(saved.getImageUrl(), "alumni")
                    );
                    return ResponseEntity.ok(dto);
                })
                .orElseGet(() -> {
                    logger.warn("Banner not found with id: {}", id);
                    return ResponseEntity.notFound().build();
                });
        } catch (Exception e) {
            logger.error("Error updating alumni banner with id {}: ", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating banner: " + e.getMessage());
        }
    }
}
