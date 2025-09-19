import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen, ArrowRight } from 'lucide-react';

const Home = () => {
  const quickLinks = [
    { to: '/events', icon: Calendar, label: 'Events', color: 'from-blue-500 to-blue-600' },
    { to: '/contact', icon: Users, label: 'Contact', color: 'from-pink-500 to-pink-600' },
    { to: '/resources', icon: BookOpen, label: 'Resources', color: 'from-green-500 to-green-600' },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Orientation Session for New Afghan Students',
      date: '',
      description: 'Welcome session covering academic procedures, hostel information, and support services.',
    },
    {
      id: 2,
      title: 'Cultural Festival ',
      date: '',
      description: 'Celebrating Afghan culture with traditional music, poetry, and cuisine.',
    },
    {
      id: 3,
      title: 'Scholarship Application Deadline',
      date: '',
      description: 'Last date to apply for merit-based scholarships for the upcoming semester.',
    },
  ];

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Nebula Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236, 72, 153, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-green-400 bg-clip-text text-transparent">
                Empowering Afghan Students
              </span>
              <br />
              <span className="text-white">at NUML</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building bridges, fostering community, and supporting academic excellence 
              for Afghan students at the National University of Modern Languages.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/about"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Learn About Us
              </Link>
              <Link
                to="/events"
                className="px-8 py-3 border border-pink-500 rounded-full text-pink-400 font-medium hover:bg-pink-500/10 transition-all duration-300"
              >
                View Events
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="relative z-10 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Access
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need at your fingertips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link
                  to={link.to}
                  className="block p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                    <link.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{link.label}</h3>
                  <ArrowRight className="h-5 w-5 text-pink-400 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Announcements */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Announcements
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated with the latest news and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="text-sm text-pink-400 mb-2">
                  {new Date(announcement.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {announcement.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {announcement.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;