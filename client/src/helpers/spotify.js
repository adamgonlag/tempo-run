export const spotify_auth_url = "https://accounts.spotify.com/authorize";
export const client_id = "12d2225d82dd411497e76e507ac9807f";
export const response_type = "code";
export const redirect_uri =
  process.env.REDIRECT_URI ||
  (process.env.NODE_ENV === "production" &&
    "https://hidden-gorge-82205.herokuapp.com/") ||
  "http://localhost:3000";
export const scope = [
  "user-read-private",
  "user-read-email",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-read-playback-state",
  "ugc-image-upload",
];

export const AUTH_URL = `${spotify_auth_url}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope.join(
  " "
)}`;

// When Spotify API responds to auth request, get auth code from the url
export const getAuthCode = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  if (code) {
    window.history.pushState({}, null, "/");
  }
  return code;
};
