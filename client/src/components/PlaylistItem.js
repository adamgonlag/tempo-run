import { style } from "@mui/system";
import React from "react";
import styles from "../styles/PlaylistItem.module.scss";

export default function PlaylistItem({ track }) {
  return (
    <tr className={styles.item}>
      <td className={styles.id}>{track.id}</td>
      <td className={styles.artist}>
        <img className={styles.artistImg} src={track.Image} alt="" />
        <div>
          <h1>{track.Track}</h1>
          <p>{track.Artist}</p>
        </div>
      </td>
      <td>{track.Album}</td>
      <td className={styles.tempo}>{track.Tempo}</td>
      <td className={styles.length}>{track.Length}</td>
      <td className={styles.energy}>{track.Energy}</td>
      <td>
        <span className="material-icons">play_arrow</span>
      </td>
      <td>
        <span className="material-icons">close</span>
      </td>
    </tr>
  );
}
