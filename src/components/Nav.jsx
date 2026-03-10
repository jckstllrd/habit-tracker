import { Link } from "react-router";
import "../styles/Nav.css";

let links = [
  { route: "/", name: "Dashboard" },
  { route: "add", name: "Add Habit" },
  { route: "settings", name: "Settings" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="navLinks">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link className="navLink" to={link.route}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
