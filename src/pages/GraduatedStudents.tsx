import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Mail, Calendar, Award } from 'lucide-react';
import mashal from '../assets/Mashalzerak.jpeg';
import bashir from '../assets/bashir.jpeg';
import khyber from '../assets/khyber2.jpg';
import osama from '../assets/osama.jpeg';
import sher from '../assets/gr sher.jpg';
import husain from '../assets/gr hussain.jpg';
import qadeer from '../assets/qadeer.jpeg';
import subhan from '../assets/gr subhan.jpg';
import majid from '../assets/gr majid.jpg';
import nasrat from '../assets/gr_nasrat.jpg';

const GraduatedStudents = () => {
  const [searchYear, setSearchYear] = useState('');
  
  const graduatedStudents = [
    {
      id: 1,
      name: 'Mashal Zerak',
      graduationYear: 2025,
      degree: 'BS Computer Science ',
      image: mashal,
      bio: 'Currently working as a Full Stack Web developer.',
      achievements: ['Dean\'s List', 'Tech Quiz winning Award', 'Leadership Excellence in Event Management'],
      portfolio: 'https://68ba969fb0ec0e5b98607983--portfoliomz505.netlify.app/',
      email: 'mzerak25@gmail.com',
      vision: 'To use technology to create opportunities, solve real problems, and make a positive impact on people’s lives.',
    },
    {
      id: 2,
      name: 'Khyber Kamawal',
      graduationYear: 2025,
      degree: 'Bachelor of Computer Science',
      image: khyber,
      bio: 'full stack developer.',
      achievements: ['Best tech solution award', 'Best Final Year Project', 'Tech Innovation Award'],
      portfolio: 'https://khyberportfolio.netlify.app/',
      email: 'khyberk460@gmail.com',
      vision: 'To develop technology solutions that can help rebuild and modernize Afghanistan.',
    },
    {
      id: 3,
      name: 'Abdul Qadeer Shinwari',
      graduationYear: 202,
      degree: 'BS Computer Science ',
      image: qadeer,
      bio: 'Currently work as IT Technician at Akramzada international.',
      achievements: ['Research Excellence Award','Outstanding Graduate'],
      portfolio: '',
      email: 'aqsafghan@gmail.com',
      vision: 'To bring technology to Afghanistan and help solve its challenges.',
    },
    {
      id: 4,
      name: 'Abdul Bashir Aryan',
      graduationYear: 2025,
      degree: 'Bachelor of Software Engineering',
      image: bashir,
      bio: 'Currently handling the HopePath tech solution org',
      achievements: ['Media Excellence Award', 'Best Documentary', 'Student Journalist of the Year'],
      portfolio: null,
      email: null,
      vision: 'To use his software development skill and create innovative tech solution to help Afghanistan.',
    },
    {
      id: 5,
      name: 'Osama Lalzai',
      graduationYear: 2024,
      degree: 'BBA',
      image: osama,
      bio: 'Educational consultant and founder of an online learning platform for Afghan students.',
      achievements: ['Teaching Excellence Award', 'Innovation in Education', 'Community Impact Award'],
      portfolio: null,
      email: null,
      vision: 'To make quality education accessible to all Afghan children.',
    },

    {
      id: 6,
      name: 'Subhanullah Danish',
      graduationYear: 2024,
      degree: 'Bachelor of Computer Science ',
      image: subhan,
      bio: 'working as freelancer doing projects online',
      achievements: ['Engineering Excellence', 'Best Final Year Project', 'Leadership Award'],
      portfolio: null,
      email: null,
      vision: 'To contribute to the building of Afghanistan\'s Tech infrastructure.',
    },
    {
      id: 7,
      name: ' Sheer Mohammad Poya',
      graduationYear: 2025,
      degree: 'Bachelor of Software engineering ',
      image: sher,
      bio: 'working as freelancer doing projects online',
      achievements: ['Engineering Excellence', 'Best Final Year Project', 'Leadership Award'],
      portfolio: null,
      email: null,
      vision: 'To contribute to the building of Afghanistan\'s Tech infrastructure.',
    },
    {
      id: 8,
      name: ' Husain Rezazada',
      graduationYear: 2025,
      degree: 'Bachelor of Software engineering ',
      image: husain,
      bio: 'working as freelancer doing projects online',
      achievements: ['Engineering Excellence', 'Best Final Year Project', 'Leadership Award'],
      portfolio: null,
      email: null,
      vision: 'To contribute to the building of Afghanistan\'s Tech infrastructure.',
    },
    {
      id: 7,
      name: ' Nasrat',
      graduationYear: 2025,
      degree: 'Bachelor of Software engineering ',
      image: nasrat,
      bio: 'working as freelancer doing projects online',
      achievements: ['Engineering Excellence', 'Best Final Year Project', 'Leadership Award'],
      portfolio: null,
      email: null,
      vision: 'To contribute to the building of Afghanistan\'s Tech infrastructure.',
    },
        {
      id: 5,
      name: 'Majid Tareen',
      graduationYear: 2024,
      degree: 'BS psychology',
      image: majid,
      bio: 'Educational consultant  for Afghan students.',
      achievements: ['Teaching Excellence Award', 'Innovation in Education', 'Community Impact Award'],
      portfolio: null,
      email: null,
      vision: 'To make quality education accessible to all Afghan children.',
    },
    
  ];

  const years = [...new Set(graduatedStudents.map(student => student.graduationYear))].sort((a, b) => b - a);
  
  const filteredStudents = searchYear 
    ? graduatedStudents.filter(student => student.graduationYear.toString() === searchYear)
    : graduatedStudents;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-16"
    >
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.3), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Graduated Students
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Celebrating the achievements of our alumni making a difference worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={searchYear}
                onChange={(e) => setSearchYear(e.target.value)}
                className="pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white focus:border-green-500 focus:outline-none transition-all duration-300"
              >
                <option value="">All Graduation Years</option>
                {years.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="text-gray-400">
              Showing {filteredStudents.length} of {graduatedStudents.length} students
            </div>
          </motion.div>
        </div>
      </section>

      {/* Students Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={searchYear} // Re-trigger animation when filter changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudents.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-64 object-cover object-top"
                />
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{student.name}</h3>
                    <div className="flex items-center space-x-1 text-green-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{student.graduationYear}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-400 font-medium text-sm">{student.degree}</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{student.bio}</p>
                  
                  <div className="space-y-2">
                    <p className="text-white font-medium text-sm">Vision:</p>
                    <p className="text-gray-400 text-sm leading-relaxed italic">
                      "{student.vision}"
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-white font-medium text-sm flex items-center">
                      <Award className="h-4 w-4 mr-2 text-yellow-400" />
                      Achievements:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {student.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <a
                      href={`mailto:${student.email}`}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">Contact</span>
                    </a>
                    <a
                      href={student.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Portfolio</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default GraduatedStudents;