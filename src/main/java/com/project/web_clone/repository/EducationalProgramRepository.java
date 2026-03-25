package com.project.web_clone.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.web_clone.entity.EducationalProgram;
import com.project.web_clone.entity.ProgramType;

public interface EducationalProgramRepository extends JpaRepository<EducationalProgram, Long> {

    List<EducationalProgram> findByTypeOrderByOrderIndexAsc(ProgramType type);

    List<EducationalProgram> findByTypeAndIsActiveTrueOrderByOrderIndexAsc(ProgramType type);

    Optional<EducationalProgram> findBySlug(String slug);

    /**
     * Fetch program + sections trong 1 query (chỉ 1 cấp JOIN FETCH).
     * Items của section được load riêng qua @BatchSize → không gây MultipleBagFetchException.
     * DISTINCT tránh duplicate dòng do cartesian product.
     */
    @Query("SELECT DISTINCT p FROM EducationalProgram p " +
           "LEFT JOIN FETCH p.sections " +
           "WHERE p.slug = :slug")
    Optional<EducationalProgram> findBySlugFetchSections(@Param("slug") String slug);

    /**
     * Fetch program + curriculumYears trong 1 query (chỉ 1 cấp JOIN FETCH).
     * Subjects được load riêng qua @BatchSize.
     */
    @Query("SELECT DISTINCT p FROM EducationalProgram p " +
           "LEFT JOIN FETCH p.curriculumYears " +
           "WHERE p.slug = :slug")
    Optional<EducationalProgram> findBySlugFetchCurriculumYears(@Param("slug") String slug);

    boolean existsBySlug(String slug);
}
