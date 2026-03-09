package com.project.web_clone.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "site_settings", uniqueConstraints = @UniqueConstraint(columnNames = { "locale", "setting_key" }))
public class SiteSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String locale;

    @Column(name = "setting_key", nullable = false)
    private String settingKey;

    @Column(name = "value_type", nullable = false)
    private String valueType;

    @Lob
    @Column(name = "setting_value", columnDefinition = "LONGTEXT")
    private String settingValue;

    public Long getId() {
        return id;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getSettingKey() {
        return settingKey;
    }

    public void setSettingKey(String settingKey) {
        this.settingKey = settingKey;
    }

    public String getValueType() {
        return valueType;
    }

    public void setValueType(String valueType) {
        this.valueType = valueType;
    }

    public String getSettingValue() {
        return settingValue;
    }

    public void setSettingValue(String settingValue) {
        this.settingValue = settingValue;
    }
}
