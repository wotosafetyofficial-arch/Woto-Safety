const jwt = require('jsonwebtoken');
const Career = require('../models/Career');
const Contact = require('../models/Contact');

const JWT_SECRET = process.env.JWT_SECRET || 'woto_safety_admin_secret_key_2026';

// Admin Login
exports.adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const envUsername = process.env.ADMIN_USERNAME || 'wotosafety';
    const envPassword = process.env.ADMIN_PASSWORD || 'Nishant123@';

    if (username === envUsername && password === envPassword) {
      const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
      return res.status(200).json({ success: true, token });
    }

    return res.status(401).json({ success: false, error: 'Invalid username or password' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server authentication error' });
  }
};

// Verify Token
exports.verifyAdminToken = async (req, res) => {
  return res.status(200).json({ success: true });
};

// Get Dashboard Data
exports.getDashboardData = async (req, res) => {
  try {
    const applications = await Career.find().sort({ createdAt: -1 });
    const messages = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      storageType: 'mongodb',
      applications,
      messages
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to fetch dashboard data' });
  }
};

// Delete Application
exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    await Career.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to delete application' });
  }
};

// Delete Contact Message
exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to delete message' });
  }
};