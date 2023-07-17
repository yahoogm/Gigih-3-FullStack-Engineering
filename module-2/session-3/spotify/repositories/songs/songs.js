import { v4 as uuid } from "uuid";

import songs from "./json/songs.json" assert { type: "json" };

export const getSongsRepo = () => {
  const playlists = songs;
  return playlists;
};

export const getSongByIDRepo = (id) => {
  let playlist = songs.find((song) => song.id === id);
  playlist.mostPlayed += 1;

  return playlist;
};

export const addSongRepo = (title, artist, url) => {
  if (!title) {
    throw Error("Title is not valid!");
  }

  const newPlaylist = { id: uuid(), title, artist, url, mostPlayed: 0 };

  songs.push(newPlaylist);

  return newPlaylist;
};

export const getSongByTitleRepo = (title) => {
  const playlists = songs.filter((song) =>
    song.title.toLowerCase().includes(title.toLowerCase())
  );
  return playlists;
};

export const getSongBySortedASCRepo = () => {
  const playlists = songs.sort((a, b) => b.mostPlayed - a.mostPlayed);
  return playlists;
};
