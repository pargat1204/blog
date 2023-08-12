// backend/controllers/testimonialsController.js

const Testimonial = require('../models/Testimonial'); // Import the Testimonial model

// Controller function to fetch all testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching testimonials.' });
  }
};

// Controller function to fetch a specific testimonial by ID
exports.getTestimonialById = async (req, res) => {
  const testimonialId = req.params.id;

  try {
    const testimonial = await Testimonial.findById(testimonialId);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found.' });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the testimonial.' });
  }
};

// Controller function to create a new testimonial
exports.createTestimonial = async (req, res) => {
  const { name, content } = req.body;

  try {
    const newTestimonial = new Testimonial({
      name,
      content,
    });
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the testimonial.' });
  }
};

// Controller function to update a testimonial by ID
exports.updateTestimonial = async (req, res) => {
  const testimonialId = req.params.id;
  const { name, content } = req.body;

  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      testimonialId,
      {
        name,
        content,
      },
      { new: true }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({ error: 'Testimonial not found.' });
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the testimonial.' });
  }
};

// Controller function to delete a testimonial by ID
exports.deleteTestimonial = async (req, res) => {
  const testimonialId = req.params.id;

  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(testimonialId);
    if (!deletedTestimonial) {
      return res.status(404).json({ error: 'Testimonial not found.' });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the testimonial.' });
  }
};
