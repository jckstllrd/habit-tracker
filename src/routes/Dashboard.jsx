import { useOutletContext } from "react-router"
import Journal from "../components/Journal";
import "../styles/Dashboard.css";

const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[d.getMonth()];
export default function Dashboard() {
  const [habits, addHabit] = useOutletContext();

  return (
    <div className="dashboard-container">
      <h1>{month}</h1>
      <Journal d={d} habits={habits} addHabit={addHabit} />
    </div>
  );
}
