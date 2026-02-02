const express = require('express');
const {
  getVerses,
  getVersesByTopic,
} = require('../controllers/verseController');

const router = express.Router();

// /api/verses
router.get('/', getVerses);

// /api/topics/:topicId/verses
router.get('/topic/:topicId', getVersesByTopic);

module.exports = { verseRouter: router };
