const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    enum: ['academic', 'cultural', 'social', 'workshop', 'ceremony', 'sports', 'other'],
    default: 'other',
  },
  maxAttendees: {
    type: Number,
    default: null,
  },
  registeredAttendees: [{
    name: String,
    email: String,
    registrationDate: { type: Date, default: Date.now },
  }],
  isPublic: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming',
  },
  organizer: {
    type: String,
    default: 'NUML Afghan Student Council',
  },
}, {
  timestamps: true,
});

// Indexes
eventSchema.index({ date: 1 });
eventSchema.index({ status: 1 });
eventSchema.index({ category: 1 });

module.exports = mongoose.model('Event', eventSchema);