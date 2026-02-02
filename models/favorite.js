// models/favorite.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const { User } = require('./user');
const { Verse } = require('./verse');

/**
 * Favorite Model
 * Junction table: Users <-> Verses
 * Prevent duplicates with UNIQUE(user_id, verse_id)
 */
const Favorite = sequelize.define(
  'Favorite',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE',
    },

    verse_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'verses', key: 'id' },
        onDelete: 'CASCADE',
    },
  },
  {
    tableName: 'favorites',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'verse_id'], // prevents duplicates
        name: 'unique_user_verse',
      },
    ],
  },
);

/**
 * Associations
 * User M:N Verse via Favorite
 */
User.belongsToMany(Verse, {
    through: Favorite,
    foreignKey: 'user_id',
    otherKey: 'verse_id',
});

Verse.belongsToMany(User, {
    through: Favorite,
    foreignKey: 'verse_id',
    otherKey: 'user_id',
});

// Optional (but useful) direct access:
Favorite.belongsTo(User, { foreignKey: 'user_id' });
Favorite.belongsTo(Verse, { foreignKey: 'verse_id' });
User.hasMany(Favorite, { foreignKey: 'user_id' });
Verse.hasMany(Favorite, { foreignKey: 'verse_id' });

module.exports = { Favorite };
