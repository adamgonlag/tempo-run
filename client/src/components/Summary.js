import { useState } from "react";
import styles from "../styles/components/Summary.module.scss";
import Switch from "@mui/material/Switch";
import { playlistDuration } from "../helpers/playlistCalculations";
import Option from "./Option";
import { motion } from "framer-motion";
import SaveButton from "./SaveButton";

export default function Summary({
  options,
  playlist,
  spotifyApi,
  user,
  playlistName,
  setPlaylistName,
  publicPlaylist,
  setPublicPlaylist,
  collaborativePlaylist,
  setcollaborativePlaylist,
  saveSuccess,
  setSaveSuccess,
  loadingSave,
  setLoadingSave,
}) {
  const [createdPlaylist, setCreatedPlaylist] = useState(null);
  const [tempo, setTempo, energy, setEnergy, duration, setDuration] = options;

  const label = { inputProps: { "aria-label": "Switch" } };

  const changeTempo = (event, newValue) => {
    setTempo(newValue);
  };

  const changeDuration = (event, newValue) => {
    setDuration(newValue);
  };

  const changeEnergy = (event, newValue) => {
    setEnergy(newValue);
  };

  const convertDurationToString = () => {
    // Convert to h:mm:ss
    var date = new Date(null);
    date.setSeconds(duration);

    return date.toISOString().substr(11, 5);
  };

  const durationString = convertDurationToString();

  const createPlaylist = () => {
    console.log("create playlist");
    setLoadingSave(true);
    const trackUris = playlist.map((track) => track.uri);
    spotifyApi
      .createPlaylist(user.id, {
        name: playlistName,
        description: "Created by Tempo Run",
        public: publicPlaylist,
        collaborative: collaborativePlaylist,
      })
      .then((res) => {
        setCreatedPlaylist(res);
        const playlistId = res.id;
        spotifyApi.addTracksToPlaylist(playlistId, trackUris).then((res) => {
          setTimeout(() => {
            setLoadingSave(false);
            setSaveSuccess(true);
          }, 1000);
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

  const summaryAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      className={styles.summary}
      key="summary"
      variants={summaryAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      s
    >
      <div className={styles.options}>
        <ul>
          <li>
            <Option
              title="Your Tempo"
              valueDisplayed={tempo}
              value={tempo}
              onChange={changeTempo}
            />
            {/* <Option
              title="Target Duration"
              valueDisplayed={durationString}
              value={duration}
              onChange={changeDuration}
            /> */}
            <Option
              title="Energy Profile"
              valueDisplayed={energy}
              value={energy}
              onChange={changeEnergy}
            />
          </li>
        </ul>
      </div>
      <div className={styles.details}>
        <div className={styles.playlistName}>
          <label htmlFor="">Playlist Name</label>
          <p>{playlistName}</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.playlistTracks}>
            <div>
              <label htmlFor=""># Tracks</label>
              <h1>{playlist.length}</h1>
            </div>
          </div>
          <div className={styles.playlistDuration}>
            <label htmlFor="">Total Length</label>
            <h1>{playlistDuration(playlist)}</h1>
          </div>
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
        <SaveButton
          createdPlaylist={createdPlaylist}
          saveSuccess={saveSuccess}
          setSaveSuccess={setSaveSuccess}
          loadingSave={loadingSave}
          setLoadingSave={setLoadingSave}
          onClick={createPlaylist}
        ></SaveButton>
      </div>
    </motion.div>
  );
}
