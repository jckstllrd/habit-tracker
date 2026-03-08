import { Link, Outlet } from "react-router";
export default function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="add">
              Add
            </Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="app-container"><Outlet /></div>
    </>
  );
}
