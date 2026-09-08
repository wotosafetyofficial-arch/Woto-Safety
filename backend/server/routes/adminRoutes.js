const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verifyAdminToken = require('../../middlewares/authMiddleware');

// Check that exports exist before defining routes
if (!adminController.adminLogin) {
  console.error("CRITICAL ERROR: adminController functions are undefined!");
}

router.post('/login', adminController.adminLogin);
router.get('/verify', verifyAdminToken, adminController.verifyAdminToken);
router.get('/data', verifyAdminToken, adminController.getDashboardData);
router.delete('/applications/:id', verifyAdminToken, adminController.deleteApplication);
router.delete('/messages/:id', verifyAdminToken, adminController.deleteMessage);

module.exports = router;