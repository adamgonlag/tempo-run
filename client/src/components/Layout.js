import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.scss";

export default function Layout({ code, spotifyApi, user }) {
  const [seedList, setSeedList] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [tempo, setTempo] = useState(110);
  const [duration, setDuration] = useState(17);
  const [energy, setEnergy] = useState(80);
  const [playlistName, setPlaylistName] = useState("110bpm playlist");

  const options = [tempo, setTempo, energy, setEnergy, duration, setDuration];

  useEffect(() => {
    let msg = "";
    if (seedList.length > 0) {
      msg = " - " + seedList.map((seed) => seed.name).join(", ");
    }
    setPlaylistName(`${tempo}bpm playlist${msg}`);
  }, [tempo, seedList]);

  useEffect(() => {
    const target_tempo = tempo;
    const min_tempo = target_tempo - 1;
    const max_tempo = target_tempo + 1;
    const target_energy = energy / 100;
    const min_energy = target_energy - 0.2;
    const max_energy = target_energy + 0.2;

    const recommendationOptions = {
      seed_artists: seedList.map((seed) => seed.id),
      limit: 100,
      target_energy,
      min_energy,
      max_energy,
      target_tempo,
      min_tempo,
      max_tempo,
    };

    if (seedList.length) {
      spotifyApi
        .getRecommendations(recommendationOptions)
        .then((data) => {
          let newPlaylist = data.tracks;

          // Attach audio features to each track
          const trackIds = newPlaylist.map((track) => track.id);
          spotifyApi.getAudioFeaturesForTracks(trackIds).then((data) => {
            newPlaylist = newPlaylist.map((track) => {
              const trackAudioFeatures = data.audio_features.filter(
                (item) => item.uri === track.uri
              );
              return { ...track, audio_features: trackAudioFeatures[0] };
            });
            console.log(newPlaylist);
            setPlaylist(newPlaylist);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [seedList, spotifyApi, energy, tempo]);

  return (
    <>
      <header>
        <Navbar code={code} user={user} />
      </header>

      <main className={styles.main}>
        <section className={styles.sidebar}>
          <Sidebar
            options={options}
            seedList={seedList}
            setSeedList={setSeedList}
            spotifyApi={spotifyApi}
          />
        </section>
        <section className={styles.content}>
          <Content
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            user={user}
            spotifyApi={spotifyApi}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        </section>
      </main>
    </>
  );
}
