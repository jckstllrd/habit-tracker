import { useState } from "react";
import "./styles/App.css";
export default function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(habit) {
    setHabits((prev) => [...prev, habit]);
  }
  return (
    <>
      <div className="app-container">
        <div className="habit-cell"></div>
        <div className="habit-cell"></div>
        <div className="habit-cell"></div>
        <div className="habit-cell"></div>
        <div className="habit-cell"></div>
        <div className="habit-cell"></div>
        <div className="habit-cell"></div>
      </div>
    </>
  );
}
