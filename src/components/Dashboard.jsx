import { useOutletContext } from "react-router";
import Journal from "../components/Journal";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [habits, addHabit] = useOutletContext();

  return <div className="dashboard-container"></div>;
}
