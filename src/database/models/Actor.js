module.exports = (sequelize, DataTypes) => {
    let alias = 'Actor';
    let cols = {
        actor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "Actor",
        timestamps: false
    }

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function (models) {

        Actor.hasMany(models.Movie_Actor, {
            as: 'Movie_Actor',
            foreignKey: 'actor_id',
            onDelete: 'CASCADE'
        });

        Actor.hasMany(models.TV_Show_Actor, {
            as: 'TV_Show_Actor',
            foreignKey: 'actor_id',
            onDelete: 'CASCADE'
        });

    }
    
    return Actor;
};