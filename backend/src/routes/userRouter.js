import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => res.send("All users"));
usersRouter.post("/", (req, res) => res.send("Create user"));
usersRouter.put("/:id", (req, res) => res.send("Update user"));
usersRouter.delete("/:id", (req, res) => res.send("Delete user"));

export default usersRouter;
