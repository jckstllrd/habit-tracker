import Header from "./components/Header/Header";
import { useAuth } from "./hooks/useAuth";
import "./styles/App.css";
import { Link, Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
