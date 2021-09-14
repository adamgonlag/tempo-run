const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Home page" });
});

app.listen(PORT, () => console.log("Server is listening on port: " + PORT));
