import AuthButton from "./AuthButton";
import spotifyIcon from "../spotify-icon.svg";
import styles from "../styles/components/Navbar.module.scss";
import { motion } from "framer-motion";

export default function Navbar({ code, user }) {
  let userImage;
  if (user && user.images) {
    userImage = <img src={user.images[0].url} alt="user profile pic" />;
  }

  const navItemAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
    exit: {},
  };

  const logoAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
    exit: {},
  };

  return (
    <nav className={styles.navbar}>
      <motion.h1
        className={styles.logo}
        key="logo"
        variants={logoAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Tempo Playlister
      </motion.h1>
      <motion.div
        className={styles.navItems}
        key="nav-items"
        variants={navItemAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {user && (
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
        )}
        {code !== null && <AuthButton code={code} />}
      </motion.div>
    </nav>
  );
}
