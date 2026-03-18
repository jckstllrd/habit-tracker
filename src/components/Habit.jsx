export default function Habit({ habit, logHabit }) {
  let streak = 0;
  let today = new Date().toISOString().split("T")[0];
  if (habit.log_completed[-1] === today) {
    streak += 1;
  }
  return (
    <div className="habit-cell">
      <div className="habit-content">
        <div className="habit-header">
          <h3 className="habit-name">{habit.name}</h3>
          <button className="habit-options">///</button>
        </div>
        <div className="habit-completion">
          <div className="habit-chart"></div>
          <button
            className="log-habit"
            onClick={() => {
              logHabit(habit.id);
            }}
          >
            Log Habit Today
          </button>
          <p className="habitStreak">{habit.streak}</p>
        </div>
      </div>
    </div>
  );
}
