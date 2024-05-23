// Requires

const express = require ("express");
const router = express.Router();

// Controller require

const apiMoviesController = require ("../../controllers/api/episode")

// Route

router.get("/", apiMoviesController.getEpisode);


module.exports = router;