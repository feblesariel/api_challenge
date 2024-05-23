// Requires

const express = require ("express");
const router = express.Router();

// Controller require

const apiMoviesController = require ("../../controllers/api/movies")

// Route

router.get("/", apiMoviesController.getMovies);


module.exports = router;