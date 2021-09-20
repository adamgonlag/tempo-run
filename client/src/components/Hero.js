import React from "react";
import styles from "../styles/components/Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Music at your own pace.</h1>
      <p>
        Set a tempo and choose your favorite artists to enjoy the perfect pace
        making playlist.
      </p>
    </div>
  );
}
