import * as db from "../models/Users.js";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await db.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    const user = await db.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { email, password_hash } = req.body;
  try {
    const results = await db.createUser(email, password_hash);
    res.status(201).json({ id: results[0].uuid });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { username, email } = req.body;

  try {
    await db.updateUser(id, username, email);
    res.status(200).json({ id: id });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteUser(id);
    res.status(200).json({ id: id });
  } catch (error) {
    next(error);
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
