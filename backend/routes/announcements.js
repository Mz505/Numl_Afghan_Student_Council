const express = require('express');
const Joi = require('joi');
const Announcement = require('../models/Announcement');

const router = express.Router();

// Validation schema
const announcementSchema = Joi.object({
  title: Joi.string().required().trim(),
  content: Joi.string().required().max(2000),
  author: Joi.string().trim(),
  priority: Joi.string().valid('low', 'medium', 'high', 'urgent'),
  category: Joi.string().valid('academic', 'administrative', 'social', 'emergency', 'general'),
  expiryDate: Joi.date().allow(null),
  tags: Joi.array().items(Joi.string().trim()),
});

// GET /api/announcements - Get all active announcements
router.get('/', async (req, res) => {
  try {
    const { category, priority, limit = 10, page = 1 } = req.query;
    
    let query = { 
      isPublic: true,
      $or: [
        { expiryDate: null },
        { expiryDate: { $gte: new Date() } }
      ]
    };
    
    if (category) {
      query.category = category;
    }
    
    if (priority) {
      query.priority = priority;
    }
    
    const announcements = await Announcement.find(query)
      .sort({ priority: 1, createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .select('-__v');
    
    const total = await Announcement.countDocuments(query);
    
    res.json({
      success: true,
      data: announcements,
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
      message: 'Failed to fetch announcements',
      error: error.message,
    });
  }
});

// POST /api/announcements - Create a new announcement
router.post('/', async (req, res) => {
  try {
    const { error, value } = announcementSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.details[0].message,
      });
    }
    
    const announcement = new Announcement(value);
    await announcement.save();
    
    res.status(201).json({
      success: true,
      data: announcement,
      message: 'Announcement created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create announcement',
      error: error.message,
    });
  }
});

// GET /api/announcements/:id - Get specific announcement
router.get('/:id', async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id).select('-__v');
    
    if (!announcement || !announcement.isPublic) {
      return res.status(404).json({
        success: false,
        message: 'Announcement not found',
      });
    }
    
    res.json({
      success: true,
      data: announcement,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch announcement',
      error: error.message,
    });
  }
});

module.exports = router;