const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(express.static("../client/build"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log("Server is listening on port: " + PORT));
