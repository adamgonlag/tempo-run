import styles from "../styles/components/AuthButton.module.scss";
import { AUTH_URL } from "../helpers/spotify";
import { motion } from "framer-motion";

export default function AuthButton({ code }) {
  let href;
  let text;
  let buttonStyle;

  if (!code) {
    href = AUTH_URL;
    text = "Connect with Spotify";
    buttonStyle = styles.login;
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
          {text}
        </motion.button>
      </a>
    </div>
  );
}
