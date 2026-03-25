import { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import Habit from "./components/Habit";
import HabitForm from "./components/HabitForm";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/test");
        if (!response.ok) throw new Error("failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className="app-container">
        <div className="nav-bar">
          <h1 className="app-header">habits</h1>
          <div
            className="nav-menu"
            onClick={() => {
              // toggle sidebar to pop into view
              // show list of areas you can navigate on the page
              // should be a dialog box?
              //
            }}
          >
            ///
          </div>
        </div>
        <div className="grid-container">{data}</div>
      </div>
    </>
  );
}
