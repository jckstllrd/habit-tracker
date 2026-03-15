import { useEffect, useState, useRef } from "react";
export default function HabitForm({ addHabit }) {
  const [active, setActive] = useState(false);
  const formFocus = useRef(null);

  useEffect(() => {
    if (active == true) {
      formFocus.current.focus();
    }
  }, [active]);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  if (active == true) {
    return (
      <div className="habit-cell">
        <div className="habit-content">
          <div className="habit-name">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addHabit(e.target.habitName.value);
                toggleActive();
              }}
            >
              <label htmlFor="habitName">
                <input ref={formFocus} name="habitName" id="habitName" />
              </label>
            </form>
          </div>
          <div className="habit-completion">
            <div className="habit-chart"></div>
            <p className="habitStreak">Streak: 0</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="form-container"
        onClick={() => {
          toggleActive();
        }}
      >
        <p>+</p>
      </div>
    );
  }
}
