const express = require('express');
const Joi = require('joi');
const Event = require('../models/Event');

const router = express.Router();

// Validation schema
const eventSchema = Joi.object({
  title: Joi.string().required().trim(),
  description: Joi.string().required().max(1000),
  date: Joi.date().required(),
  time: Joi.string().required(),
  location: Joi.string().required().trim(),
  image: Joi.string().uri().allow(''),
  category: Joi.string().valid('academic', 'cultural', 'social', 'workshop', 'ceremony', 'sports', 'other'),
  maxAttendees: Joi.number().positive().allow(null),
});

// GET /api/events - Get all events
router.get('/', async (req, res) => {
  try {
    const { status = 'all', category, limit = 20, page = 1 } = req.query;
    
    let query = { isPublic: true };
    
    if (status !== 'all') {
      if (status === 'upcoming') {
        query.date = { $gte: new Date() };
      } else if (status === 'past') {
        query.date = { $lt: new Date() };
      } else {
        query.status = status;
      }
    }
    
    if (category) {
      query.category = category;
    }
    
    const events = await Event.find(query)
      .sort({ date: status === 'past' ? -1 : 1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .select('-__v');
    
    const total = await Event.countDocuments(query);
    
    res.json({
      success: true,
      data: events,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch events',
      error: error.message,
    });
  }
});

// POST /api/events - Create a new event
router.post('/', async (req, res) => {
  try {
    const { error, value } = eventSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.details[0].message,
      });
    }
    
    const event = new Event(value);
    await event.save();
    
    res.status(201).json({
      success: true,
      data: event,
      message: 'Event created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create event',
      error: error.message,
    });
  }
});

// POST /api/events/:id/register - Register for an event
router.post('/:id/register', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required',
      });
    }
    
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    
    // Check if already registered
    const existingRegistration = event.registeredAttendees.find(
      attendee => attendee.email === email
    );
    
    if (existingRegistration) {
      return res.status(400).json({
        success: false,
        message: 'Already registered for this event',
      });
    }
    
    // Check if event is full
    if (event.maxAttendees && event.registeredAttendees.length >= event.maxAttendees) {
      return res.status(400).json({
        success: false,
        message: 'Event is full',
      });
    }
    
    event.registeredAttendees.push({ name, email });
    await event.save();
    
    res.json({
      success: true,
      message: 'Successfully registered for the event',
      data: { attendeeCount: event.registeredAttendees.length },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to register for event',
      error: error.message,
    });
  }
});

module.exports = router;