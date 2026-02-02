const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

/**
 * Topic Model
 * Represents curated thematic categories (confidence, stressed, etc.)
 */
const Topic = sequelize.define(
  'Topic',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'topics',
    timestamps: false, // because i used created_at in SQL
  },
);

module.exports = { Topic };
