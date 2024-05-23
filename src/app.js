// Requires

const express = require('express');
require('dotenv').config();

// express()

const app = express();

// Route System require and use

const apiMoviesRouter = require("./routes/api/movies");
const apiEpisodeRouter = require("./routes/api/episode");
app.use('/api/movies', apiMoviesRouter);
app.use('/api/episode', apiEpisodeRouter);

// Run server 

app.listen(3000, () => {
    console.log('Server running in 3000 port.');
});