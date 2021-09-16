import styles from "../styles/Sidebar.module.scss";
import Search from "./Search";
import Options from "./Options";

export default function Sidebar({ spotifyApi }) {
  return (
    <div className={styles.sidebar}>
      <Options />
      <Search spotifyApi={spotifyApi} />
    </div>
  );
}
