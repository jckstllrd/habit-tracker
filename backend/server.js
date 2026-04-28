import express from "express";
import cors from "cors";
import usersRouter from "./src/routes/usersRouter.js";
import habitsRouter from "./src/routes/habitsRouter.js";
import habitLogsRouter from "./src/routes/habitLogsRouter.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/", (req, res) => {
  console.log("habits dashboard will appear here - wip");
  res.json({ message: "home success" });
});

app.use("/users", usersRouter);
app.use("/habits", habitsRouter);
app.use("/logs", habitLogsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
