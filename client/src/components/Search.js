import { useState } from "react";
import SearchBar from "./SearchBar";
import styles from "../styles/Search.module.scss";
import Seed from "./Seed";

export default function Search({ spotifyApi }) {
  const [seedList, setSeedList] = useState([]);

  return (
    <div className={styles.search}>
      <SearchBar setSeedList={setSeedList} spotifyApi={spotifyApi} />

      <div className={styles.seeds}>
        {seedList.length > 0
          ? seedList.map((artist) => {
              return <Seed key={artist} artist={artist} />;
            })
          : null}
      </div>
    </div>
  );
}
