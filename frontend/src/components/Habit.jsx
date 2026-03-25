import { useState } from "react";
export default function Habit({ habit, logHabit, removeHabit, updateHabit }) {
  const [habitNameInput, setHabitNameInput] = useState(habit.name);
  const [habitState, setHabitState] = useState("view");
  if (habitState === "edit") {
    return (
      <div className="habit-cell">
        <div className="habit-content">
          <div className="habit-header">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateHabit(habit.id, habitNameInput);
                setHabitState("view");
              }}
            >
              <label htmlFor="habitName">
                <input
                  name="habitName"
                  value={habitNameInput}
                  onChange={(e) => setHabitNameInput(e.target.value)}
                  id="habitName"
                />
              </label>
            </form>
            <button
              className="habit-options"
              onClick={() => removeHabit(habit.id)}
            >
              X
            </button>
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
  } else if (habitState === "view") {
    return (
      <div className="habit-cell">
        <div className="habit-content">
          <div className="habit-header">
            <h3
              className="habit-name"
              onClick={() => {
                setHabitState("edit");
              }}
            >
              {habit.name}
            </h3>
            <button
              className="habit-options"
              onClick={() => removeHabit(habit.id)}
            >
              X
            </button>
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
}
