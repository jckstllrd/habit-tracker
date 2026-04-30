import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";
import * as Habit from "../schemas/habit.schema.js";
import * as db from "../models/Habits.js";
import z from "zod";
import { ValidationError } from "../errors/ValidationError.js";

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
    const validUserId = Habit.idSchema.parse(userId);
    const habits = await db.getAllHabitsByUser(validUserId);
    res.status(200).json(habits);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new ValidationError("Habit Validation Failed"));
    }
    next(error);
  }
};

const getHabitById = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    const validId = Habit.idSchema.parse(id);
    const habit = await db.getHabitById(validId);
    if (!habit[0]) {
      throw new CustomNotFoundError("Habit Not Found");
    }
    res.status(200).json(habit);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new ValidationError("Habit ID Validation Failed"));
    }
    next(error);
  }
};

const createHabit = async (req, res, next) => {
  const { name, userId } = req.body;
  try {
    const validHabit = Habit.habitSchema.parse({ name: name, userId: userId });
    const results = await db.createHabit(validHabit.name, validHabit.userId);
    res.status(201).json({ id: results[0].id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new ValidationError("Habit Validation Failed"));
    }
    next(error);
  }
};

const updateHabit = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  try {
    const validName = Habit.nameSchema.parse(name);
    const validId = Habit.idSchema.parse(id);
    await db.updateHabit(validId, validName);
    res.status(200).json({ id: validId });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new ValidationError("Habit ID Validation Failed"));
    }
    next(error);
  }
};

const deleteHabit = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    const validId = Habit.idSchema.parse(id);
    await db.deleteHabit(validId);
    res.status(200).json({ id: validId });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new ValidationError("Validation Failed"));
    }
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
