// routes/topicRoutes.js
const express = require('express');
const {
  getTopics,
  createTopic,
} = require('../controllers/topicController');

const router = express.Router();

// /api/topics
router.get('/', getTopics);
router.post('/', createTopic);

module.exports = { topicRouter: router };
