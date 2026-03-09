package com.project.web_clone.service;

import com.project.web_clone.entity.SiteSetting;
import com.project.web_clone.repo.SiteSettingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class SettingsService {

    private final SiteSettingRepository repo;

    public SettingsService(SiteSettingRepository repo) {
        this.repo = repo;
    }

    public Map<String, String> load(String locale) {
        Map<String, String> map = new LinkedHashMap<>();
        for (SiteSetting s : repo.findByLocale(locale)) {
            map.put(s.getSettingKey(), s.getSettingValue());
        }
        return map;
    }

    @Transactional
    public void updateSetting(String locale, String key, String valueType, String value) {
        var settingOpt = repo.findByLocaleAndSettingKey(locale, key);
        if (settingOpt.isPresent()) {
            var s = settingOpt.get();
            if (valueType != null && !valueType.isBlank())
                s.setValueType(valueType);
            s.setSettingValue(value);
            repo.save(s);
        } else {
            // nếu chưa có thì tạo mới
            var s = new SiteSetting();
            s.setLocale(locale);
            s.setSettingKey(key);
            s.setValueType(valueType == null || valueType.isBlank() ? "TEXT" : valueType);
            s.setSettingValue(value);
            repo.save(s);
        }
    }

    @Transactional
    public void deleteSetting(String key) {
        repo.deleteBySettingKey(key);
    }
}
