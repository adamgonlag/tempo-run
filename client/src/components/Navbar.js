import React from "react";
import AuthButton from "./AuthButton";

import styles from "../styles/Navbar.module.scss";

export default function Navbar({ code }) {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Tempo Playlist</h1>
      <AuthButton code={code} />
    </nav>
  );
}
