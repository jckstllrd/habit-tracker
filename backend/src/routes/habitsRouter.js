import { Router } from "express";
import * as habitsController from "../controllers/habitsController.js";
const habitsRouter = Router();

habitsRouter.get("/", habitsController.getAllHabits);
habitsRouter.get("/user/:userId", habitsController.getAllHabitsByUser);
habitsRouter.get("/:id", habitsController.getHabitById);
habitsRouter.post("/", habitsController.createHabit);
habitsRouter.put("/:id", habitsController.updateHabit);
habitsRouter.delete("/:id", habitsController.deleteHabit);

export default habitsRouter;
