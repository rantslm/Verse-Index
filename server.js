const express = require('express');
require('dotenv').config();
const { sequelize } = require('./config/db.js');
const { topicRouter } = require('./routes/topicRoutes');
const { verseRouter } = require('./routes/verseRoutes');

const { runStartupSeed } = require("./seed/startupSeed");

// Models
require('./models/user.js');
require('./models/Topic.js');
require('./models/verse.js');
require('./models/favorite.js');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/api/topics', topicRouter);
app.use('/api/verses', verseRouter);


// basic route so browser doesn't say "Cannot GET /"
app.get('/', (req, res) => {
    res.json({ ok: true, message: 'Verse Index SQL API is running ✅'});
    });

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ MySQL Authenticated");

        await sequelize.sync({ force: false });
        console.log('✅ MySQL Connected and Models Synced');
        
        await runStartupSeed();

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Database connection error:', error);
        process.exit(1);
    }
};

startServer();
