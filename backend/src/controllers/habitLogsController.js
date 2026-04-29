import * as db from "../models/HabitLogs.js";

const getAllHabitLogs = async (req, res, next) => {
  try {
    const habitLogs = await db.getAllHabitLogs();
    res.status(200).json(habitLogs);
  } catch (error) {
    next(error);
  }
};
const getHabitCurrentStreak = async (req, res, next) => {
  const habitId = parseInt(req.params.habitId, 10);
  try {
    const habitStreakData = await db.getHabitCurrentStreak(habitId);
    let streak = 0;
    if (habitStreakData[0]) {
      streak = parseInt(habitStreakData[0].streak);
    }
    res.status(200).json({ currentStreak: streak });
  } catch (error) {
    next(error);
  }
};
const getAllHabitLogsByHabitId = async (req, res, next) => {
  const habitId = parseInt(req.params.habitId, 10);
  try {
    const habitLogsByHabitId = await db.getAllHabitLogsByHabitId(habitId);
    res.status(200).json(habitLogsByHabitId);
  } catch (error) {
    next(error);
  }
};

const getHabitLogById = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    const habitLog = await db.getHabitLogById(id);
    res.status(200).json(habitLog);
  } catch (error) {
    next(error);
  }
};

const createHabitLog = async (req, res, next) => {
  const { habit_id, logged_on } = req.body;
  try {
    const results = await db.createHabitLog(habit_id, logged_on);
    res.status(201).json({ id: results[0].id });
  } catch (error) {
    next(error);
  }
};

const updateHabitLog = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { logged_on, habit_id } = req.body;

  try {
    await db.updateHabitLog(id, logged_on, habit_id);
    res.status(200).json({ id: id });
  } catch (error) {
    next(error);
  }
};

const deleteHabitLog = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteHabitLog(id);
    res.status(200).json({ id: id });
  } catch (error) {
    next(error);
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
