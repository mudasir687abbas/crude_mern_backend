import mysql from "mysql2/promise";

let db;

export const getDB = async () => {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    return db;
  } catch (error) {
    console.error("DB connection error:", error.message);
    return null; // ❗ prevents server crash
  }
};

export default getDB;
