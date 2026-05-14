import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import * as authService from "../services/auth.js";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  let auth = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.register(
        email,
        password,
        confirmPassword,
      );

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
    <>
      <div className="registerForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:{" "}
            <input
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="text"
              value={email}
            ></input>
          </label>
          <label htmlFor="password">
            Password:
            <input
              required
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
            ></input>
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password:
            <input
              required
              name="confirmPassword"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
              type="password"
            ></input>
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="errorMessage">{error ? error.message : ""}</div>
      <p>
        Already have an account? <Link to={"/login"}>Log In</Link>
      </p>
    </>
  );
}
