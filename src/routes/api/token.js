// Requires

const express = require ("express");
const router = express.Router();

// Controller require

const apiTokenController = require ("../../controllers/api/token")

// Route

router.post("/", apiTokenController.getToken);


module.exports = router;