import { useRef, useState } from "react";
import "./styles/App.css";
import Habit from "./components/Habit";
import HabitForm from "./components/HabitForm";

export default function App() {
  const [habits, setHabits] = useState([
    {
      id: 0,
      name: "running",
      log_completed: [],
    },
  ]);
  let id = useRef(1);

  console.log(habits);

  function addHabit(habitName) {
    let habit = {
      id: id,
      name: habitName,
      log_completed: [],
    };
    id.current = id.current + 1;
    setHabits((prev) => [...prev, habit]);
  }
  function logHabit(habitId) {
    let date = new Date().toISOString().split("T")[0];
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId
          ? { ...habit, log_completed: [...habit.log_completed, date] }
          : habit,
      ),
    );
  }

  return (
    <>
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="app-header">habits</h1>
          <div className="nav-menu">///</div>
        </div>
        <div className="grid-container">
          {habits.map((habit) => {
            return <Habit key={habit.id} habit={habit} logHabit={logHabit} />;
          })}
          <HabitForm addHabit={addHabit} />
        </div>
      </div>
    </>
  );
}
