const { dataTypes, DataTypes } = require('sequelize');
const { createdDB } = require('../config/db');

const User = createdDB.define("users", {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isSeller: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});