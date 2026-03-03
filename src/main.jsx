import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./routes/Dashboard.jsx";
import AddHabit from "./routes/AddHabit.jsx";
import HabitDetail from "./routes/HabitDetail.jsx";
import Settings from "./routes/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "add",
    element: <AddHabit />,
  },
  {
    path: "habit/:id",
    element: <HabitDetail />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
