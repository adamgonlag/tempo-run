import { useState } from "react";
import Hero from "./Hero";
import Playlist from "./Playlist";
import styles from "../styles/Content.module.scss";
import Switch from "@mui/material/Switch";
import { playlistDuration } from "../helpers/playlistCalculations";

export default function Content({
  playlist,
  setPlaylist,
  spotifyApi,
  user,
  playlistName,
  setPlaylistName,
}) {
  const label = { inputProps: { "aria-label": "Switch" } };

  const [publicPlaylist, setPublicPlaylist] = useState(true);
  const [collaborativePlaylist, setcollaborativePlaylist] = useState(false);

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handlePubChange = (e) => {
    setPublicPlaylist(e.target.checked);
    if (collaborativePlaylist) {
      setcollaborativePlaylist(false);
    }
  };

  const handleCollabCHange = (e) => {
    setcollaborativePlaylist(e.target.checked);
    if (publicPlaylist) {
      setPublicPlaylist(false);
    }
  };

  const createPlaylist = () => {
    const trackUris = playlist.map((track) => track.uri);
    spotifyApi
      .createPlaylist(user.id, {
        name: playlistName,
        description: "Create by Tempo Playlist",
        public: publicPlaylist,
        collaborative: collaborativePlaylist,
      })
      .then((res) => {
        const playlistId = res.id;
        spotifyApi.addTracksToPlaylist(playlistId, trackUris).then((res) => {
          console.log(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.content}>
      {/* <Hero /> */}
      <div className={styles.summary}>
        <div className={styles.playlistName}>
          <label htmlFor="">Playlist Name</label>
          {/* <textarea onChange={handleChange} type="text" value={playlistName} /> */}
          <p>{playlistName}</p>
        </div>
        <div className={styles.playlistTracks}>
          <div>
            <h1>
              {playlist.length} <span>tracks</span>
            </h1>
          </div>
        </div>
        <div className={styles.playlistDuration}>
          <h1>
            {playlistDuration(playlist)} <span>hh:mm:ss</span>
          </h1>
        </div>
        <div className={styles.playlistPublic}>
          <label>Public</label>
          <Switch
            {...label}
            checked={publicPlaylist}
            onChange={handlePubChange}
            color="secondary"
          />
        </div>
        <div className={styles.playlistCollab}>
          <label>Collaborative</label>
          <Switch
            {...label}
            checked={collaborativePlaylist}
            onChange={handleCollabCHange}
            color="secondary"
          />
        </div>
        <div className={styles.playlistSave}>
          <button onClick={createPlaylist}>Save to Spotify</button>
        </div>
      </div>
      <div className={styles.playlist}>
        <Playlist playlist={playlist} setPlaylist={setPlaylist} />
      </div>
    </div>
  );
}
