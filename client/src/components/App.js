import { useState, useEffect } from "react";
import "../styles/App.module.scss";
import Layout from "./Layout.js";
import { getAuthCode } from "../helpers/spotify";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

// Custom theme form MUI components
const theme = createTheme({
  palette: {
    secondary: {
      main: "#FF3CFF",
    },
  },
});

function App() {
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);
  const [user, setUser] = useState(null);
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState(null);
  const [spotifyApi, setSpotifyApi] = useState(spotify);

  useEffect(() => {
    const _code = getAuthCode();
    if (_code) {
      setCode(_code);
      (async () => {
        const response = await axios.post("/spotify/login", {
          code: _code,
        });
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
        spotifyApi.setAccessToken(response.data.accessToken);

        const userData = await spotifyApi.getMe();
        setUser(userData);
      })();
    }
  }, [spotifyApi]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout code={code} spotifyApi={spotify} />
      </div>
    </ThemeProvider>
  );
}

export default App;
