import styles from "./LoginBanner.module.css";
export default function LoginBanner({ title, discrption, background }) {
  return (
    <header
      className={styles.banner}
      style={{
        background,
      }}
    >
      <div className="container">
        <h1>{title}</h1>
        <p>{discrption}</p>
      </div>
    </header>
  );
}
