// Requires

const db = require('../../database/models/index.js');
const Movie = db.Movie;
const Director = db.Director;

// Controllers

const apiAddMovieController = {

    addMovie: function (req, res) {

        const { title, release_year, director_name } = req.body;

        // Validate that the required fields are present
        if (!title || !release_year || !director_name) {
            return res.status(400).json({ message: "Title, director, and release year are required." });
        }

        // Check if the director exists in the database
        const findDirector = Director.findOne({ where: { name: director_name } });

        // Check if the movie exists in the database
        const findMovie = Movie.findOne({ where: { title: title } });

        // Execute both queries concurrently
        Promise.all([findDirector, findMovie])
            .then(([director, existingMovie]) => {
                if (!director) {
                    // If the director does not exist, create a new director
                    return Director.create({ name: director_name })
                        .then(newDirector => [newDirector, existingMovie]);
                } else {
                    // If the director exists, continue with the existing director
                    return [director, existingMovie];
                }
            })
            .then(([newDirector, existingMovie]) => {
                if (!existingMovie) {
                    // If the movie does not exist, create a new movie and associate it with the director
                    return Movie.create({
                        title: title,
                        release_year: release_year,
                        director_id: newDirector.director_id
                    });
                } else {
                   // If the movie already exists, return a message
                   throw new Error("Movie already exists.");
                }
            })
            .then(movie => {
                res.status(201).json({ message: "Movie added successfully.", data: movie });
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    }

}

module.exports = apiAddMovieController;
