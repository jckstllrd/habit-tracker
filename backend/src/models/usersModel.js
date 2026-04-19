import { pool } from "../config/db.js";

const getAllUsers = async () => {
  try {
    const results = await pool.query("SELECT * FROM users");
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const createUser = async (username, email) => {
  try {
    const results = await pool.query(
      "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
      [username, email],
    );
    return results;
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

export { getAllUsers, createUser, updateUser, deleteUser };
