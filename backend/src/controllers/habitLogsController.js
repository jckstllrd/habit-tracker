import * as db from "../models/HabitLogs.js";

const getAllHabitLogs = async (req, res) => {
  try {
    const habitLogs = await db.getAllHabitLogs();
    res.status(200).json(habitLogs);
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};

const getAllHabitLogsByHabitId = async (req, res) => {
  const habitId = parseInt(req.params.id, 10);
  try {
    const habitLogsByHabitId = await db.getAllHabitLogsByHabitId(habitId);
    res.status(200).json(habitLogsByHabitId);
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};

const getHabitLogById = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const habitLog = await db.getHabitLogById(id);
    res.status(200).json(habitLog);
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};

const createHabitLog = async (req, res) => {
  const { habit_id, logged_on } = req.body;
  try {
    const results = await db.createHabitLog(habit_id, logged_on);
    res.status(201).send(`Habit log added with ID: ${results.rows[0].id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateHabitLog = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { logged_on, habit_id } = req.body;

  try {
    await db.updateHabitLog(id, logged_on, habit_id);
    res.status(200).send(`Habit log modified with ID: ${id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteHabitLog = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteHabitLog(id);
    res.status(200).send(`Habit log deleted with ID:${id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export {
  getAllHabitLogs,
  getAllHabitLogsByHabitId,
  getHabitLogById,
  createHabitLog,
  updateHabitLog,
  deleteHabitLog,
};
