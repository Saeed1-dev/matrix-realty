import mysql from "mysql2/promise";

let pool = null;
let dbInstance = null;

export async function getDatabase() {
  if (!dbInstance) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "matrix_realty",
      waitForConnections: true,
      connectionLimit: 10,
    });

    // Initialize SQL Tables
    await pool.query(`
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
    `);

    await pool.query(`
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
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS ai_chat_logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_prompt TEXT NOT NULL,
        ai_reply TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ MySQL Database connected & tables ready: " + (process.env.DB_NAME || "matrix_realty"));

    dbInstance = {
      // INSERT / UPDATE / DELETE
      async run(sql, params = []) {
        const [result] = await pool.execute(sql, params);
        return result;
      },
      // Single row
      async get(sql, params = []) {
        const [rows] = await pool.execute(sql, params);
        return rows[0];
      },
      // Multiple rows
      async all(sql, params = []) {
        const [rows] = await pool.execute(sql, params);
        return rows;
      },
    };
  }
  return dbInstance;
}
