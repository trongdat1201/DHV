package com.project.web_clone.config;

import com.project.web_clone.entity.UserAccount;
import com.project.web_clone.repo.UserAccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DefaultAdminUserInitializer implements ApplicationRunner {

    private static final Logger log = LoggerFactory.getLogger(DefaultAdminUserInitializer.class);

    private final UserAccountRepository userAccountRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${ADMIN_USERNAME:}")
    private String adminUsername;

    @Value("${ADMIN_PASSWORD:}")
    private String adminPassword;

    public DefaultAdminUserInitializer(UserAccountRepository userAccountRepository,
                                        PasswordEncoder passwordEncoder) {
        this.userAccountRepository = userAccountRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(ApplicationArguments args) {
        if (adminUsername == null || adminUsername.isBlank() || adminPassword == null || adminPassword.isBlank()) {
            log.info("ADMIN_USERNAME/ADMIN_PASSWORD not set; skipping default admin creation.");
            return;
        }

        userAccountRepository.findByUsername(adminUsername.trim())
                .ifPresentOrElse(existing -> log.info("Default admin '{}' already exists; skipping.", adminUsername.trim()),
                        () -> {
                            UserAccount user = new UserAccount();
                            user.setUsername(adminUsername.trim());
                            user.setPasswordHash(passwordEncoder.encode(adminPassword));
                            userAccountRepository.save(user);
                            log.info("Created default admin '{}'.", adminUsername.trim());
                        });
    }
}

