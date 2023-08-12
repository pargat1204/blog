// backend/routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define API routes for the contact section

// Route to get all contact messages
router.get('/messages', contactController.getAllContactMessages);

// Route to get a specific contact message by ID
router.get('/messages/:id', contactController.getContactMessageById);

// Route to create a new contact message
router.post('/messages', contactController.createContactMessage);

// Route to update a contact message by ID
router.put('/messages/:id', contactController.updateContactMessage);

// Route to delete a contact message by ID
router.delete('/messages/:id', contactController.deleteContactMessage);

module.exports = router;
