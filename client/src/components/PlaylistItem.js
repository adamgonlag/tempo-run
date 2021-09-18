import { style } from "@mui/system";
import React from "react";
import styles from "../styles/PlaylistItem.module.scss";
import { convertMillisecondsToString } from "../helpers/playlistCalculations";

export default function PlaylistItem({ track, i }) {
  return (
    <tr className={styles.item}>
      <td className={styles.id}>{i}</td>
      <td className={styles.artist}>
        <img
          className={styles.artistImg}
          src={track.album.images[2].url}
          alt={track.album.name}
        />
        <div>
          <h1>{track.name}</h1>
          <p>{track.artists[0].name}</p>
        </div>
      </td>
      <td>{track.album.name}</td>
      <td className={styles.tempo}>{Math.floor(track.audio_features.tempo)}</td>
      <td className={styles.length}>
        {convertMillisecondsToString(track.audio_features.duration_ms)}
      </td>
      <td className={styles.energy}>
        {Math.floor(track.audio_features.energy * 100)}
        {"%"}
      </td>
      <td>
        <span className="material-icons">play_arrow</span>
      </td>
      <td>
        <span className="material-icons">close</span>
      </td>
    </tr>
  );
}
