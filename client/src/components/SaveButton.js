import { motion } from "framer-motion";
import styles from "../styles/components/SaveButton.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

export default function SaveButton({
  onClick,
  saveSuccess,
  setSaveSuccess,
  loadingSave,
  setLoadingSave,
  createdPlaylist,
}) {
  const saveButton = (
    <motion.button
      className={styles.saveButton}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={loadingSave}
    >
      Save to Spotify
    </motion.button>
  );

  let successButton;
  if (createdPlaylist != null) {
    successButton = (
      <a
        href={createdPlaylist.external_urls.spotify}
        target="_blank"
        rel="noreferrer"
        alt="Link to Spotify Playlist"
      >
        <motion.button
          className={styles.successButton}
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.successButtonText}>
            <p>Success! View Playlist</p>{" "}
            <span class="material-icons">link</span>
          </div>
        </motion.button>
      </a>
    );
  }

  return (
    <div className={styles.playlistSave}>
      {saveSuccess ? successButton : saveButton}
      {loadingSave && (
        <CircularProgress
          size={24}
          sx={{
            color: "rgb(255, 60, 255)",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </div>
  );
}
