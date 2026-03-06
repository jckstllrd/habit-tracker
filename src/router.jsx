import { createBrowserRouter } from "react-router";
import Dashboard from "./routes/Dashboard.jsx";
import AddHabit from "./routes/AddHabit.jsx";
import HabitDetail from "./routes/HabitDetail.jsx";
import Settings from "./routes/Settings.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { index: "/add", element: <AddHabit /> },
      { index: "/habit/:id", element: <HabitDetail /> },
      { index: "/settings", element: <Settings /> },
    ],
  },
]);

export default router;
