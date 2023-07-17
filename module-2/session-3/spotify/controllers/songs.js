import {
  addSongUsecase,
  getSongByIDUsecase,
  getSongBySortedASCUsecase,
  getSongByTitleUsecase,
  getSongsUsecase,
} from "../usecases/songs/songs.js";

// controllers
export const getSongs = (req, res) => {
  const { title, sort } = req.query;

  let playlists = [];

  if (sort === "mostPlayed") {
    playlists = getSongBySortedASCUsecase();
  } else if (title) {
    playlists = getSongByTitleUsecase(title);
  } else {
    playlists = getSongsUsecase();
  }

  if (!playlists) {
    return res.status(404).json({
      message: "Song not found!",
    });
  }

  res.json({ data: playlists });
};

export const getDetailSong = (req, res) => {
  const { id } = req.params;

  const playlist = getSongByIDUsecase(id);

  if (!playlist) {
    return res.status(404).json({
      message: "Song not found!",
    });
  }

  res.json({
    data: playlist,
  });
};

export const getSongByTitle = (req, res) => {
  const { title } = req.query;

  const playlists = getSongByTitleUsecase(title);

  if (!playlists) {
    return res.status(404).json({
      message: "Song not found!",
    });
  }

  res.json({
    data: playlists,
  });
};

export const addSong = (req, res) => {
  try {
    const { title, artist, url } = req.body;

    const playlist = addSongUsecase(title, artist, url);

    if (!title) {
      return res.status(400).json({
        message: "Title, artist, and url is required",
      });
    }

    res.json({
      data: playlist,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
