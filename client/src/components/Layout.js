import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

export default function Layout({ code }) {
  return (
    <>
      <header>
        <Navbar code={code} />
      </header>
      <main className={styles.main}>
        <section className={styles.sidebar}>
          <h1>Sidebar</h1>
        </section>
        <section className={styles.playlist}>
          <h1>Playlist</h1>
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
