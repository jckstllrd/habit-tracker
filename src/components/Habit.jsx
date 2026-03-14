export default function Habit({ habit }) {
  return (
    <div className="habit-cell">
      <div className="habit-content">
        <h3 className="habit-name">{habit.name}</h3>
        <div className="habit-completion">
          <div className="habit-chart"></div>
          <p className="habitStreak">Streak: 0</p>
        </div>
      </div>
    </div>
  );
}
