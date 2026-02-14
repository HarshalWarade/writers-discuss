const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is responding" });
});

app.get("/vibe-check", (req, res) => {
  return res.status(200).json({ message: "I am in the vibe!" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
