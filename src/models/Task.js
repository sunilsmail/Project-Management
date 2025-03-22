const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); // Import the Sequelize instance

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    projectId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Projects', // Make sure your Project model is defined
            key: 'id'
        }
    }
}, {
    timestamps: true
});

module.exports = Task;
