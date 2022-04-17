const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const properties = {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        sku_code: { type: DataTypes.STRING, allowNull: true },
        image: { type: DataTypes.STRING, allowNull: true }
    };

    return sequelize.define('Item', properties);
}