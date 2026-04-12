const pool = require("./pool");

async function getAllHabits() {
  const { rows } = await pool.query("SELECT * FROM habits");
  return rows;
}

async function insertHabit(habit) {
  await pool.query("INSERT INTO habits (habit) VALUES ($1)", [habit]);
}

module.exports = {
  getAllHabits,
  insertHabit,
};
