// @desc    Get current app configuration (e.g., Hiring status)
// @route   GET /api/config/hiring-status
// @access  Public
const getHiringStatus = (req, res) => {
  const isHiring = process.env.ENABLE_HIRING === 'true';
  res.status(200).json({
    success: true,
    isHiring,
  });
};

module.exports = {
  getHiringStatus,
};