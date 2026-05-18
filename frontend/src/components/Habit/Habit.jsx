import classes from "./Habit.module.css";
export default function Habit({
  habit,
  isHabitLogged,
  handleDeleteLog,
  handleLogHabit,
  handleDeleteHabit,
}) {
  return (
    <div className={classes.habitCell}>
      <div className={classes.habitContent}>
        <div className={classes.habitHeader}>
          <h3 className={classes.habitName}>{habit.name}</h3>
          <button
            className={classes.habitOptions}
            onClick={() => handleDeleteHabit(habit)}
          >
            Delete
          </button>
        </div>
        <div className={classes.habitCompletion}>
          <label>Completed
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
          </label>
          <p className={classes.habitStreak}>{habit.streak}</p>
        </div>
      </div>
    </div>
  );
}
