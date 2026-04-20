import * as db from "../models/Habits.js";

const getAllHabits = async (req, res) => {
  try {
    const habits = await db.getAllHabits();
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};

const getHabitById = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const habit = await db.getHabitById(id);
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};

const createHabit = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { name } = req.body;
  try {
    const results = await db.createHabit(name, userId);
    res.status(201).send(`Habit added with ID: ${results.rows[0].id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateHabit = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  try {
    await db.updateHabit(id, name);
    res.status(200).send(`Habit modified with ID: ${id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteHabit = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteHabit(id);
    res.status(200).send(`Habit deleted with ID:${id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export { getAllHabits, getHabitById, createHabit, updateHabit, deleteHabit };
