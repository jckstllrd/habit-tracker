import * as db from "../models/Users.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await db.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getUserById = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const user = await db.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const results = await db.createUser(username, email);
    res.status(201).json({ id: results.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { username, email } = req.body;

  try {
    await db.updateUser(id, username, email);
    res.status(200).json({ id: id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteUser(id);
    res.status(200).json({ id: id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
