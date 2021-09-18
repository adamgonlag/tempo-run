import React from "react";
import AuthButton from "./AuthButton";

import styles from "../styles/Navbar.module.scss";

export default function Navbar({ code, user }) {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Tempo Playlist</h1>
      <div className={styles.navItems}>
        {user ? <p>Hey, {user.display_name}!</p> : null}

        <AuthButton code={code} />
      </div>
    </nav>
  );
}
