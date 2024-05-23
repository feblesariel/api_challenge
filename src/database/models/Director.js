module.exports = (sequelize, DataTypes) => {
    let alias = 'Director';
    let cols = {
        director_id: {
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
        tableName: "Director",
        timestamps: false
    }

    const Director = sequelize.define(alias, cols, config);

    Director.associate = function (models) {

        Director.hasMany(models.Movie, {
            as: 'Movie',
            foreignKey: 'director_id',
            onDelete: 'CASCADE'
        });

    }
    
    return Director;
};