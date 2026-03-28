import "./styles/App.css";
import useApi from "./hooks/useApi";

export default function App() {
  const { data, loading, error } = useApi("http://localhost:8080/api/test");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}, hitting errors up in here</div>;
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
        <div className="grid-container">{data.message}</div>
      </div>
    </>
  );
}
