import "../styles/App.css";
import { useEffect, useState } from "react";
import { createHabit, deleteHabit, getAllHabits } from "../services/habits";
import {
  createHabitLog,
  deleteHabitLog,
  getAllHabitLogs,
  getHabitCurrentStreak,
} from "../services/habitLogs";
import Habit from "../components/Habit/Habit";

export default function DashboardPage() {
  const [habits, setHabits] = useState([]);
  const [logs, setLogs] = useState([]);
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllHabits().then((results) => {
      Promise.all(
        results.map((result) =>
          getHabitCurrentStreak(result.id).then((data) => ({
            ...result,
            streak: data.currentStreak,
          })),
        ),
      ).then((results) => {
        setLoading(false);
        setHabits(results);
      });
    });

    getAllHabitLogs().then((data) => {
      setLogs(data);
    });
  }, [refresh]);

  const handleDeleteHabit = (habit) => {
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
  if (loading) {
    return (
      <>
        <div>Loading Habits...</div>
      </>
    );
  }
  return (
    <>
      <div className="app-container">
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
          {habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                isHabitLogged={isHabitLogged}
                handleDeleteLog={handleDeleteLog}
                handleLogHabit={handleLogHabit}
                handleDeleteHabit={handleDeleteHabit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
