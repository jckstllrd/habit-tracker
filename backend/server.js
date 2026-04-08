import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("habits dashboard will appear here - wip");
  res.json({ message: "home success" });
});
app.get("/new", (req, res) => {
  console.log("display a form for adding in new habits");
});

app.post("/new", (req, res) => {
  console.log("habits to be saved here: ", req.body.habitName);
});

app.get("/habits/:id", (req, res) => {
  res.send("");
});

app.get("/api/test", (req, res) => {
  console.log("here");
  res.json({ message: "success" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
