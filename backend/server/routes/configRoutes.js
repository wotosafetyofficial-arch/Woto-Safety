const express = require('express');
const router = express.Router();
const { getHiringStatus } = require('../controllers/configController.js');

router.get('/hiring-status', getHiringStatus);

module.exports = router;