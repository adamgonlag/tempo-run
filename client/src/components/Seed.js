import React from "react";
import styles from "../styles/Seed.module.scss";

export default function Seed({ artist, seedList, setSeedList }) {
  const removeSeed = () => {
    const newSeedList = seedList.filter((seed) => seed !== artist);
    setSeedList(newSeedList);
  };

  let img_url;
  if (artist.images === undefined) {
    img_url = "#";
  } else {
    img_url = artist.images[0].url;
  }

  return (
    <div className={styles.seed}>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url("${img_url}")`,
          }}
        ></div>
      </div>
      <p>{artist.name}</p>
      <div className={styles.remove}>
        <span onClick={removeSeed} className="material-icons">
          close
        </span>{" "}
      </div>
    </div>
  );
}
