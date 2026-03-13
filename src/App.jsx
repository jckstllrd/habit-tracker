import { useState } from "react";
import { Link, Outlet } from "react-router";
import "./styles/App.css";
export default function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(habit) {
    setHabits((prev) => [...prev, habit]);
  }
  return (
    <>
      <div className="app-container">
        <Outlet context={[habits, addHabit]} />
      </div>
    </>
  );
}
