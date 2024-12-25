import styles from "./AddButton.module.css";
export default function AddButton({ icon, name, onClick }) {
  return (
    <button className={styles.addButton} onClick={onClick}>
      {icon}
      <p>{name}</p>
    </button>
  );
}
