// Requires

const db = require('../../database/models/index.js');
const { Op } = require("sequelize");
const Movie = db.Movie;

// Controllers

const apiMoviesController = {

    getMovies: function (req, res) {

        // Extract query parameters
        const { filterField, filterValue, sortField, sortOrder } = req.query;

        // Build the where clause for filtering
        let whereClause = {};
        if (filterField && filterValue) {
            whereClause[filterField] = { [Op.like]: `%${filterValue}%` };
        }

        // Build the order clause for sorting
        let orderClause = [];
        if (sortField) {
            orderClause.push([sortField, sortOrder || 'ASC']);
        }

        // Fetch movies with filtering and sorting
        Movie.findAll({
            where: whereClause,
            order: orderClause
        })
        .then(movies => {
            if (movies.length === 0) {
                res.json({ message: 'No movies found' });
            } else {
                let respond = {
                    count: movies.length,
                    data: movies
                }
                res.json(respond);
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
    }

}

module.exports = apiMoviesController;