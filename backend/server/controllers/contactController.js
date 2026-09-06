const Contact = require('../models/Contact');

// @desc    Submit a message via the contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields.',
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully.',
      data: newContact,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Unable to send message.',
    });
  }
};

module.exports = {
  submitContactForm,
};