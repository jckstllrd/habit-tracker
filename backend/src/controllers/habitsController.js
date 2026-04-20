import * as db from "../models/Habits.js";

const getAllHabits = async (req, res) => {
  try {
    const habits = await db.getAllHabits();
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllHabitsByUser = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  try {
    const habits = await db.getAllHabitsByUser(userId);
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHabitById = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const habit = await db.getHabitById(id);
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createHabit = async (req, res) => {
  const { name, userId } = req.body;
  try {
    const results = await db.createHabit(name, userId);
    res.status(201).json({ id: results[0].id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateHabit = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  try {
    await db.updateHabit(id, name);
    res.status(200).json({ id: id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteHabit = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteHabit(id);
    res.status(200).json({ id: id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
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
