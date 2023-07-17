import express from "express";
import songsRouter from "../routes/songs.js";
import bodyParser from "body-parser";

export const startRest = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(express.json());

  app.use("/songs", songsRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: "Not found!",
    });
  });

  app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
};
