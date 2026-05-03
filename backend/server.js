import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import usersRouter from "./src/routes/usersRouter.js";
import habitsRouter from "./src/routes/habitsRouter.js";
import habitLogsRouter from "./src/routes/habitLogsRouter.js";
import authRouter from "./src/routes/authRouter.js";
const app = express();

app.use(cors());
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use("/users", usersRouter);
app.use("/habits", habitsRouter);
app.use("/logs", habitLogsRouter);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
