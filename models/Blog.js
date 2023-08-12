// backend/models/Blog.js

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [String],
  categories: [String],
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
