import "../styles/AddHabit.css";
import { Link, useOutletContext } from "react-router";

const id = crypto.randomUUID();

export default function AddHabit() {
  const addHabit = useOutletContext()[1];

  return (
    <div>
      <h1>Add habit</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          let newHabit = {
            id: id,
            name: e.target.habitName.value,
            type: e.target.habitType.value,
            completions_log: [],
          };
          console.log(newHabit);
          addHabit(newHabit);
        }}
      >
        <label htmlFor="habitName">
          Habit Name: <input type="text" name="habitName" id="habitName" />
        </label>

        <label htmlFor="habitType">
          Good
          <input
            type="radio"
            name="habitType"
            id="habitType"
            value="badHabit"
          />
        </label>
        <label htmlFor="habitType">
          Bad
          <input
            type="radio"
            name="habitType"
            value="goodHabit"
            id="habitType"
          />
        </label>
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
}
