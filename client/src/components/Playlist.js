import React, { useState } from "react";
import PlaylistItem from "./PlaylistItem";
import styles from "../styles/Playlist.module.scss";

export default function Playlist({ playlist, setPlaylist }) {
  return (
    <section className={styles.playlist}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.id}>#</th>
            <th className={styles.track}>Track</th>
            <th className={styles.album}>Album</th>
            <th className={styles.tempo}>Tempo </th>
            <th className={styles.length}>
              <span className="material-icons">schedule</span>
            </th>
            <th className={styles.energy}>
              <span className="material-icons">bolt</span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((track, i) => {
            return (
              <PlaylistItem
                i={i + 1}
                key={track.id}
                playlist={playlist}
                setPlaylist={setPlaylist}
                track={track}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
