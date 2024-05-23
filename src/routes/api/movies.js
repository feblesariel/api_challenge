// Requires

const express = require ("express");
const router = express.Router();
const authenticateToken = require('../../middlewares/authenticateToken.js');

// Controller require

const apiMoviesController = require ("../../controllers/api/movies")

// Route

router.get("/", authenticateToken, apiMoviesController.getMovies);


module.exports = router;