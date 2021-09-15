import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout.js";
import { getAuthCode } from "./spotify";
import axios from "axios";
const SpotifyWebApi = require("spotify-web-api-js");
const spotifyApi = new SpotifyWebApi();

function App() {
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const _code = getAuthCode();
    if (_code) {
      setCode(_code);
      axios
        .post("/spotify/login", {
          code: _code,
        })
        .then((response) => {
          setAccessToken(response.data.accessToken);
          setRefreshToken(response.data.refreshToken);
          setExpiresIn(response.data.expiresIn);

          spotifyApi.setAccessToken(response.data.accessToken);
          spotifyApi.getMe().then((user) => {
            console.log(user);
            setUser(user);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [code]);

  const getCurrentTrack = () => {
    spotifyApi
      .getMyCurrentPlayingTrack()
      .then((track) => {
        console.log(track);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Layout code={code} />
      <button onClick={getCurrentTrack}>Get current track</button>
      <button onClick={() => spotifyApi.pause()}>Pause</button>
      <button onClick={() => spotifyApi.play()}>Play</button>
    </div>
  );
}

export default App;
