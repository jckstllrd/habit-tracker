import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("");
});
app.get("/habits", (req, res) => {
  res.send("");
});

app.get("/habits/:id", (req, res) => {
  res.send("");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "success" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
