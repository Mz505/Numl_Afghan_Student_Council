const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  graduationYear: {
    type: Number,
    required: true,
    min: 2000,
    max: new Date().getFullYear() + 10,
  },
  degree: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    required: true,
    maxlength: 500,
  },
  achievements: [{
    type: String,
    trim: true,
  }],
  portfolio: {
    type: String,
    default: '',
  },
  vision: {
    type: String,
    required: true,
    maxlength: 300,
  },
  socialMedia: {
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    facebook: { type: String, default: '' },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Indexes for better query performance
studentSchema.index({ graduationYear: 1 });
studentSchema.index({ email: 1 });
studentSchema.index({ name: 'text', bio: 'text' });

module.exports = mongoose.model('Student', studentSchema);