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

const createUser = async (req, res) {
  const { username, email } = req.body

  try {
    const results = await pool.query("INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *", [username, email])

    res.status(201).send(`User added with ID: ${results.rows[0].id}`)

  } catch (err) {
    throw err;
  }
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
