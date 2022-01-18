const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  { id: 1, name: "movie 1" },
  { id: 2, name: "movie 2" },
  { id: 3, name: "movie 3" },
];

app.get("/", (req, res) => {
  res.send("hello world from express!");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/:id", (req, res) => {
  res.send(movies[req.params.id - 1]);
});

app.post("/movies", (req, res) => {
  const newMovie = { id: movies.length + 1, name: req.body.name };
  movies.push(newMovie);
  res.send(newMovie);
});

app.put("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === Number(req.params.id));
  movie.name = req.body.name;
  res.send(movie);
});

app.delete("/movies/:id", (req, res) => {
  const index = movies.findIndex((m) => m.id === Number(req.params.id));
  const movie = movies.splice(index, 1);
  res.send(movie);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
