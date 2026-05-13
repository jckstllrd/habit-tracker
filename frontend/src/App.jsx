import { useAuth } from "./hooks/useAuth";
import "./styles/App.css";
import { Link, Outlet } from "react-router";

export default function App() {
  const auth = useAuth();
  let email = auth.token ? auth.user.email : "";
  return (
    <>
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="app-header">habits</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {auth.user ? (
              <ul>
                <li>
                  <button onClick={() => auth.logout()}>Logout</button>
                </li>
                <li>Hi {email}</li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
}
