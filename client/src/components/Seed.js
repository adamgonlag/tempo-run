import React from "react";
import styles from "../styles/Seed.module.scss";

export default function Seed({ artist }) {
  return (
    <div className={styles.seed}>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url("${artist.images[0].url}")`,
          }}
        ></div>
      </div>
      <b>{artist.name}</b>
      <div className={styles.remove}>
        <span className="material-icons">close</span>{" "}
      </div>
    </div>
  );
}
