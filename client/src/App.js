import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout.js";
import { getAuthCode } from "./spotify";
import axios from "axios";

function App() {
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

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
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [code]);

  return (
    <div className="App">
      <Layout code={code} />
    </div>
  );
}

export default App;
