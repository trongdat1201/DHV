package com.project.web_clone.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.project.web_clone.repo.UserAccountRepository;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

        @Bean
        public PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Bean
        public UserDetailsService userDetailsService(UserAccountRepository repo) {
                return username -> repo.findByUsername(username)
                                .filter(u -> u.isEnabled())
                                .map(u -> User.withUsername(u.getUsername())
                                                .password(u.getPasswordHash())
                                                .roles("ADMIN") // 1 role duy nhất
                                                .build())
                                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        }

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

                http
                                .authorizeHttpRequests(auth -> auth
                                                // static resources cho phép truy cập tự do - BẮT BUỘC ĐỂ LOAD CSS/JS
                                                .requestMatchers(
                                                                "/css/**", "/js/**", "/images/**", "/assets/**",
                                                                "/tb/**",
                                                                "/uploads/**",
                                                                "/_nuxt/**", "/_ipx/**", "/static/**", "/resources/**",
                                                                "/hung-vuong-prd.sgp1.digitaloceanspaces.com/**",
                                                                "/favicon.ico", "/*.css", "/*.js", "/*.webp", "/*.png",
                                                                "/*.jpg", "/*.svg")
                                                .permitAll()
                                                // Admin area: chỉ vào khi đã login admin
                                                .requestMatchers("/admin", "/admin/**", "/api/admin/**")
                                                .hasRole("ADMIN")
                                                // (Optional hardening) Block actuator unless admin
                                                .requestMatchers("/actuator", "/actuator/**").hasRole("ADMIN")
                                                // Các trang/public API còn lại đều public
                                                .anyRequest().permitAll())
                                .formLogin(form -> form
                                                .loginPage("/login")
                                                .permitAll()
                                                .defaultSuccessUrl("/", true))
                                .logout(logout -> logout
                                                .logoutUrl("/logout")
                                                .logoutSuccessUrl("/")
                                                .permitAll())
                                // tạm tắt csrf cho nhanh ở phase 1 (phase sau bật lại)
                                .csrf(csrf -> csrf.disable());

                return http.build();
        }
}
