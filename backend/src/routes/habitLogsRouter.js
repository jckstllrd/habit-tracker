import { Router } from "express";
import * as habitLogsController from "../controllers/habitLogsController.js";

const habitLogsRouter = Router();

habitLogsRouter.get("/", habitLogsController.getAllHabitLogs);
habitLogsRouter.get(
  "/habit/:habitId",
  habitLogsController.getAllHabitLogsByHabitId,
);
habitLogsRouter.post("/:id", habitLogsController.createHabitLog);
habitLogsRouter.get("/:id", habitLogsController.getHabitLogById);
habitLogsRouter.put("/:id", habitLogsController.updateHabitLog);
habitLogsRouter.delete("/:id", habitLogsController.deleteHabitLog);

export default habitLogsRouter;
