const express = require('express');
const { createFavorite, getFavoritesByUser, deleteFavorite, } = require('../controllers/favoriteController');

const router = express.Router();

// POST /api/favorites
router.post('/', createFavorite);

// GET /api/favorites/user/:userId
router.get('/user/:userId', getFavoritesByUser);

// DELETE /api/favorites/:id
router.delete('/:id', deleteFavorite);

module.exports = { favoriteRouter: router };
