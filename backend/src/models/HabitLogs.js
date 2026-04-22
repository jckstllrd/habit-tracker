import { pool } from "../config/db.js";

const getAllHabitLogs = async () => {
  try {
    const results = await pool.query("SELECT * FROM habit_logs");
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getHabitLogById = async (id) => {
  try {
    const results = await pool.query("SELECT * FROM habit_logs WHERE id = $1", [
      id,
    ]);
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getAllHabitLogsByHabitId = async (habitId) => {
  try {
    const results = await pool.query(
      "SELECT * FROM habit_logs WHERE habit_id = $1",
      [habitId],
    );
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const createHabitLog = async (habit_id, logged_on) => {
  console.log(habit_id, logged_on);
  try {
    const results = await pool.query(
      "INSERT INTO habit_logs (habit_id, logged_on) VALUES ($1, $2) RETURNING *",
      [habit_id, logged_on],
    );
    return results.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateHabitLog = async (id, logged_on, habit_id) => {
  try {
    await pool.query(
      "UPDATE habit_logs SET logged_on = $1, habit_id = $2 WHERE id = $3",
      [logged_on, habit_id, id],
    );
  } catch (error) {
    throw error;
  }
};

const deleteHabitLog = async (id) => {
  try {
    await pool.query("DELETE FROM habit_logs WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  }
};

export {
  getAllHabitLogs,
  getAllHabitLogsByHabitId,
  getHabitLogById,
  createHabitLog,
  updateHabitLog,
  deleteHabitLog,
};
