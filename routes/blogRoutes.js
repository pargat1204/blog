// backend/routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define API routes for the blog section

// Route to get all blog posts
router.get('/posts', blogController.getAllBlogPosts);

// Route to get a specific blog post by ID
router.get('/posts/:id', blogController.getBlogPostById);

// Route to create a new blog post
router.post('/posts', blogController.createBlogPost);

// Route to update a blog post by ID
router.put('/posts/:id', blogController.updateBlogPost);

// Route to delete a blog post by ID
router.delete('/posts/:id', blogController.deleteBlogPost);

module.exports = router;
