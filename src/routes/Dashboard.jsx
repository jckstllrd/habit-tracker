import "../styles/Dashboard.css";
import { Link, useOutletContext } from "react-router";

export default function Dashboard() {
  const [habits] = useOutletContext();
  
  return (
    <div>
      <h1>dashboard view</h1>
      <ul>
        {habits.map((habit) => {
          return <li key={habit.id}>{habit.name}</li>;
        })}
      </ul>
    </div>
  );
}
