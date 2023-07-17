import express from 'express';
import songsDB from './users.json' assert { type: 'json' };
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ data: 'Hello World!' });
});

app.get('/about', (req, res) => {
  res.json({ data: 'About page' });
});

app.get('/songs', (req, res) => {
  const { title } = req.query;

  let allSongs = [];

  if (title) {
    allSongs = songsDB.filter((song) =>
      song.title.toLowerCase().includes(title.toLowerCase())
    );
  } else {
    allSongs = songsDB;
  }
  res.status(200).json({ data: allSongs });
});

app.get('/songs/:id', (req, res) => {
  const { id } = req.params;

  const detailSong = songsDB.find((song) => song.id === Number(id));

  if (detailSong.length === 0) {
    return res.status(404).json({ data: {}, message: 'Song not found' });
  }

  res.status(200).json({ data: detailSong });
});

app.post('/songs', (req, res) => {
  const { title, artist, url } = req.body;

  const song = { title, artist, url };

  const newSong = { id: songsDB.length + 1, ...song };

  songsDB.push(newSong);

  res.status(201).json({ message: 'Sucess add song', data: newSong });
});

app.use((req, res) => {
  res.status(404).json({ data: 'Page not found' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
