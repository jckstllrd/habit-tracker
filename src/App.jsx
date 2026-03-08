import { useState } from "react";
import { Link, Outlet } from "react-router";
export default function App() {
  const [habits, setHabits] = useState([
    {
      id: crypto.randomUUID(),
      name: "no scrolling",
      completed_today: false,
    },
  ]);

  function addHabit(habit) {
    setHabits((prev) => [...prev, habit]);
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="add">Add Habit</Link>
          </li>

          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="app-container">
        <Outlet context={[habits, addHabit]} />
      </div>
    </>
  );
}
