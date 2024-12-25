import Female from "../../assets/images/image_female.svg";
import Male from "../../assets/images/image_male.svg";
import styles from "./JobCard.module.css";
export default function JobCard({ resume }) {
  const { name, job, years, nationality, image, favorite, gender } = resume;
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={`${name}'s profile`}
          className={styles.profileImage}
        />
      </div>
      <div className={styles.info}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <div className="">
            <p className={styles.jobTitle}>{job?.name}</p>
            <p className={styles.age}>{years} years old</p>
          </div>
        </div>
        <p className={styles.nationality}>{nationality}</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.favoriteButton}>
          {favorite ? "♥" : "♡"}
        </button>
        <div className={styles.badge}>
          <img src={`${gender === "male" ? Male : Female}`} alt="Verified" />
        </div>
      </div>
    </div>
  );
}
