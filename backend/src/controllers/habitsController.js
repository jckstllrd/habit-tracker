import * as db from "../models/Habits.js";

const getAllHabits = async (req, res, next) => {
  try {
    const habits = await db.getAllHabits();
    res.status(200).json(habits);
  } catch (error) {
    next(error);
  }
};

const getAllHabitsByUser = async (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);
  try {
    const habits = await db.getAllHabitsByUser(userId);
    res.status(200).json(habits);
  } catch (error) {
    next(error);
  }
};

const getHabitById = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    const habit = await db.getHabitById(id);
    if (!habit[0]) {
      res.status(404).json("Habit not found");
      return;
    }
    res.status(200).json(habit);
  } catch (error) {
    next(error);
  }
};

const createHabit = async (req, res, next) => {
  const { name, userId } = req.body;
  try {
    const results = await db.createHabit(name, userId);
    res.status(201).json({ id: results[0].id });
  } catch (error) {
    next(error);
  }
};

const updateHabit = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  try {
    await db.updateHabit(id, name);
    res.status(200).json({ id: id });
  } catch (error) {
    next(error);
  }
};

const deleteHabit = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteHabit(id);
    res.status(200).json({ id: id });
  } catch (error) {
    next(error);
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
