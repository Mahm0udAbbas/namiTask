import { useRef } from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router";

export default function SideMenu({ state, onClose }) {
  const dialogRef = useRef(null);
  function handleCloseMenu() {
    onClose();
  }
  if (state) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }
  return (
    <dialog ref={dialogRef} onClose={handleCloseMenu} className=" d-lg-hidden">
      <header onClick={handleCloseMenu}>
        <Logo background="" borderColor="" borderThickness="" />
        <button aria-label="Close Menu">&#10005;</button>
      </header>
      <ul
        className=" d-flex flex-column align-items-start"
        onClick={handleCloseMenu}
      >
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            EXPLORE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </dialog>
  );
}
