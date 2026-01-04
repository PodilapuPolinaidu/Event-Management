const express = require('express');
const router = express.Router();

// Import route modules
// const eventRoutes = require('./eventRoutes');
// const userRoutes = require('./userRoutes');

// Route definitions
// router.use('/events', eventRoutes);
// router.use('/users', userRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;

