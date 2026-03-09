package com.project.web_clone.repository;

import com.project.web_clone.entity.EducationalProgramBannerItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EducationalProgramBannerItemRepository extends JpaRepository<EducationalProgramBannerItem, Long> {
    List<EducationalProgramBannerItem> findByProgramTypeSlugOrderByOrderIndexAsc(String programTypeSlug);
}
