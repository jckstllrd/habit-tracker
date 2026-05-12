import { jwtDecode } from "jwt-decode";
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem("session") ?? null,
  );
  const login = (token) => {
    localStorage.setItem("session", token);
    setToken(token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };
  const logout = () => {
    localStorage.removeItem("session");
    setToken(null);
    setUser(null);
  };
  return (
    <AuthContext value={{ user, login, logout, token }}>{children}</AuthContext>
  );
};
export default AuthProvider;
