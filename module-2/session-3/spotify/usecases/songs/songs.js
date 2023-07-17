import {
  addSongRepo,
  getSongByIDRepo,
  getSongBySortedASCRepo,
  getSongByTitleRepo,
  getSongsRepo,
} from "../../repositories/songs/songs.js";

export const getSongsUsecase = () => {
  const playlists = getSongsRepo();

  if (!playlists) {
    return null;
  }

  return { playlists };
};

export const getSongByIDUsecase = (id) => {
  const playlist = getSongByIDRepo(id);

  if (!playlist) {
    return null;
  }

  return { playlist };
};

export const addSongUsecase = (title, artist, url) => {
  return addSongRepo(title, artist, url);
};

export const getSongByTitleUsecase = (title) => {
  const playlists = getSongByTitleRepo(title);

  if (!playlists) {
    return null;
  }

  return { playlists };
};

export const getSongBySortedASCUsecase = () => {
  const playlists = getSongBySortedASCRepo();

  if (!playlists) {
    return null;
  }

  return { playlists };
};
