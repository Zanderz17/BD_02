import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Python</Link>
        </li>
        <li>
          <Link to="/psql">PostgreSQL</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
