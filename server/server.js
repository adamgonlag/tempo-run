const express = require("express");
const path = require("path");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port =
  process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post("/spotify/login", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
  });

  // Retrieve an access token and a refresh token
  const code = req.body.code;

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log(data.body);
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/spotify/refresh", (req, res) => {
  console.log("refreshing token");
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
