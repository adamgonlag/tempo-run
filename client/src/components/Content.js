import Hero from "./Hero";
import Playlist from "./Playlist";
import styles from "../styles/Content.module.scss";
import Switch from "@mui/material/Switch";

export default function Content() {
  const label = { inputProps: { "aria-label": "Switch" } };

  return (
    <div className={styles.content}>
      {/* <Hero /> */}
      <div className={styles.summary}>
        <div className={styles.playlistName}>
          <label htmlFor="">Playlist Name</label>
          <p>120bpm running tracks</p>
        </div>
        <div className={styles.playlistTracks}>
          <div>
            <h1>
              15 <span>tracks</span>
            </h1>
          </div>
        </div>
        <div className={styles.playlistDuration}>
          <h1>
            34:21 <span>hh:mm</span>
          </h1>
        </div>
        <div className={styles.playlistOptions}>
          <div>
            <label>Public</label>
            <Switch {...label} defaultChecked color="secondary" />
          </div>
          <div>
            <label>Collaborative</label>
            <Switch {...label} defaultChecked color="secondary" />
          </div>
        </div>
        <div className={styles.playlistSave}>
          <button>Save to Spotify</button>
        </div>
      </div>
      <div className={styles.playlist}>
        <Playlist />
      </div>
    </div>
  );
}
