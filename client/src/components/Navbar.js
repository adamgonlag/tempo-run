import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Navbar({ code }) {
  return (
    <nav>
      <div>Tempo Playlist</div>
      {code ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
}
