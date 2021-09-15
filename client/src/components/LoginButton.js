import { AUTH_URL } from "../spotify";

export default function LoginButton() {
  console.log(AUTH_URL);
  return (
    <div>
      <a href={AUTH_URL}>
        <button>Connect with Spotify</button>
      </a>
    </div>
  );
}
