import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Summary from "./Summary";
import Search from "./Search";
import Modal from "./Modal";
import styles from "../styles/components/Layout.module.scss";
import Playlist from "./Playlist";
import PlaylistLoader from "./PlaylistLoader";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";

export default function Layout({ code, spotifyApi, user }) {
  const [seedList, setSeedList] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [tempo, setTempo] = useState(116);
  const [duration, setDuration] = useState(17);
  const [energy, setEnergy] = useState(80);
  const [playlistName, setPlaylistName] = useState("116bpm playlist");
  const [publicPlaylist, setPublicPlaylist] = useState(true);
  const [collaborativePlaylist, setcollaborativePlaylist] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [loadingPlaylist, setLoadingPlaylist] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const closeModal = () => setModalOpen(false);

  // Show login modal on page load
  useEffect(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  // Reset save success button when playlistst changes
  useEffect(() => {
    setSaveSuccess(false);
  }, [playlist]);

  const options = [tempo, setTempo, energy, setEnergy, duration, setDuration];

  // Set the playlist name
  useEffect(() => {
    let msg = "";
    if (seedList.length > 0) {
      msg = " - " + seedList.map((seed) => seed.name).join(", ");
    }
    setPlaylistName(`${tempo}bpm playlist${msg}`);
  }, [tempo, seedList]);

  // Get playlist recommendations
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

    if (seedList.length === 0) {
      setPlaylist([]);
    } else {
      setLoadingPlaylist(true);
      spotifyApi
        .getRecommendations(recommendationOptions)
        .then((data) => {
          let newPlaylist = data.tracks;

          // Attach audio features to each track
          const trackIds = newPlaylist.map((track) => track.id);
          spotifyApi.getAudioFeaturesForTracks(trackIds).then((data) => {
            newPlaylist = newPlaylist
              .map((track) => {
                const trackAudioFeatures = data.audio_features.filter(
                  (item) => item.uri === track.uri
                );
                return { ...track, audio_features: trackAudioFeatures[0] };
              })
              .filter(
                (track) => Math.floor(track.audio_features.tempo) === tempo
              );

            //Allow loader to show longer before showing playlistt
            setTimeout(() => {
              setPlaylist(newPlaylist);
              setLoadingPlaylist(false);
            }, 250);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [seedList, spotifyApi, energy, tempo]);

  let initialLoad = false;
  if (pageLoading & (code != null)) {
    initialLoad = true;
  }

  return (
    <>
      {initialLoad && (
        <AnimatePresence
          initial={true}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          <PageLoader
            pageLoading={pageLoading}
            setPageLoading={setPageLoading}
          />
        </AnimatePresence>
      )}
      {code !== null ? (
        <>
          <header>
            <Navbar code={code} user={user} />
          </header>
          <main className={styles.main}>
            <section className={styles.search}>
              <Search
                seedList={seedList}
                setSeedList={setSeedList}
                spotifyApi={spotifyApi}
                loadingPlaylist={loadingPlaylist}
                setLoadingPlaylist={setLoadingPlaylist}
                playlist={playlist}
              />
            </section>
            {/* {loadingPlaylist && <PlaylistLoader />} */}
            {playlist.length > 0 ? (
              <>
                <section className={styles.playlist}>
                  <Playlist
                    spotifyApi={spotifyApi}
                    playlist={playlist}
                    setPlaylist={setPlaylist}
                  />
                </section>
                <section className={styles.summary}>
                  <Summary
                    user={user}
                    playlist={playlist}
                    playlistName={playlistName}
                    options={options}
                    seedList={seedList}
                    setSeedList={setSeedList}
                    spotifyApi={spotifyApi}
                    publicPlaylist={publicPlaylist}
                    setPublicPlaylist={setPublicPlaylist}
                    collaborativePlaylist={collaborativePlaylist}
                    setcollaborativePlaylist={setcollaborativePlaylist}
                    saveSuccess={saveSuccess}
                    setSaveSuccess={setSaveSuccess}
                    loadingSave={loadingSave}
                    setLoadingSave={setLoadingSave}
                  />
                </section>
              </>
            ) : null}
          </main>
        </>
      ) : (
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && <Modal code={code} handleClose={closeModal} />}
        </AnimatePresence>
      )}
    </>
  );
}
