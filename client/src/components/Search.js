import SearchBar from "./SearchBar";
import styles from "../styles/components/Search.module.scss";
import Seed from "./Seed";
import { motion, AnimatePresence } from "framer-motion";
import { style } from "@mui/system";

export default function Search({
  spotifyApi,
  seedList,
  setSeedList,
  loadingPlaylist,
  setLoadingPlaylist,
  playlist,
}) {
  const loader = {
    initial: { opacity: 0, width: 0 },
    animate: { opacity: 1, width: "100%", transition: { duration: 0.2 } },
    exit: { opacity: 0, width: 0 },
  };

  const search = {
    initial: { opacity: 0, width: 0 },
    animate: {
      opacity: 1,
      width: "100%",
      transition: { duration: 0.5, type: "spring" },
    },
    exit: { opacity: 1, width: "100%", y: "200px", x: "200px" },
  };

  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      <motion.div
        key="searchbox"
        className={styles.search}
        variants={search}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <SearchBar setSeedList={setSeedList} spotifyApi={spotifyApi} />

        <div className={styles.seeds}>
          {seedList.length > 0 &&
            seedList.map((artist) => {
              return (
                <Seed
                  key={artist.id}
                  artist={artist}
                  seedList={seedList}
                  setSeedList={setSeedList}
                />
              );
            })}
        </div>

        {loadingPlaylist && (
          <motion.div
            key="loader-bar"
            className={styles.loader}
            variants={loader}
            initial="initial"
            animate="animate"
            exit="exit"
          ></motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
