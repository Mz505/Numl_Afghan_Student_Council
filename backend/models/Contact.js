const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    enum: ['general', 'academic', 'visa', 'accommodation', 'events', 'membership', 'roommate', 'other'],
  },
  message: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  forwardedTo: {
    type: String,
    default: 'General Council',
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'resolved'],
    default: 'new',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  ipAddress: {
    type: String,
    default: '',
  },
  userAgent: {
    type: String,
    default: '',
  },
  response: {
    message: String,
    respondedBy: String,
    respondedAt: Date,
  },
}, {
  timestamps: true,
});

// Indexes
contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });
contactSchema.index({ email: 1 });

module.exports = mongoose.model('Contact', contactSchema);