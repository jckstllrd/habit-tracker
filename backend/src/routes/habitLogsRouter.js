import { Router } from "express";

const habitLogsRouter = Router();

habitLogsRouter.get("/", (req, res) => res.send("get all logs"));
habitLogsRouter.post("/habit/:habitId", (req, res) =>
  res.send("add new log for habit"),
);
habitLogsRouter.get("/habit/:habitId", (req, res) =>
  res.send("get all logs from a habit"),
);
habitLogsRouter.get("/:id", (req, res) => res.send("get a log by id"));
habitLogsRouter.put("/:id", (req, res) => res.send("update habit log"));
habitLogsRouter.delete("/:id", (req, res) => res.send("delete habit log"));

export default habitLogsRouter;
