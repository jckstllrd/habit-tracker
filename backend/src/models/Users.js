import { pool } from "../config/db.js";

const getAllUsers = async () => {
  try {
    const results = await pool.query("SELECT * FROM users");
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const results = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return results.rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const results = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const createUser = async (email, password_hash) => {
  try {
    const results = await pool.query(
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *",
      [email, password_hash],
    );
    return results.rows[0].id;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, username, email) => {
  try {
    await pool.query(
      "UPDATE users SET username = $1, email = $2 WHERE id = $3",
      [username, email, id],
    );
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  }
};

export {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
