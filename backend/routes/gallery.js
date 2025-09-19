const express = require('express');
const router = express.Router();

// Mock gallery data - in production, this would come from MongoDB
const galleryItems = [
  {
    id: 1,
    title: 'Cultural Night 2024',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Events',
    date: '2024-10-15',
  },
  {
    id: 2,
    title: 'Academic Workshop',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Workshops',
    date: '2024-09-20',
  },
  // Add more items as needed
];

// GET /api/gallery - Get all gallery items
router.get('/', async (req, res) => {
  try {
    const { category, limit = 20, page = 1 } = req.query;
    
    let filteredItems = galleryItems;
    
    if (category) {
      filteredItems = galleryItems.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = startIndex + parseInt(limit);
    const paginatedItems = filteredItems.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: paginatedItems,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: filteredItems.length,
        totalPages: Math.ceil(filteredItems.length / parseInt(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery items',
      error: error.message,
    });
  }
});

// GET /api/gallery/categories - Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = [...new Set(galleryItems.map(item => item.category))];
    
    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message,
    });
  }
});

module.exports = router;