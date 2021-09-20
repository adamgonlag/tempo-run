import React from "react";
import AuthButton from "./AuthButton";
import spotifyIcon from "../spotify-icon.svg";

import styles from "../styles/components/Navbar.module.scss";

export default function Navbar({ code, user }) {
  let userImage;
  if (user && user.images) {
    userImage = <img src={user.images[0].url} alt="user profile pic" />;
  }
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Tempo Playlist</h1>
      <div className={styles.navItems}>
        {user ? (
          <>
            <div className={styles.user}>
              {userImage}
              <p>{user.display_name}</p>
            </div>
            <a
              href={user.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.spotify} src={spotifyIcon} alt="" />
            </a>
          </>
        ) : null}

        <AuthButton code={code} />
      </div>
    </nav>
  );
}
