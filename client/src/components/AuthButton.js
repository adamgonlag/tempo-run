import styles from "../styles/components/AuthButton.module.scss";
import { AUTH_URL } from "../helpers/spotify";
import { motion } from "framer-motion";
import spotifyIcon from "../spotify-icon.svg";

export default function AuthButton({ code }) {
  let href;
  let text;
  let buttonStyle;
  let spotifyImg = null;
  if (!code) {
    href = AUTH_URL;
    text = "Connect to your Spotify account";
    buttonStyle = styles.login;
    spotifyImg = (
      <img src={spotifyIcon} alt="" className={styles.spotifyIcon} />
    );
  } else {
    href = "/";
    text = "Logout";
    buttonStyle = styles.logout;
  }

  return (
    <div className={styles.button}>
      <a href={href}>
        <motion.button
          key="modal-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={buttonStyle}
        >
          <div className={styles.loginButtonItems}>
            {spotifyImg}
            {text}
          </div>
        </motion.button>
      </a>
    </div>
  );
}
