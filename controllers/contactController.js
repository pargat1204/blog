// backend/controllers/contactController.js

const ContactMessage = require('../models/ContactMessage'); // Import the ContactMessage model

// Controller function to fetch all contact messages
exports.getAllContactMessages = async (req, res) => {
  try {
    const contactMessages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(contactMessages);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching contact messages.' });
  }
};

// Controller function to fetch a specific contact message by ID
exports.getContactMessageById = async (req, res) => {
  const messageId = req.params.id;

  try {
    const contactMessage = await ContactMessage.findById(messageId);
    if (!contactMessage) {
      return res.status(404).json({ error: 'Contact message not found.' });
    }
    res.status(200).json(contactMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the contact message.' });
  }
};

// Controller function to create a new contact message
exports.createContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newContactMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
    });
    const savedContactMessage = await newContactMessage.save();
    res.status(201).json(savedContactMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the contact message.' });
  }
};

// Controller function to update a contact message by ID
exports.updateContactMessage = async (req, res) => {
  const messageId = req.params.id;
  const { name, email, subject, message } = req.body;

  try {
    const updatedContactMessage = await ContactMessage.findByIdAndUpdate(
      messageId,
      {
        name,
        email,
        subject,
        message,
      },
      { new: true }
    );
    if (!updatedContactMessage) {
      return res.status(404).json({ error: 'Contact message not found.' });
    }
    res.status(200).json(updatedContactMessage);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the contact message.' });
  }
};

// Controller function to delete a contact message by ID
exports.deleteContactMessage = async (req, res) => {
  const messageId = req.params.id;

  try {
    const deletedContactMessage = await ContactMessage.findByIdAndDelete(messageId);
    if (!deletedContactMessage) {
      return res.status(404).json({ error: 'Contact message not found.' });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the contact message.' });
  }
};
