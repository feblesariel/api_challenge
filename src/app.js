// Requires

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// express()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route System require and use

const apiMoviesRouter = require("./routes/api/movies");
const apiEpisodeRouter = require("./routes/api/episode");
const apiAddMovieRouter = require("./routes/api/addmovie");

app.use('/api/movies', apiMoviesRouter);
app.use('/api/episode', apiEpisodeRouter);
app.use('/api/addmovie', apiAddMovieRouter);

// Run server 

app.listen(3000, () => {
    console.log('Server running in 3000 port.');
});