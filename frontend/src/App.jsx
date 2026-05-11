import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import "./styles/App.css";
import { Link, Outlet, useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    if (!auth.token) {
      navigate("/login");
    }
  }, [auth.token, navigate]);
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
            <li>
              <button onClick={() => auth.logout()}>Logout</button>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
}
