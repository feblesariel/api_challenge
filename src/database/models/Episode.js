module.exports = (sequelize, DataTypes) => {
    let alias = 'Episode';
    let cols = {
        episode_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        episode_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "Episode",
        timestamps: false
    }

    const Episode = sequelize.define(alias, cols, config);

    Episode.associate = function (models) {

        Episode.belongsTo(models.Season, {
            as: 'Season',
            foreignKey: 'season_id',
            onDelete: 'CASCADE'
        });

    }
    
    return Episode;
};