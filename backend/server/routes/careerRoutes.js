const express = require('express');
const router = express.Router();
const { submitApplication } = require('../controllers/careerController');

router.post('/apply', submitApplication);

module.exports = router;