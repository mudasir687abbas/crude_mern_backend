import { getDB } from "../config/db.js";

const User = {
  getUsers: async () => {
    const db = await getDB();
    if (!db) return [];

    const [rows] = await db.query("SELECT * FROM user");
    return rows;
  },

  getUserById: async (id) => {
    const db = await getDB();
    if (!db) return null;

    const [rows] = await db.query(
      "SELECT * FROM user WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  },

  createUser: async (name, role) => {
    const db = await getDB();
    if (!db) return null;

    const [result] = await db.query(
      "INSERT INTO user (name, role) VALUES (?, ?)",
      [name, role]
    );
    return result.insertId;
  },

  updateUser: async (id, name, role) => {
    const db = await getDB();
    if (!db) return false;

    await db.query(
      "UPDATE user SET name = ?, role = ? WHERE id = ?",
      [name, role, id]
    );
    return true;
  },

  deleteUser: async (id) => {
    const db = await getDB();
    if (!db) return false;

    await db.query("DELETE FROM user WHERE id = ?", [id]);
    return true;
  }
};

export default User;
