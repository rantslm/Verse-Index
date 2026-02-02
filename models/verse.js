// models/verse.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const { Topic } = require('./Topic'); 

/**
 * Verse Model
 * Represents the 'verses' table in MySQL.
 */
const Verse = sequelize.define(
  'Verse',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'topics', // table name
            key: 'id',
        },
        onDelete: 'CASCADE',
    },

    reference: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    book: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    chapter: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        min: 1,
        },
    },

    verse_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        min: 1,
        },
    },

    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    version: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'en-kjv',
    },
  },
  {
    timestamps: true,
    tableName: 'verses',
    createdAt: 'created_at',
    updatedAt: false,
    underscored: true,
  },
);

/**
 * Associations
 * Topic 1:M Verse
 */
Topic.hasMany(Verse, { foreignKey: 'topic_id' });
Verse.belongsTo(Topic, { foreignKey: 'topic_id' });

module.exports = { Verse };
