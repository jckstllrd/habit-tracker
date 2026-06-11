import { useState } from "react";
import Habit from "../../components/Habit/Habit";
import useHabits from "../../hooks/useHabits";
import styles from "./DashboardPage.module.css";

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
    <div className={styles.dashboard}>
      <form
        className={styles.habitForm}
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
        <button className={styles.submitHabit} type="submit">
          Add Habit
        </button>
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
  );
}
