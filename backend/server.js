import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

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
  res.send({ message: "success" });
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
