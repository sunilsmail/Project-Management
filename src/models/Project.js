const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); // Import the Sequelize instance

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', // Make sure your User model is correctly defined
            key: 'id'
        }
    }
}, {
    timestamps: true
});

module.exports = Project;
