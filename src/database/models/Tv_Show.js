module.exports = (sequelize, DataTypes) => {
    let alias = 'TV_Show';
    let cols = {
        show_id: {
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
        tableName: "TV_Show",
        timestamps: false
    }

    const TV_Show = sequelize.define(alias, cols, config);

    TV_Show.associate = function (models) {

        TV_Show.belongsTo(models.Director, {
            as: 'Director',
            foreignKey: 'director_id',
            onDelete: 'CASCADE'
        });

    }
    
    return TV_Show;
};