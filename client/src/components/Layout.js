import Navbar from "./Navbar";
import Content from "./Content";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.scss";

export default function Layout({ code, spotifyApi }) {
  return (
    <>
      <header>
        <Navbar code={code} />
      </header>

      <main className={styles.main}>
        <section className={styles.sidebar}>
          <Sidebar spotifyApi={spotifyApi} />
        </section>
        <section className={styles.content}>
          <Content />
        </section>
      </main>
    </>
  );
}
