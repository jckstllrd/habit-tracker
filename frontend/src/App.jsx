import "./styles/App.css";
import { Link, Outlet } from "react-router";

export default function App() {
  return (
    <>
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="app-header">habits</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
}
