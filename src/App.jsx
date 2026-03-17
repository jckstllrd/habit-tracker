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

  function addHabit(habitName) {
    let habit = {
      id: id,
      name: habitName,
      log_completed: [],
    };
    id.current = id.current + 1;
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
