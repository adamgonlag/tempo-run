import { useState } from "react";
import styles from "../styles/Sidebar.module.scss";
import Search from "./Search";
import Options from "./Options";

export default function Sidebar({
  spotifyApi,
  seedList,
  setSeedList,
  options,
}) {
  return (
    <div className={styles.sidebar}>
      <Options options={options} />
      <Search
        seedList={seedList}
        setSeedList={setSeedList}
        spotifyApi={spotifyApi}
      />
    </div>
  );
}
