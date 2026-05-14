import { pool } from "../config/db.js";

const getAllHabitLogs = async (userId) => {
  try {
    const results = await pool.query(
      "SELECT habit_logs.id AS id, habit_logs.logged_on, habit_logs.habit_id FROM habit_logs LEFT JOIN habits ON habit_logs.habit_id=habits.id WHERE user_id=$1",
      [userId],
    );
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getHabitCurrentStreak = async (habitId) => {
  try {
    const results = await pool.query(
      "with numbered as (select id, habit_id, logged_on, logged_on - cast(row_number() over(order by logged_on) as int) as dateMinusRow from habit_logs where habit_id = $1) select (case when CURRENT_DATE - Max(logged_on) <= 1 then count(id) else 0 end) AS streak FROM numbered GROUP BY dateMinusRow having MAX(logged_on) >= CURRENT_DATE - 1",
      [habitId],
    );
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
  try {
    const results = await pool.query(
      "INSERT INTO habit_logs (habit_id, logged_on) VALUES ($1, $2) RETURNING *",
      [habit_id, logged_on],
    );
    return results.rows;
  } catch (error) {
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
  getHabitCurrentStreak,
};
