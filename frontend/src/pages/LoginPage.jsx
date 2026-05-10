import { useState } from "react";
import * as authService from "../services/auth.js";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let auth = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    authService
      .login(email, password)
      .then((res) => res.json())
      .then((res) => {
        auth.login(res.token);
        navigate("/");
      });
  };
  return (
    <>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}
