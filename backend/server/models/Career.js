const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: [true, 'Full name is required'], trim: true },
    email: { 
      type: String, 
      required: [true, 'Email address is required'], 
      trim: true, 
      lowercase: true,
      unique: true // Guarantees uniqueness at the MongoDB level
    },
    phone: { type: String, required: [true, 'Phone number is required'], trim: true },
    city: { type: String, required: [true, 'City is required'], trim: true },
    education: { type: String, required: [true, 'Education detail is required'] },
    positionApplied: { type: String, required: [true, 'Position applied for is required'] },
    skills: { type: String, required: [true, 'Skills are required'] },
    experience: { type: String, required: [true, 'Experience overview is required'] },
    portfolioUrl: { type: String, trim: true },
    whyJoin: { type: String, required: [true, 'Motivation field is required'] },
    status: { type: String, enum: ['Pending', 'Reviewed', 'Rejected'], default: 'Pending' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Career', careerSchema);