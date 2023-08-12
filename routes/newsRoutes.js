// backend/routes/newsRoutes.js

const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Define API routes for the news section

// Route to get all news articles
router.get('/articles', newsController.getAllNewsArticles);

// Route to get a specific news article by ID
router.get('/articles/:id', newsController.getNewsArticleById);

// Route to create a new news article
router.post('/articles', newsController.createNewsArticle);

// Route to update a news article by ID
router.put('/articles/:id', newsController.updateNewsArticle);

// Route to delete a news article by ID
router.delete('/articles/:id', newsController.deleteNewsArticle);

module.exports = router;
