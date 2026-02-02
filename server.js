const express = require('express');
require('dotenv').config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// basic route so browser doesn't say "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Verse Index SQL API is running ✅');
});

// Placeholder..this will be replaced with sequelize
const connectDB = async () => {
  try {
    console.log('✅ DB connection placeholder');
  } catch (error) {
    console.error('❌ Database connection error:', error);
    process.exit(1);
  }
};

//  Starts the Express server after "connecting" to the database
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
