import styles from "../styles/components/AuthButton.module.scss";
import { AUTH_URL } from "../helpers/spotify";

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
        <button className={buttonStyle}>{text}</button>
      </a>
    </div>
  );
}
