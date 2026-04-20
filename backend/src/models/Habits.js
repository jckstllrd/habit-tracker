import { pool } from "../config/db.js";

const getAllHabits = async () => {
  try {
    const results = await pool.query("SELECT * FROM habits");
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getAllHabitsByUser = async (userId) => {
  try {
    const results = await pool.query(
      "SELECT * FROM habits WHERE user_id = $1",
      [userId],
    );
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getHabitById = async (id) => {
  try {
    const results = await pool.query("SELECT * FROM habits WHERE id = $1", [
      id,
    ]);
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const createHabit = async (name, userId) => {
  try {
    const results = await pool.query(
      "INSERT INTO habits (name, user_id) VALUES ($1, $2) RETURNING *",
      [name, userId],
    );
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const updateHabit = async (id, name) => {
  try {
    await pool.query("UPDATE habits SET name = $1 WHERE id = $2", [name, id]);
  } catch (error) {
    throw error;
  }
};

const deleteHabit = async (id) => {
  try {
    await pool.query("DELETE FROM habits WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  }
};

export {
  getAllHabits,
  getHabitById,
  createHabit,
  updateHabit,
  deleteHabit,
  getAllHabitsByUser,
};
