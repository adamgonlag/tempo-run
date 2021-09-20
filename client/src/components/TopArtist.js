import React from "react";
import styles from "../styles/components/TopArtist.module.scss";

export default function TopArtist() {
  const imageUrl =
    "https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433";

  return (
    <div
      className={styles.topArtist}
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
    >
      <b>The Beatles</b>
    </div>
  );
}
