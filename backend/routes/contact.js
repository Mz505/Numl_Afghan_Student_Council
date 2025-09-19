const express = require('express');
const Joi = require('joi');
const Contact = require('../models/Contact');

const router = express.Router();

// Validation schema
const contactSchema = Joi.object({
  name: Joi.string().required().trim(),
  email: Joi.string().email().required(),
  subject: Joi.string().valid('general', 'academic', 'visa', 'accommodation', 'events', 'membership', 'roommate', 'other').required(),
  message: Joi.string().required().max(2000),
});

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.details[0].message,
      });
    }
    
    // Auto-forward logic based on subject
    const teamForwarding = {
      academic: 'Academic Support Team',
      visa: 'Legal Affairs Team',
      accommodation: 'Student Welfare Team', 
      events: 'Events Committee',
      membership: 'Membership Committee',
      roommate: 'Student Welfare Team',
      general: 'General Council',
      other: 'General Council',
    };
    
    const forwardedTo = teamForwarding[value.subject] || 'General Council';
    
    const contactData = {
      ...value,
      forwardedTo,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent'),
    };
    
    const contact = new Contact(contactData);
    await contact.save();
    
    // In production, send email notification to the specific team
    // await sendEmailNotification(contactData, forwardedTo);
    
    res.status(201).json({
      success: true,
      message: `Message sent successfully and forwarded to ${forwardedTo}. We'll get back to you within 24 hours!`,
      data: { id: contact._id, forwardedTo },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message,
    });
  }
});

// GET /api/contact - Get all contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    const { status = 'all', limit = 50, page = 1 } = req.query;
    
    let query = {};
    if (status !== 'all') {
      query.status = status;
    }
    
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .select('-__v');
    
    const total = await Contact.countDocuments(query);
    
    res.json({
      success: true,
      data: contacts,
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
      message: 'Failed to fetch contact messages',
      error: error.message,
    });
  }
});

module.exports = router;