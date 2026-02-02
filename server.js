const express = require('express');
require('dotenv').config();
const { sequelize } = require('./config/db.js');

// Models
require('./models/user.js');
require('./models/Topic.js');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// basic route so browser doesn't say "Cannot GET /"
app.get('/', (req, res) => {
    res.json({ ok: true, message: 'Verse Index SQL API is running ✅'});
    });




const startServer = async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('✅ MySQL Connected and Models Synced');
        
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
