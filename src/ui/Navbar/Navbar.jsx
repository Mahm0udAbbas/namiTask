import { NavLink } from "react-router";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <ul className="d-none d-lg-flex justify-content-between align-items-center  align-items-between">
        <li className="nav-item">
          <NavLink
            to="home"
            className={({ isActive }) =>
              ` px-4 ${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="explore"
            className={({ isActive }) =>
              ` px-4 ${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            EXPLORE
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="about"
            className={({ isActive }) =>
              ` px-4 ${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            ABOUT US
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              ` px-4 ${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </>
  );
}
