import "./styles/App.css";
import { useEffect, useState } from "react";
import {
  createHabit,
  deleteHabit,
  getAllHabitsByUser,
} from "./services/habits";
import {
  createHabitLog,
  deleteHabitLog,
  getAllHabitLogs,
  getHabitCurrentStreak,
} from "./services/habitLogs";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [logs, setLogs] = useState([]);
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getAllHabitsByUser().then((results) => {
      Promise.all(
        results.map((result) =>
          getHabitCurrentStreak(result.id).then((curStreak) => ({
            ...result,
            streak: curStreak.streak_length,
          })),
        ),
      ).then((results) => setHabits(results));
    });

    getAllHabitLogs().then((data) => {
      setLogs(data);
    });
  }, [refresh]);

  const handleDelete = (habit) => {
    deleteHabit(habit.id).then(() => {
      setRefresh(!refresh);
    });
  };
  const handleAdd = (event) => {
    event.preventDefault();
    createHabit(name).then(() => {
      setRefresh(!refresh);
      setName("");
    });
  };
  const handleDeleteLog = (habit) => {
    const log = logs.find((log) => {
      const date = new Date().toLocaleDateString("en-CA");
      const logDate = new Date(log.logged_on).toLocaleDateString("en-CA");
      if (log.habit_id == habit.id && date == logDate) {
        return log;
      }
    });
    console.log("frontend, deleting log: ", log);
    deleteHabitLog(log.id).then(() => {
      setRefresh(!refresh);
    });
  };
  const handleLogHabit = (habit) => {
    const date = new Date().toLocaleDateString("en-CA");

    createHabitLog(habit.id, date).then(() => {
      setRefresh(!refresh);
    });
  };
  const isHabitLogged = (habit) => {
    const date = new Date().toLocaleDateString("en-CA").slice(0, 10);
    const value = logs.some((log) => {
      const logDate = new Date(log.logged_on).toLocaleDateString("en-CA");
      if (log.habit_id == habit.id && logDate == date) {
        return true;
      }

      return false;
    });
    return value;
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
              <label>
                <input
                  type="checkbox"
                  checked={isHabitLogged(habit)}
                  onChange={() => {
                    if (isHabitLogged(habit)) {
                      handleDeleteLog(habit);
                    } else {
                      handleLogHabit(habit);
                    }
                  }}
                ></input>
                {habit.name}
                Streak: {habit.streak}
              </label>
              <button onClick={() => handleDelete(habit)}>Delete</button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
