import { useEffect, useState } from "react";
import { createHabit, deleteHabit, getAllHabits } from "../services/habits";
import {
  createHabitLog,
  deleteHabitLog,
  getAllHabitLogs,
  getHabitCurrentStreak,
} from "../services/habitLogs";

export default function useHabits() {
  const [habits, setHabits] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);

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

  const refreshItems = () => {
    setRefresh(!refresh);
  };

  const handleDeleteHabit = (habit) => {
    deleteHabit(habit.id).then(() => {
      setRefresh(!refresh);
    });
  };
  const handleCreateHabit = (name) => {
    createHabit(name).then(() => {
      setRefresh(!refresh);
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

  return {
    habits,
    loading,
    error,
    refreshItems,
    handleLogHabit,
    handleDeleteHabit,
    handleDeleteLog,
    handleCreateHabit,
    isHabitLogged,
  };
}
