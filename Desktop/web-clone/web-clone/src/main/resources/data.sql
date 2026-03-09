-- Create categories table if not exists
CREATE TABLE IF NOT EXISTS categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    slug VARCHAR(255) NOT NULL UNIQUE,
    display_order INT DEFAULT 0
);

-- Insert default categories
INSERT INTO categories (name, slug, display_order) VALUES
('Thông báo', 'thong-bao', 1),
('Kết nối doanh nghiệp', 'ket-noi-doanh-nghiep', 2),
('Tin tức tuyển dụng', 'tin-tuc-tuyen-dung', 3),
('Tin tức hoạt động', 'tin-tuc-hoat-dong', 4),
('Tuyển sinh - Hướng nghiệp', 'tuyen-sinh-huong-nghiep', 5)
ON DUPLICATE KEY UPDATE display_order = VALUES(display_order);

-- Remove deprecated tables if they still exist
DROP TABLE IF EXISTS alumni_marquee;
DROP TABLE IF EXISTS alumni;
