const { Topic } = require('../models/topic');

const getTopics = async (req, res) => {
  try {
    const topics = await Topic.findAll({
        order: [['id', 'ASC']],
    });

    return res.status(200).json({ success: true, data: topics });
  } catch (error) {
    console.error('getTopics error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/topics
 * Create a new topic
 * body: { name, slug, description? }
 */
const createTopic = async (req, res) => {
    try {
        const { name, slug, description } = req.body;

        // Basic "required" checks (Sequelize will also enforce allowNull/unique)
        if (!name || !slug) {
            return res.status(400).json({
                success: false,
                error: 'Both name and slug are required',
            });
        }
        
        const topic = await Topic.create({
            name,
            slug,
            description: description || null,
        });
        
        return res.status(201).json({ success: true, data: topic });
    } catch (error) {
        console.error('createTopic error:', error);
        
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                success: false,
                error: 'Slug must be unique (this slug already exists)',
            });
        }
        
        return res.status(400).json({ success: false, error: error.message });
    }
};

module.exports = {
  getTopics,
  createTopic,
};
