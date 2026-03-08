import Dashboard from "./routes/Dashboard.jsx";
import AddHabit from "./routes/AddHabit.jsx";
import HabitDetail from "./routes/HabitDetail.jsx";
import Settings from "./routes/Settings.jsx";
import App from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add", element: <AddHabit /> },
      { path: "habit/:id", element: <HabitDetail /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

export default routes;
