import Dashboard from "./components/Dashboard.jsx";
import App from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Dashboard /> }],
  },
];

export default routes;
