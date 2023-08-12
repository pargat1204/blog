// backend/routes/testimonialRoutes.js

const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialsController');

// Define API routes for the testimonial section

// Route to get all testimonials
router.get('/testimonials', testimonialController.getAllTestimonials);

// Route to get a specific testimonial by ID
router.get('/testimonials/:id', testimonialController.getTestimonialById);

// Route to create a new testimonial
router.post('/testimonials', testimonialController.createTestimonial);

// Route to update a testimonial by ID
router.put('/testimonials/:id', testimonialController.updateTestimonial);

// Route to delete a testimonial by ID
router.delete('/testimonials/:id', testimonialController.deleteTestimonial);

module.exports = router;
