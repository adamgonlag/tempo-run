import React, { useState, useEffect } from "react";
import styles from "../styles/Sidebar.module.scss";
import SearchBar from "./SearchBar";

export default function Sidebar({ spotifyApi }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.options}>
        <h1>Options</h1>
        <ul>
          <li>
            <div>
              <h2>Tempo</h2>
              <p>123bpm</p>
              <div>Slider</div>
            </div>
          </li>
          <li>
            <div>
              <h2>Duration</h2>
              <p>00:32:12</p>
              <div>Slider</div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.search}>
        <h1>Search</h1>
        <SearchBar spotifyApi={spotifyApi} />
      </div>
    </div>
  );
}
