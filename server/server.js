const express = require("express");
const path = require("path");
const moment = require("moment");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port =
  process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post("/test", (req, res) => {
  res.json({ msg: "recieved", code: req.body.code });
});

app.post("/spotify/login", (req, res) => {
  console.log("POST /spotify/login");
  console.log(process.env.CLIENT_ID);
  console.log(process.env.CLIENT_SECRET);
  console.log(process.env.REDIRECT_URI);
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

app.get("/api/test", (req, res) => {
  res.json({ serverTime: moment() });
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

// Middlesware checks if user is authenticated. Use on any route that needs a usr to be logged in.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
