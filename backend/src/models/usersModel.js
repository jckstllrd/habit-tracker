import { pool } from "../config/db.js";
const getAllUsers = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM users");
    res.status(200).json(results.rows);
  } catch (error) {
    throw error;
  }
};

const createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const results = await pool.query(
      "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *",
      [username, email],
    );
    res.status(201).send(`User added with ID: ${results.rows[0].id}`);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { username, email } = req.body;

  try {
    await pool.query(
      "UPDATE users SET username = $1, email = $2, id = $3 WHERE id = $3",
      [username, email, id],
    );
    res.status(200).send(`User modified with ID: ${id}`);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.status(200).send(`User deleted with ID:${id}`);
  } catch (error) {
    throw error;
  }
};

export { getAllUsers, createUser, updateUser, deleteUser };
