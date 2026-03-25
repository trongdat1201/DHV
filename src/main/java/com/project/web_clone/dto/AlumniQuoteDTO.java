package com.project.web_clone.dto;

public class AlumniQuoteDTO {
    private Long id;
    private String author;
    private String position;
    private String content;
    private String description;
    private String imageUrl;
    private Object pictureQuoute;
    
    public AlumniQuoteDTO() {
    }
    
    public AlumniQuoteDTO(String author, String position, String description, String imageUrl) {
        this.author = author;
        this.position = position;
        this.description = description;
        this.content = description;
        this.imageUrl = imageUrl;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getAuthor() {
        return author;
    }
    
    public void setAuthor(String author) {
        this.author = author;
    }
    
    public String getPosition() {
        return position;
    }
    
    public void setPosition(String position) {
        this.position = position;
    }
    
    public String getContent() {
        return content;
    }
    
    public void setContent(String content) {
        this.content = content;
        this.description = content;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
        this.content = description;
    }
    
    public String getImageUrl() {
        return imageUrl;
    }
    
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    
    public Object getPictureQuoute() {
        return pictureQuoute;
    }
    
    public void setPictureQuoute(Object pictureQuoute) {
        this.pictureQuoute = pictureQuoute;
    }
}
