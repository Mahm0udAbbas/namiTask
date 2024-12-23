import styles from "./Navbar.module.css";
import { BiBell, BiUser } from "react-icons/bi";
export default function RightSideMenu() {
  return (
    <>
      <ul className="d-flex flex-grow-1 align-items-center justify-content-end me-2 gap-2 gap-md-4">
        <li className="">
          <select className="">
            <option className={styles.dropdownItem} value="English">
              English
            </option>
            <option className={styles.dropdownItem} value="Arabic">
              العربيه
            </option>
            <option className={styles.dropdownItem} value="हिन्दी">
              हिन्दी
            </option>
            <option className={styles.dropdownItem} value="اردو">
              اردو
            </option>
          </select>
        </li>
        <li>
          <button className={styles.iconButton}>
            <BiBell />
          </button>
        </li>
        <li>
          <button className={styles.iconButton}>
            <BiUser />
          </button>
        </li>
      </ul>
    </>
  );
}
