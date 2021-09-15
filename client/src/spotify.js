export const spotify_auth_url = "https://accounts.spotify.com/authorize";
export const client_id = "12d2225d82dd411497e76e507ac9807f";
export const response_type = "code";
export const redirect_uri = "http://localhost:3000";
export const scopes = ["user-read-private", "user-read-email"];
export const AUTH_URL = `${spotify_auth_url}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scopes=${scopes}`;

// When Spotify API responds to auth request, get auth code from the url
export const getAuthCode = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  window.history.pushState({}, null, "/");
  return code;
};
