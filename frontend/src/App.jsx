import "./styles/App.css";
import { useEffect, useState } from "react";
import {
  createHabit,
  deleteHabit,
  getAllHabitsByUser,
} from "./services/habits";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getAllHabitsByUser().then((data) => {
      console.log(data);
      setHabits(data);
    });
  }, [refresh]);

  const handleDelete = (habit) => {
    deleteHabit(habit.id).then(() => {
      setRefresh(!refresh);
    });
  };
  const handleAdd = (event) => {
    event.preventDefault();
    console.log(name);
    createHabit(name).then(() => {
      setRefresh(!refresh);
      setName("");
    });
  };

  return (
    <>
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="app-header">habits</h1>
          <div>///</div>
        </div>
        <div className="grid-container">
          <form onSubmit={handleAdd}>
            <input
              required
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
            ></input>
            <button type="submit">Add Habit</button>
          </form>
          {habits.map((habit) => (
            <li key={habit.id}>
              {habit.name}
              <button onClick={() => handleDelete(habit)}>Delete</button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
