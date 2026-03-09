package com.project.web_clone.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

/**
 * Creates the `teacher_research_topics` table automatically if it doesn't
 * exist.
 * This avoids changing `spring.jpa.hibernate.ddl-auto` from `none`.
 */
@Component
public class TeacherResearchTopicTableInitializer implements ApplicationRunner {

    private final JdbcTemplate jdbcTemplate;

    public TeacherResearchTopicTableInitializer(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void run(ApplicationArguments args) {
        // MySQL 8+ syntax
        jdbcTemplate.execute("""
                CREATE TABLE IF NOT EXISTS teacher_research_topics (
                  id BIGINT NOT NULL AUTO_INCREMENT,
                  locale VARCHAR(16) NOT NULL,
                  title VARCHAR(255) NOT NULL,
                  sort_order INT NULL,
                  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                  PRIMARY KEY (id)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
                """);

        // MySQL doesn't support `CREATE INDEX IF NOT EXISTS`, so we check first.
        Integer indexCount = jdbcTemplate.queryForObject(
                """
                        SELECT COUNT(1)
                        FROM information_schema.STATISTICS
                        WHERE TABLE_SCHEMA = DATABASE()
                          AND TABLE_NAME = 'teacher_research_topics'
                          AND INDEX_NAME = 'idx_teacher_research_topics_locale_sort'
                        """,
                Integer.class);

        if (indexCount == null || indexCount == 0) {
            jdbcTemplate.execute(
                    "CREATE INDEX idx_teacher_research_topics_locale_sort ON teacher_research_topics (locale, sort_order, id)");
        }
    }
}
