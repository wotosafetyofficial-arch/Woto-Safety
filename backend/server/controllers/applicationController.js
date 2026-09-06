const Application = require('../models/Application');

const handleApplicationSubmission = async (req, res) => {
  try {
    const { name, email, phone, city, education, position, skills, experience, portfolio, why } = req.body;

    if (!name || !email || !phone || !position || !why || !req.file) {
      return res.status(400).json({ success: false, error: 'Required fields or resume missing.' });
    }

    const resumeData = {
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size
    };

    const newApplication = await Application.create({
      name, email, phone, city, education, position, skills, experience, portfolio, why,
      resume: resumeData
    });

    res.status(201).json({ success: true, message: 'Application submitted successfully!', data: newApplication });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ success: false, error: 'Server error while processing your application.' });
  }
};

module.exports = { handleApplicationSubmission };