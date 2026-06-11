import styles from "./DashboardPage.module.css";
import { useEffect, useState } from "react";
import { createHabit, deleteHabit, getAllHabits } from "../../services/habits";
import {
  createHabitLog,
  deleteHabitLog,
  getAllHabitLogs,
  getHabitCurrentStreak,
} from "../../services/habitLogs";
import Habit from "../../components/Habit/Habit";
import useHabits from "../../hooks/useHabits";

export default function DashboardPage() {
  const {
    habits,
    loading,
    error,
    refreshItems,
    handleLogHabit,
    handleDeleteHabit,
    handleDeleteLog,
    handleCreateHabit,
    isHabitLogged,
  } = useHabits();
  const [name, setName] = useState("");
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
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleCreateHabit(name);
              setName("");
            }}
          >
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
