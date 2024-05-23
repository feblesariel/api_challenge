module.exports = (sequelize, DataTypes) => {
    let alias = 'Movie_Actor';
    let cols = {
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        actor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    };
    let config = {
        tableName: "Movie_Actor",
        timestamps: false
    }

    const Movie_Actor = sequelize.define(alias, cols, config);

    Movie_Actor.associate = function (models) {

        Movie_Actor.hasMany(models.Movie, {
            as: 'Movie',
            foreignKey: 'movie_id',
            onDelete: 'CASCADE'
        });

        Movie_Actor.hasMany(models.Actor, {
            as: 'Actor',
            foreignKey: 'actor_id',
            onDelete: 'CASCADE'
        });

    }
    
    return Movie_Actor;
};