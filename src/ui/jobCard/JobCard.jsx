import React from "react";
import Female from "../../assets/images/image_female.svg";
import Male from "../../assets/images/image_male.svg";
import styles from "./JobCard.module.css";
export default function JobCard({
  name,
  jobTitle,
  age,
  nationality,
  profileImage,
  isFavorited,
  gender,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className={styles.profileImage}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className="">
          <p className={styles.jobTitle}>{jobTitle}</p>
          <p className={styles.age}>{age} years old</p>
        </div>
        <p className={styles.nationality}>{nationality}</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.favoriteButton}>
          {isFavorited ? "♥" : "♡"}
        </button>
        <div className={styles.badge}>
          <img src={`${gender === "male" ? Male : Female}`} alt="Verified" />
        </div>
      </div>
    </div>
  );
}
