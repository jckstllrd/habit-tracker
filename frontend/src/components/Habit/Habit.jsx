import styles from "./Habit.module.css";
export default function Habit({
  habit,
  isHabitLogged,
  handleDeleteLog,
  handleLogHabit,
  handleDeleteHabit,
}) {
  return (
    <div className={styles.habitCard}>
      <div className={styles.habit}>
        <input
          className={styles.habitCheckbox}
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

        <div className={styles.habitContent}>
          <h3 className={styles.habitName}>{habit.name}</h3>
          <p className={styles.habitStreak}>streak: {habit.streak}</p>
        </div>
      </div>
      <div className={styles.habitDelete}>
        <button
          className={styles.habitOptions}
          onClick={() => handleDeleteHabit(habit)}
        >
          x
        </button>
      </div>
    </div>
  );
}
