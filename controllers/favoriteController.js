const { Favorite } = require('../models/favorite');
const { Verse } = require('../models/verse');

const createFavorite = async (req, res) => {
  try {
    const { user_id, verse_id } = req.body;

    if (!user_id || !verse_id) {
      return res.status(400).json({
        success: false,
        error: 'user_id and verse_id are required',
      });
    }

    const favorite = await Favorite.create({ user_id, verse_id });

    return res.status(201).json({ success: true, data: favorite });
  } catch (err) {
    // Duplicate favorite (unique_user_verse constraint)
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({
        success: false,
        error: 'This verse is already favorited by this user',
      });
    }

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

const getFavoritesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const favorites = await Favorite.findAll({
      where: { user_id: userId },
      include: [
        {
          model: Verse,
        },
      ],
      order: [['id', 'ASC']],
    });

    return res.status(200).json({ success: true, data: favorites });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Favorite.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Favorite not found' });
    }

    return res.status(200).json({ success: true, message: 'Favorite deleted' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  createFavorite,
  getFavoritesByUser,
  deleteFavorite,
};
