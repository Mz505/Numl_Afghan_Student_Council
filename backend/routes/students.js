const express = require('express');
const Joi = require('joi');
const Student = require('../models/Student');

const router = express.Router();

// Validation schemas
const studentSchema = Joi.object({
  name: Joi.string().required().trim(),
  email: Joi.string().email().required(),
  graduationYear: Joi.number().integer().min(2000).max(new Date().getFullYear() + 10).required(),
  degree: Joi.string().required().trim(),
  image: Joi.string().uri().allow(''),
  bio: Joi.string().required().max(500),
  achievements: Joi.array().items(Joi.string().trim()),
  portfolio: Joi.string().uri().allow(''),
  vision: Joi.string().required().max(300),
  socialMedia: Joi.object({
    linkedin: Joi.string().uri().allow(''),
    twitter: Joi.string().uri().allow(''),
    facebook: Joi.string().uri().allow(''),
  }),
});

// GET /api/students - Get all students
router.get('/', async (req, res) => {
  try {
    const { year, search, limit = 50, page = 1 } = req.query;
    
    let query = { isPublic: true, isActive: true };
    
    if (year) {
      query.graduationYear = parseInt(year);
    }
    
    if (search) {
      query.$text = { $search: search };
    }
    
    const students = await Student.find(query)
      .sort({ graduationYear: -1, name: 1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .select('-__v');
    
    const total = await Student.countDocuments(query);
    
    res.json({
      success: true,
      data: students,
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
      message: 'Failed to fetch students',
      error: error.message,
    });
  }
});

// GET /api/students/years - Get unique graduation years
router.get('/years', async (req, res) => {
  try {
    const years = await Student.distinct('graduationYear', { isPublic: true, isActive: true });
    years.sort((a, b) => b - a);
    
    res.json({
      success: true,
      data: years,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch graduation years',
      error: error.message,
    });
  }
});

// POST /api/students - Create a new student
router.post('/', async (req, res) => {
  try {
    const { error, value } = studentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.details[0].message,
      });
    }
    
    const student = new Student(value);
    await student.save();
    
    res.status(201).json({
      success: true,
      data: student,
      message: 'Student profile created successfully',
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: 'Student with this email already exists',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to create student profile',
        error: error.message,
      });
    }
  }
});

// GET /api/students/:id - Get specific student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).select('-__v');
    
    if (!student || !student.isPublic || !student.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }
    
    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch student',
      error: error.message,
    });
  }
});

module.exports = router;