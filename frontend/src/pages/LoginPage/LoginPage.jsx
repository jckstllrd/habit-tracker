import { useState } from "react";
import * as authService from "../../services/auth.js";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth.js";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  let auth = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.login(email, password);

      if (!response.ok) {
        throw new Error(`Invalid email or password`);
      }
      const result = await response.json();

      auth.login(result.token);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <h1 className={styles.logo}>habit tracker</h1>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <label htmlFor="email" className={styles.formInput}>
            Email:{" "}
            <input
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="text"
              value={email}
            ></input>
          </label>
          <label htmlFor="password" className={styles.formInput}>
            Password:
            <input
              required
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
            ></input>
          </label>
          <button type="submit">Login</button>
        </form>
        <div className="errorMessage">{error ? error.message : ""}</div>
        <p>
          Don't have an account? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
}
