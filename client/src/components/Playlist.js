import React, { useState } from "react";
import PlaylistItem from "./PlaylistItem";
import styles from "../styles/components/Playlist.module.scss";
import { motion } from "framer-motion";

export default function Playlist({ playlist, setPlaylist, spotifyApi }) {
  const playlistAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.15 } },
    exit: {},
  };
  return (
    <motion.div
      className={styles.playlist}
      key="playlist"
      variants={playlistAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
                spotifyApi={spotifyApi}
              />
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
