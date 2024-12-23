import { useEffect, useState } from "react";
import { useResponsiveState } from "../../hooks/useResponsiveState";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "./Navbar.module.css";
import SideMenu from "./SideMenu";

export default function NavigationToggle({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useResponsiveState("(min-width: 1024px)");
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    // Example: Close the menu automatically on mobile
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <nav className=" d-flex container justify-content-between ">
        {children}
        {!isOpen && (
          <button
            onClick={toggleMenu}
            className={`d-lg-none  ${styles.navbarToggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HiBars3BottomRight />
          </button>
        )}
      </nav>
      <SideMenu state={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
