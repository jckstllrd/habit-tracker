import { useState } from "react";
import "./styles/App.css";
import Habit from "./components/Habit";
export default function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(habit) {
    setHabits((prev) => [...prev, habit]);
  }
  return (
    <>
      <div className="app-container">
        {habits.map((habit) => {
          return <Habit key={habit.id} />;
        })}
      </div>
    </>
  );
}
