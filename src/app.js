// Requires

const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

// express()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route System require and use

const apiMoviesRouter = require("./routes/api/movies");
const apiEpisodeRouter = require("./routes/api/episode");
const apiAddMovieRouter = require("./routes/api/addmovie");
const apiTokenRouter = require("./routes/api/token");

app.use('/api/movies', apiMoviesRouter);
app.use('/api/episode', apiEpisodeRouter);
app.use('/api/addmovie', apiAddMovieRouter);
app.use('/api/token', apiTokenRouter);

// Run server 

app.listen(3000, () => {
    console.log('Server running in 3000 port.');
});