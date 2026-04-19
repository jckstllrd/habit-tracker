import { Router } from "express";

const habitsRouter = Router();

habitsRouter.get("/", (req, res) => res.send("all habits"));
habitsRouter.post("/", (req, res) => res.send("create habit"));
habitsRouter.put("/:id", (req, res) => res.send("update habit"));
habitsRouter.delete("/:id", (req, res) => res.send("delete habti"));

export default habitsRouter;
