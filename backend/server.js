import express from "express";
import cors from "cors";
import * as db from "./src/models/usersModel.js";
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

app.get("/users", db.getAllUsers);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
