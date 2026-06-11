import { useAuth } from "../../hooks/useAuth";
import styles from "./Header.module.css";

export default function Header() {
  const auth = useAuth();
  let email = auth.token ? auth.user.email : "";
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>habit tracker</h1>
      <Nav />
      <div className={styles.welcome}>hi, {email}</div>
    </header>
  );
}
