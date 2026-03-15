import { useState } from "react";
import "./styles/App.css";
import Habit from "./components/Habit";
import HabitForm from "./components/HabitForm";

export default function App() {
  const [habits, setHabits] = useState([
    {
      id: 0,
      name: "running",
      log_completed: {},
    },
    {
      id: 0,
      name: "running",
      log_completed: {},
    },
    {
      id: 0,
      name: "running",
      log_completed: {},
    },
    {
      id: 0,
      name: "running",
      log_completed: {},
    },
    {
      id: 0,
      name: "running",
      log_completed: {},
    },
  ]);
  function addHabit(habit) {
    setHabits((prev) => [...prev, habit]);
  }

  return (
    <>
      <div className="app-container">
        <div className="nav-bar">
          <div className="nav-menu">///</div>
        </div>
        <div className="grid-container">
          {habits.map((habit) => {
            return <Habit key={habit.id} habit={habit} />;
          })}
          <HabitForm addHabit={addHabit} />
        </div>
      </div>
    </>
  );
}
