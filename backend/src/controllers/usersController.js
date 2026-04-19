import * as db from "../models/usersModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await db.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};
const getUserById = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const user = await db.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};

const createUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const results = await db.createUser(username, email);
    res.status(201).send(`User added with ID: ${results.rows[0].id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { username, email } = req.body;

  try {
    await db.updateUser(id, username, email);
    res.status(200).send(`User modified with ID: ${id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    await db.deleteUser(id);
    res.status(200).send(`User deleted with ID:${id}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
