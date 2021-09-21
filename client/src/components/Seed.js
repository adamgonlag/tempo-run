import React from "react";
import styles from "../styles/components/Seed.module.scss";
import { motion, AnimatePresence } from "framer-motion";

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

  const seedLoader = {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { ease: "easeInOut", duration: 0.02 } },
    exit: { scale: 0, x: "200px" },
  };

  return (
    <motion.div
      className={styles.seed}
      variants={seedLoader}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
    </motion.div>
  );
}
