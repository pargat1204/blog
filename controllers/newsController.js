// backend/controllers/newsController.js

const NewsArticle = require('../models/News'); // Import the NewsArticle model

// Controller function to fetch all news articles
exports.getAllNewsArticles = async (req, res) => {
  try {
    const newsArticles = await NewsArticle.find().sort({ createdAt: -1 });
    res.status(200).json(newsArticles);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching news articles.' });
  }
};

// Controller function to fetch a specific news article by ID
exports.getNewsArticleById = async (req, res) => {
  const articleId = req.params.id;

  try {
    const newsArticle = await NewsArticle.findById(articleId);
    if (!newsArticle) {
      return res.status(404).json({ error: 'News article not found.' });
    }
    res.status(200).json(newsArticle);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the news article.' });
  }
};

// Controller function to create a new news article
exports.createNewsArticle = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newNewsArticle = new NewsArticle({
      title,
      content,
      author,
    });
    const savedNewsArticle = await newNewsArticle.save();
    res.status(201).json(savedNewsArticle);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the news article.' });
  }
};

// Controller function to update a news article by ID
exports.updateNewsArticle = async (req, res) => {
  const articleId = req.params.id;
  const { title, content, author } = req.body;

  try {
    const updatedNewsArticle = await NewsArticle.findByIdAndUpdate(
      articleId,
      {
        title,
        content,
        author,
      },
      { new: true }
    );
    if (!updatedNewsArticle) {
      return res.status(404).json({ error: 'News article not found.' });
    }
    res.status(200).json(updatedNewsArticle);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the news article.' });
  }
};

// Controller function to delete a news article by ID
exports.deleteNewsArticle = async (req, res) => {
  const articleId = req.params.id;

  try {
    const deletedNewsArticle = await NewsArticle.findByIdAndDelete(articleId);
    if (!deletedNewsArticle) {
      return res.status(404).json({ error: 'News article not found.' });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the news article.' });
  }
};
