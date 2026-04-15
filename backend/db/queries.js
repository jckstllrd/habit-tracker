const pool = require("./pool");

const getAllUsers = async (req, res){
  try {
    const results = await pool.query("SELECT * FROM users")
    response.status(200).json(results.rows)
  } catch (err) {
    throw err;
  }
  return rows;
}


async function getAllHabits() {
  const { rows } = await pool.query("SELECT * FROM habits");
  return rows;
}

async function insertHabit(habitName) {
  await pool.query("INSERT INTO habits (habit) VALUES ($1)", [habitName]);
}

module.exports = {
  getAllUsers,
  getAllHabits,
  insertHabit,
};
