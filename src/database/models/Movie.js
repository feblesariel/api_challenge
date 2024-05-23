module.exports = (sequelize, DataTypes) => {
    let alias = 'Movie';
    let cols = {
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        release_year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        director_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    };
    let config = {
        tableName: "Movie",
        timestamps: false
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function (models) {

        Movie.belongsTo(models.Director, {
            as: 'Director',
            foreignKey: 'director_id',
            onDelete: 'CASCADE'
        });

    }
    
    return Movie;
};