import "../styles/Dashboard.css";
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>dashboard view</h1>
      <ul>
        <li>
          <Link to="add">Add Habit</Link>
        </li>
        <li>
          <Link to="/habit/:id">View Habit</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}
