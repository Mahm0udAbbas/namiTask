import styles from "./PageNotFound.module.css";
import { useMoveBack } from "../../hooks/UseMoveBack";

export default function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <main className={styles.pageNotFound}>
      <div>
        <h1>The page you are looking for could not be found 😢</h1>
        <button onClick={moveBack}>&larr; Go back</button>
      </div>
    </main>
  );
}
