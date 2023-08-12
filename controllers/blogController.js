// backend/controllers/blogController.js

const BlogPost = require('../models/Blog'); // Import the BlogPost model

// Controller function to fetch all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching blog posts.' });
  }
};

// Controller function to fetch a specific blog post by ID
exports.getBlogPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const blogPost = await BlogPost.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the blog post.' });
  }
};

// Controller function to create a new blog post
exports.createBlogPost = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newBlogPost = new BlogPost({
      title,
      content,
      author,
    });
    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the blog post.' });
  }
};

// Controller function to update a blog post by ID
exports.updateBlogPost = async (req, res) => {
  const postId = req.params.id;
  const { title, content, author } = req.body;

  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      postId,
      {
        title,
        content,
        author,
      },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }
    res.status(200).json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the blog post.' });
  }
};

// Controller function to delete a blog post by ID
exports.deleteBlogPost = async (req, res) => {
  const postId = req.params.id;

  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(postId);
    if (!deletedBlogPost) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the blog post.' });
  }
};
