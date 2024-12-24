import { Link } from "react-router";
import styles from "./heroSection.module.css";
export default function HeroSection() {
  return (
    <section className={`container ${styles.heroSection}`}>
      <Link to="/login">APPLY FOR A JOB</Link>
    </section>
  );
}
