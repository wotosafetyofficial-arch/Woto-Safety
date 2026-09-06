const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { handleApplicationSubmission } = require('../controllers/applicationController');

router.post('/', upload.single('resumeFile'), handleApplicationSubmission);

module.exports = router;