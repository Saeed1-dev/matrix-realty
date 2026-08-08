-- ============================================
-- Matrix Realty — সম্পূর্ণ ডাটাবেস সেটআপ (এক রানেই সব তৈরি হবে)
-- HeidiSQL-এ কোনো ডাটাবেস সিলেক্ট না করেই এই পুরো ফাইলটা রান করুন
-- ============================================

CREATE DATABASE IF NOT EXISTS matrix_realty
  CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE matrix_realty;

CREATE TABLE IF NOT EXISTS inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  booking_id VARCHAR(64) UNIQUE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  email VARCHAR(255),
  project VARCHAR(255),
  unit_code VARCHAR(64),
  visit_type VARCHAR(64),
  date VARCHAR(64),
  note TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS landowner_proposals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  proposal_id VARCHAR(64) UNIQUE,
  owner_name VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  plot_location VARCHAR(255) NOT NULL,
  plot_size_katha VARCHAR(64),
  road_width_feet VARCHAR(64),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ai_chat_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_prompt TEXT NOT NULL,
  ai_reply TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- সেটআপ ঠিকমতো হলো কিনা যাচাই
SELECT 'matrix_realty ডাটাবেস ও ৩টা টেবিল তৈরি হয়ে গেছে ✅' AS status;
SHOW TABLES;
