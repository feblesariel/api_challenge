// Requires

const express = require ("express");
const router = express.Router();
const authenticateToken = require('../../middlewares/authenticateToken.js');

// Controller require

const apiMoviesController = require ("../../controllers/api/episode")

// Route

router.get("/", authenticateToken, apiMoviesController.getEpisode);


module.exports = router;