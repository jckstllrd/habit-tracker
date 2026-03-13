import { useOutletContext } from "react-router";
import Habit from "./Habit.jsx";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const [habits, addHabit] = useOutletContext();
  let month = "may";
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.month}>{month}</h1>
      <div className={styles.habitGrid}>
        {habits.map((habit, index) => {
          <Habit key="index" />;
        })}
      </div>
    </div>
  );
}
