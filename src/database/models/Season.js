module.exports = (sequelize, DataTypes) => {
    let alias = 'Season';
    let cols = {
        season_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        season_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        show_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "Season",
        timestamps: false
    }

    const Season = sequelize.define(alias, cols, config);

    Season.associate = function (models) {

        Season.belongsTo(models.TV_Show, {
            as: 'TV_Show',
            foreignKey: 'show_id',
            onDelete: 'CASCADE'
        });

        Season.hasMany(models.Episode, {
            as: 'Episode',
            foreignKey: 'episode_id',
            onDelete: 'CASCADE'
        });

    }
    
    return Season;
};