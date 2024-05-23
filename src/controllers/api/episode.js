// Requires

const db = require('../../database/models/index.js');
const { Op } = require("sequelize");
const Episode = db.Episode;
const Season = db.Season;
const TV_Show = db.TV_Show;
const Director = db.Director;

// Controllers

const apiEpisodeController = {

    getEpisode: function (req, res) {
        // Extract query parameters
        const { tv_show_name, episode_number, season_number, sortField, sortOrder } = req.query;

        // Build the where clause for filtering
        let whereClause = {};

        if (tv_show_name) {
            whereClause['$Season.TV_Show.title$'] = { [Op.like]: `%${tv_show_name}%` };
        }
        if (episode_number) {
            whereClause['episode_number'] = episode_number;
        }
        if (season_number) {
            whereClause['$Season.season_number$'] = { [Op.like]: `%${season_number}%` };
        }


        // Build the order clause for sorting
        let orderClause = [];
        if (sortField) {
            orderClause.push([sortField, sortOrder || 'ASC']);
        }

        // Fetch episode with filtering and sorting
        Episode.findAll({
            where: whereClause,
            order: orderClause,
            include: [
                {
                    model: Season,
                    as: 'Season',
                    include: [
                        {
                            model: TV_Show,
                            as: 'TV_Show',
                            include: [
                                {
                                    model: Director,
                                    as: 'Director'
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        .then(episodes => {
            if (episodes.length === 0) {
                res.json({ message: 'No episode found' });
            } else {
                // Map the episodes to include the director's name
                let respondData = episodes.map(episode => {
                    return {
                        tv_show_name: episode.Season.TV_Show.title,
                        director_name: episode.Season.TV_Show.Director.name,
                        season_number: episode.Season.season_number,
                        episode_number: episode.episode_number,
                        title: episode.title                      
                    };
                });
                
                let respond = {
                    count: episodes.length,
                    data: respondData
                }
                res.json(respond);
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
    }
}

module.exports = apiEpisodeController;