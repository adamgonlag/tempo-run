const express = require("express");
const path = require("path");
const moment = require("moment");
const app = express();
const port =
  process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;

app.use(express.json());

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
