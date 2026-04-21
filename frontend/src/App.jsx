import "./styles/App.css";
import useApi from "./hooks/useApi";
import { useEffect, useState } from "react";
import { getAllHabits } from "./services/habits";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getAllHabits().then((data) => {
      console.log(data);
      setHabits(data);
    });
  }, [refresh]);
  return (
    <>
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="app-header">habits</h1>
          <div>///</div>
        </div>
        <div className="grid-container">
          {habits.map((habit) => (
            <li key={habit.id}>{habit.name}</li>
          ))}
        </div>
      </div>
    </>
  );
}
