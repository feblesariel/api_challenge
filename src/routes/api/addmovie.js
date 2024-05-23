// Requires

const express = require ("express");
const router = express.Router();

// Controller require

const apiAddMovieController = require ("../../controllers/api/addmovie")

// Route

router.post("/", apiAddMovieController.addMovie);


module.exports = router;