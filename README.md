# NUML Afghan Student Council Website

A modern, full-stack website for the National University of Modern Languages (NUML) Afghan Student Council, built with React, Node.js, Express, and MongoDB.

## Features

### Frontend
- **Modern React Application** with TypeScript and Vite
- **Responsive Design** with Tailwind CSS
- **Smooth Animations** with Framer Motion
- **Beautiful UI** with nebula gradients and Afghan flag color inspiration
- **Multi-page Architecture** with React Router

### Backend
- **RESTful API** with Node.js and Express
- **MongoDB Database** with Mongoose ODM
- **Input Validation** with Joi
- **Security Features** including CORS, Helmet, and Rate Limiting
- **Modular Architecture** with separate routes and models

## Pages & Features

1. **Home Page**
   - Hero section with nebula gradient background
   - "Empowering Afghan Students at NUML" slogan
   - Quick access links to main sections
   - Recent announcements display

2. **About Us**
   - Mission and vision statements
   - Council member profiles with photos and bios
   - Core values and history of the council

3. **Events & News**
   - Tab-based navigation (Upcoming/Past events)
   - Event cards with registration functionality
   - Detailed event information with location and timing

4. **Resources**
   - Categorized resource sections:
     - Admissions Guide
     - Visa & Legal Information
     - Accommodation
     - Academic Support
     - Student Services
   - Emergency contact information

5. **Graduated Students**
   - Alumni profiles with achievements and portfolios
   - Search functionality by graduation year
   - Contact information and vision statements

6. **Gallery**
   - Photo grid with hover effects
   - Modal image preview
   - Categorized by event types

7. **Contact**
   - Contact form with subject categorization
   - Council contact information
   - Social media links
   - Embedded Google Maps

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Joi for validation
- Helmet for security
- CORS for cross-origin requests
- Rate limiting for API protection

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd numl-afghan-council
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Copy the example environment file
   cp backend/.env.example backend/.env
   
   # Edit the .env file with your configuration
   ```

5. **Start MongoDB**
   - Local: Start your local MongoDB service
   - Atlas: Ensure your connection string is correct in .env

6. **Run the application**
   ```bash
   # Start backend (from backend directory)
   npm run dev
   
   # Start frontend (from root directory)
   npm run dev
   ```

## API Endpoints

### Students
- `GET /api/students` - Get all students
- `GET /api/students/years` - Get graduation years
- `POST /api/students` - Create student profile
- `GET /api/students/:id` - Get specific student

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `POST /api/events/:id/register` - Register for event

### Announcements
- `GET /api/announcements` - Get all announcements
- `POST /api/announcements` - Create announcement
- `GET /api/announcements/:id` - Get specific announcement

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact messages (admin)

### Gallery
- `GET /api/gallery` - Get gallery items
- `GET /api/gallery/categories` - Get categories

## Deployment

### Frontend (Vercel)
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Backend (Render/Heroku)
1. Create a new service
2. Connect your repository
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Get connection string
3. Update MONGODB_URI in environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about this project, contact the NUML Afghan Student Council at council@numl.edu.pk