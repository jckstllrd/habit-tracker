export default function Habit({ habit, logHabit }) {
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
