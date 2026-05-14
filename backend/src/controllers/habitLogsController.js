import * as db from "../models/HabitLogs.js";
import * as LogSchema from "../schemas/log.schema.js";
import * as HabitSchema from "../schemas/habit.schema.js";

const getAllHabitLogs = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const validUserId = HabitSchema.userIdSchema.parse(userId);
    const habitLogs = await db.getAllHabitLogs(validUserId);
    res.status(200).json(habitLogs);
  } catch (error) {
    next(error);
  }
};
const getHabitCurrentStreak = async (req, res, next) => {
  const habitId = parseInt(req.params.habitId, 10);
  const validHabitId = HabitSchema.idSchema.parse(habitId);
  try {
    const habitStreakData = await db.getHabitCurrentStreak(validHabitId);
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
  const validHabitId = HabitSchema.idSchema.parse(habitId);
  try {
    const habitLogsByHabitId = await db.getAllHabitLogsByHabitId(validHabitId);
    res.status(200).json(habitLogsByHabitId);
  } catch (error) {
    next(error);
  }
};

const getHabitLogById = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  const validId = LogSchema.idSchema.parse(id);
  try {
    const habitLog = await db.getHabitLogById(validId);
    res.status(200).json(habitLog);
  } catch (error) {
    next(error);
  }
};

const createHabitLog = async (req, res, next) => {
  const { habit_id, logged_on } = req.body;
  const validLoggedOn = LogSchema.loggedSchema.parse(logged_on);
  const validHabitId = HabitSchema.idSchema.parse(habit_id);
  try {
    const results = await db.createHabitLog(validHabitId, validLoggedOn);
    res.status(201).json({ id: results[0].id });
  } catch (error) {
    next(error);
  }
};

const updateHabitLog = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { logged_on, habit_id } = req.body;

  const validLoggedOn = LogSchema.loggedSchema.parse(logged_on);
  const validHabitId = HabitSchema.idSchema.parse(habit_id);
  const validId = LogSchema.idSchema.parse(id);
  try {
    await db.updateHabitLog(validId, validLoggedOn, validHabitId);
    res.status(200).json({ id: id });
  } catch (error) {
    next(error);
  }
};

const deleteHabitLog = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const validId = LogSchema.idSchema.parse(id);
  try {
    await db.deleteHabitLog(validId);
    res.status(200).json({ id: validId });
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
