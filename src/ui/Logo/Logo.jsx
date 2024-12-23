import { Link } from "react-router";
import logo from "../../assets/images/logo.svg";
import styles from "./logo.module.css";
export default function Logo({ className }) {
  return (
    <Link className={`${styles.logo} ${className} flex-grow-1`} to="home">
      <img src={logo} />
    </Link>
  );
}
