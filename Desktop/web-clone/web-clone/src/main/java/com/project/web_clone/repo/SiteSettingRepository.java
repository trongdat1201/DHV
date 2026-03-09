package com.project.web_clone.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.web_clone.entity.SiteSetting;

public interface SiteSettingRepository extends JpaRepository<SiteSetting, Long> {
    List<SiteSetting> findByLocale(String locale);

    Optional<SiteSetting> findByLocaleAndSettingKey(String locale, String settingKey);
    
    void deleteBySettingKey(String settingKey);
}
