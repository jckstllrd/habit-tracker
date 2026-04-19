import { Router } from "express";
import * as usersController from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/", usersController.getAllUsers);
usersRouter.post("/", usersController.createUser);
usersRouter.put("/:id", usersController.updateUser);
usersRouter.delete("/:id", usersController.deleteUser);

export default usersRouter;
