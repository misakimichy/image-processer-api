import express from "express";

const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.send("server working. Yay!");
});

// start Express server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
