const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

/**
 * User Model
 * Represents a system user who can favorite Bible verses
 */
const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        
        role: {
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 'user',
        },
        
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    
    {
        tableName: 'users',
        timestamps: false, // we are manually handling created_at
        },
    );

module.exports = { User };
