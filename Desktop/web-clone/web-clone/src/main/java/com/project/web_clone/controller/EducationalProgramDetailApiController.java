package com.project.web_clone.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
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
import org.springframework.web.server.ResponseStatusException;

import com.project.web_clone.entity.EducationalProgram;
import com.project.web_clone.entity.ProgramType;
import com.project.web_clone.service.EducationalProgramDetailService;

/**
 * REST API cho 3 block chương trình:
 *   NGAN_HAN    → /api/programs/ngan-han/...
 *   LIEN_KET    → /api/programs/lien-ket/...
 *   SAU_DAI_HOC → /api/programs/sau-dai-hoc/...
 */
@RestController
@RequestMapping("/api/programs")
public class EducationalProgramDetailApiController {

    private static final Map<String, ProgramType> SLUG_TO_TYPE = Map.of(
        "ngan-han",    ProgramType.NGAN_HAN,
        "lien-ket",    ProgramType.LIEN_KET,
        "sau-dai-hoc", ProgramType.SAU_DAI_HOC
    );

    private final EducationalProgramDetailService service;

    public EducationalProgramDetailApiController(EducationalProgramDetailService service) {
        this.service = service;
    }

    // ── Resolve ProgramType từ URL slug ──────────────────────────────────────

    private ProgramType resolveType(String typeSlug) {
        ProgramType type = SLUG_TO_TYPE.get(typeSlug);
        if (type == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                "Unknown program type: " + typeSlug);
        return type;
    }

    // ===================== LIST =====================

    /**
     * GET /api/programs/{typeSlug}
     * Lấy danh sách chương trình theo loại (active only).
     * typeSlug: ngan-han | lien-ket | sau-dai-hoc
     */
    @GetMapping("/{typeSlug}")
    public ResponseEntity<Map<String, Object>> list(@PathVariable String typeSlug) {
        ProgramType type = resolveType(typeSlug);
        List<EducationalProgram> items = service.getActiveByType(type);
        Map<String, Object> res = new HashMap<>();
        res.put("items", items);
        res.put("type", typeSlug);
        return ResponseEntity.ok(res);
    }

    // ===================== GET DETAIL =====================

    /**
     * GET /api/programs/{typeSlug}/{slug}
     * Lấy chi tiết 1 chương trình (sections + curriculum).
     */
    @GetMapping("/{typeSlug}/{slug}")
    public ResponseEntity<EducationalProgram> getDetail(
            @PathVariable String typeSlug,
            @PathVariable String slug) {
        resolveType(typeSlug); // validate typeSlug
        return service.getDetailBySlug(slug)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Program not found: " + slug));
    }

    // ===================== CREATE =====================

    /**
     * POST /api/programs/{typeSlug}
     * Tạo mới chương trình (Admin only).
     */
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{typeSlug}")
    public ResponseEntity<EducationalProgram> create(
            @PathVariable String typeSlug,
            @RequestBody EducationalProgram payload) {
        ProgramType type = resolveType(typeSlug);
        EducationalProgram created = service.create(type, payload);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // ===================== UPDATE =====================

    /**
     * PUT /api/programs/{typeSlug}/{id}
     * Cập nhật chương trình (Admin only).
     * Pattern: load existing → set fields → save (không ghi đè null).
     */
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{typeSlug}/{id}")
    public ResponseEntity<EducationalProgram> update(
            @PathVariable String typeSlug,
            @PathVariable Long id,
            @RequestBody EducationalProgram payload) {
        resolveType(typeSlug);
        return ResponseEntity.ok(service.update(id, payload));
    }

    // ===================== DELETE =====================

    /**
     * DELETE /api/programs/{typeSlug}/{id}
     * Xóa chương trình + cascade (Admin only).
     */
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{typeSlug}/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String typeSlug,
            @PathVariable Long id) {
        resolveType(typeSlug);
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
