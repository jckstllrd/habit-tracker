import classes from "./Habit.module.css";
export default function Habit({
  habit,
  isHabitLogged,
  handleDeleteLog,
  handleLogHabit,
  handleDeleteHabit,
}) {
  return (
    <div className="habit-cell">
      <div className="habit-content">
        <div className="habit-header">
          <h3 className="habit-name">{habit.name}</h3>
          <button
            className="habit-options"
            onClick={() => handleDeleteHabit(habit)}
          >
            Delete
          </button>
        </div>
        <div className="habit-completion">
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
          </label>
          <p className="habitStreak">{habit.streak}</p>
        </div>
      </div>
    </div>
  );
}
