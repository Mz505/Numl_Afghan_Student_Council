const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  author: {
    type: String,
    required: true,
    default: 'NUML Afghan Student Council',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium',
  },
  category: {
    type: String,
    enum: ['academic', 'administrative', 'social', 'emergency', 'general'],
    default: 'general',
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  expiryDate: {
    type: Date,
    default: null,
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
  }],
  tags: [{
    type: String,
    trim: true,
  }],
}, {
  timestamps: true,
});

// Indexes
announcementSchema.index({ createdAt: -1 });
announcementSchema.index({ priority: 1 });
announcementSchema.index({ category: 1 });
announcementSchema.index({ expiryDate: 1 });

module.exports = mongoose.model('Announcement', announcementSchema);