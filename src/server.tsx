import express from "express";
import bodyParser from "body-parser";

async () => {
  const app = express();
  const port = process.env.PORT || 8000;

  app.use(bodyParser.json());

  app.get("/api", (req, res) => {
    res.send("server working");
  });

  // Start server
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};
