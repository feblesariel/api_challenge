module.exports = (sequelize, DataTypes) => {
    let alias = 'TV_Show_Actor';
    let cols = {
        show_id: {
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
        tableName: "TV_Show_Actor",
        timestamps: false
    }

    const TV_Show_Actor = sequelize.define(alias, cols, config);

    TV_Show_Actor.associate = function (models) {

        TV_Show_Actor.hasMany(models.TV_Show, {
            as: 'TV_Show',
            foreignKey: 'show_id',
            onDelete: 'CASCADE'
        });

        TV_Show_Actor.hasMany(models.Actor, {
            as: 'Actor',
            foreignKey: 'actor_id',
            onDelete: 'CASCADE'
        });

    }
    
    return TV_Show_Actor;
};