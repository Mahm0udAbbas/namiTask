import Logo from "../Logo/Logo";
import NavigationToggle from "./NavigationToggle";
import Navbar from "./Navbar";
import styles from "./Navbar.module.css";
import RightSideMenu from "./RightSideMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavigationToggle>
        <Logo />
        <Navbar />
        <RightSideMenu />
      </NavigationToggle>
    </header>
  );
}
