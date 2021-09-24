import AuthButton from "./AuthButton";
import spotifyIcon from "../spotify-icon.svg";
import styles from "../styles/components/Navbar.module.scss";
import { motion } from "framer-motion";

export default function Navbar({ code, user }) {
  let userImage;
  if (user && user.images) {
    userImage = <img src={user.images[0].url} alt="user profile pic" />;
  }

  const logoAnimation = {
    initial: { y: "-100vh", opacity: 0 },
    animate: {
      y: "0",
      opacity: 1,
      transition: { duration: 1.5, type: "spring" },
    },
    exit: {},
  };
  const navItemAnimation = {
    initial: { y: "-100vh", opacity: 0 },
    animate: {
      y: "0",
      opacity: 1,
      transition: { duration: 1.5, type: "spring" },
    },
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
        <span className="material-icons">timer</span>
        Tempo Run
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
