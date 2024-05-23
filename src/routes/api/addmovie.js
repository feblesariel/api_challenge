// Requires

const express = require ("express");
const router = express.Router();
const authenticateToken = require('../../middlewares/authenticateToken.js');

// Controller require

const apiAddMovieController = require ("../../controllers/api/addmovie")

// Route

router.post("/", authenticateToken, apiAddMovieController.addMovie);


module.exports = router;