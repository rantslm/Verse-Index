const { Verse } = require('../models/verse');

/**
 * GET /api/verses
 * Returns all verses
 */
const getVerses = async (req, res) => {
  try {
    const verses = await Verse.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ success: true, data: verses });
  } catch (error) {
    console.error('getVerses error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * GET /api/topics/:topicId/verses
 * Returns verses for a specific topic
 */
const getVersesByTopic = async (req, res) => {
  try {
    const { topicId } = req.params;

    const verses = await Verse.findAll({
      where: { topic_id: topicId }, 
      order: [['id', 'ASC']],
    });

    return res.status(200).json({ success: true, data: verses });
  } catch (error) {
    console.error('getVersesByTopic error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getVerses,
  getVersesByTopic,
};
