const Career = require('../models/Career');

// @desc    Submit a new job application
// @route   POST /api/careers/apply
// @access  Public
const submitApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      city,
      education,
      positionApplied,
      skills,
      experience,
      portfolioUrl,
      whyJoin
    } = req.body;

    // 1. Validate essential required fields
    if (!fullName || !email || !phone || !city || !education || !positionApplied || !skills || !experience || !whyJoin) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    // 2. Check if an application already exists with the same email
    const existingApplication = await Career.findOne({ email: email.toLowerCase().trim() });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'An application with this email address has already been submitted.'
      });
    }

    // 3. Create the new application
    const application = await Career.create({
      fullName,
      email: email.toLowerCase().trim(),
      phone,
      city,
      education,
      positionApplied,
      skills,
      experience,
      portfolioUrl,
      whyJoin
    });

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully!',
      data: application
    });
  } catch (error) {
    console.error('Career Application Submission Error:', error);
    return res.status(500).json({ success: false, message: 'Server error. Failed to process application.' });
  }
};

module.exports = { submitApplication };