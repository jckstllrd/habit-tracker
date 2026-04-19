import express from "express";
import cors from "cors";
import userRouter from "./src/routes/userRouter.js";
import habitsRouter from "./src/routes/habitsRouter.js";
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

app.use("/users", userRouter);
app.user("/habits", habitsRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
