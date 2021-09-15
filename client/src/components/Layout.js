import Navbar from "./Navbar";

export default function Layout({ code }) {
  return (
    <main>
      <Navbar code={code} />
      <h1>Tempo Playlist</h1>
    </main>
  );
}
