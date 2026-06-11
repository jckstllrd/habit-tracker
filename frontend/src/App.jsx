import Header from "./components/Header/Header";
import "./styles/App.css";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
