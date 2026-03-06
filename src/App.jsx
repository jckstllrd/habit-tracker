import { Link } from "react-router";
export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </>
  );
}
