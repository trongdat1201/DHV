package com.project.web_clone.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/assets/_nuxt/**")
                .addResourceLocations("classpath:/static/_nuxt/");

        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("classpath:/static/uploads/")
                .addResourceLocations("file:./web-clone/src/main/resources/static/uploads/")
                .addResourceLocations("file:./src/main/resources/static/uploads/");
    }
}
