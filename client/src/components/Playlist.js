import React, { useState } from "react";
import PlaylistItem from "./PlaylistItem";
import styles from "../styles/Playlist.module.scss";

const tracks = [
  {
    id: 1,
    Track: "The art of losing",
    Artist: "Fink",
    Tempo: "122",
    Length: "3:23",
    Energy: "56",
    Play: "Play",
    Remove: "Remove",
    Album: "Revolver in the night of days",
    Image: "https://i.scdn.co/image/ab6761610000e5eb27e91c61886f774f990783d2",
  },
  {
    id: 2,
    Track: "Be a champ",
    Artist: "Adam",
    Tempo: "80",
    Length: "3:23",
    Energy: "56",
    Play: "Play",
    Remove: "Remove",

    Album: "Revolver in the night of days",
    Image: "https://i.scdn.co/image/ab6761610000e5eb27e91c61886f774f990783d2",
  },
  {
    id: 3,
    Track: "Be a champ",
    Artist: "Adam",
    Tempo: "80",
    Length: "3:23",
    Album: "Revolver in the night of days",
    Energy: "56",
    Play: "Play",
    Album: "Revolver in the night of days",

    Remove: "Remove",
    Image: "https://i.scdn.co/image/ab6761610000e5eb27e91c61886f774f990783d2",
  },
  {
    id: 4,
    Track: "Arses",
    Artist: "Chris",
    Tempo: "190",
    Length: "3:23",
    Energy: "56",
    Play: "Play",
    Album: "Revolver in the night of days",

    Remove: "Remove",
    Image: "https://i.scdn.co/image/ab6761610000e5eb27e91c61886f774f990783d2",
  },
  {
    id: 5,
    Track: "Arses",
    Artist: "Chris",
    Tempo: "190",
    Length: "3:23",
    Energy: "56",
    Play: "Play",
    Album: "Revolver in the night of days",

    Remove: "Remove",
    Image: "https://i.scdn.co/image/ab6761610000e5eb27e91c61886f774f990783d2",
  },
  {
    id: 3,
    Track: "Arses",
    Artist: "Chris",
    Tempo: "190",
    Length: "3:23",
    Energy: "56",
    Play: "Play",
    Album: "Revolver in the night of days",

    Remove: "Remove",
    Image: "https://i.scdn.co/image/ab6761610000e5eb27e91c61886f774f990783d2",
  },
];

export default function Playlist() {
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
          {tracks.map((track) => {
            return <PlaylistItem key={track.id} track={track} />;
          })}
        </tbody>
      </table>
    </section>
  );
}
