import { motion } from "framer-motion";
import styles from "../styles/components/SaveButton.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

export default function SaveButton({
  onClick,
  loading,
  setLoading,
  success,
  setSuccess,
  createdPlaylist,
}) {
  const saveButton = (
    <motion.button
      className={styles.saveButton}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={loading}
    >
      Save to Spotify
    </motion.button>
  );

  let successButton;
  if (createdPlaylist != null) {
    console.log(createdPlaylist);
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
      {success ? successButton : saveButton}
      {loading && (
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
