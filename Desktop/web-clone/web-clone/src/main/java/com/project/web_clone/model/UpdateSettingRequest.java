package com.project.web_clone.model;

public class UpdateSettingRequest {
    private String key;
    private String value;
    private String valueType; // "TEXT", "HTML", "IMAGE", "URL"...

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getValueType() {
        return valueType;
    }

    public void setValueType(String valueType) {
        this.valueType = valueType;
    }
}
