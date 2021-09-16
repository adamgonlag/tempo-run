import Hero from "./Hero";
import styles from "../styles/Content.module.scss";
export default function Content() {
  return (
    <div className={styles.content}>
      <Hero />
    </div>
  );
}
