import { useState } from "react";
import SearchBar from "./SearchBar";
import styles from "../styles/components/Search.module.scss";
import Seed from "./Seed";

export default function Search({ spotifyApi, seedList, setSeedList }) {
  return (
    <div className={styles.search}>
      <SearchBar setSeedList={setSeedList} spotifyApi={spotifyApi} />

      <div className={styles.seeds}>
        {seedList.length > 0
          ? seedList.map((artist) => {
              return (
                <Seed
                  key={artist.id}
                  artist={artist}
                  seedList={seedList}
                  setSeedList={setSeedList}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
