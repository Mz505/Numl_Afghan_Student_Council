import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Group_photo from '../assets/group.photo.jpeg';
import spring2 from '../assets/spring 2.JPG';
import embassay from '../assets/Embassey meeting.jpeg';
import meetRector from '../assets/meet up with recotor.jpeg';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'ICECT 2025 - International Conference on Emerging Computing Technologies',
      date: 'November 2025',
      time: 'To be announced',
      location: 'NUML Conference Hall',
      description: 'International Conference featuring latest research in computing and emerging technologies. A platform for academic excellence and research presentation.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
      link: 'https://numl.edu.pk/events/all',
    },
    {
      id: 2,
      title: 'NCCAI-2025 - National Conference on Computing and AI',
      date: 'May 2025',
      time: 'To be announced',
      location: 'NUML Main Campus',
      description: 'National Conference on Computing and Artificial Intelligence with industry experts. Featuring workshops, seminars, and networking opportunities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
      link: 'https://numl.edu.pk/events/all',
    },
    {
      id: 3,
      title: 'Pen, Frame, Stage... Creative Arts Festival',
      date: 'May 2025',
      time: 'To be announced',
      location: 'NUML Arts Center',
      description: 'Annual creative arts and literary festival showcasing student talents in writing, visual arts, and performing arts. A celebration of creativity and expression.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
      link: 'https://numl.edu.pk/events/all',
    },
    {
      id: 4,
      title: 'Afghan Student Orientation Program',
      date: 'September 2025',
      time: 'To be announced',
      location: 'Main Auditorium, NUML',
      description: 'Comprehensive orientation session for new Afghan students covering academic procedures, hostel information, campus facilities, and support services.',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
      link: 'https://numl.edu.pk/events/all',
    },
    {
      id: 5,
      title: 'Afghan Cultural Heritage Festival',
      date: 'To be announced',
      time: 'To be announced',
      location: 'Student Center Hall',
      description: 'Celebrating Afghan culture and heritage with traditional music, poetry, cuisine, and cultural exhibitions. A showcase of rich Afghan traditions.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
      link: 'https://numl.edu.pk/events/all',
    },
    {
      id: 6,
      title: 'NUML Research Symposium',
      date: 'To be announced',
      time: 'To be announced',
      location: 'NUML Research Center',
      description: 'Annual research symposium featuring student and faculty research presentations across various disciplines. Opportunity for academic collaboration.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
      link: 'https://numl.edu.pk/events/all',
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'NUML Graduation Ceremony',
      date: 'August 2024',
      time: 'Afternoon ceremony',
      location: 'NUML Campus Grounds',
      description: 'Annual graduation ceremony celebrating academic achievements of NUML students across all programs and departments.',
      image: Group_photo,
      attendees: 'All Students',
    },
    {
      id: 5,
      title: 'Afghan Cultural Heritage Exhibition',
      date: 'March 2024',
      time: 'Full day event',
      location: 'Ghazali Ground, NUML',
      description: 'A comprehensive exhibition showcasing the rich cultural heritage of Afghanistan with traditional arts, crafts, and performances.',
      image: spring2,
      attendees: 'All Students',
    },
    {
      id: 6,
      title: 'Afghan Embassy Coordination Meeting',
      date: 'March 2024',
      time: 'Afternoon session',
      location: 'Afghan Embassy Islamabad',
      description: 'Strategic coordination meeting discussing student support initiatives, upcoming events, and educational collaboration programs.',
      image: embassay,
      attendees: 'All Students',
    },
    {
      id: 7,
      title: 'NUML Rector Student Forum',
      date: 'November 2021',
      time: 'Morning session',
      location: 'NUML Main Auditorium',
      description: 'Interactive forum with NUML Rector addressing student concerns, academic policies, and institutional development initiatives.',
      image: meetRector,
      attendees: 'All Students',
    },
    {
      id: 8,
      title: 'NUML Cultural Week 2024',
      date: 'March 2024',
      time: 'Multiple sessions',
      location: 'NUML Main Campus',
      description: 'A week-long celebration of diverse cultures including Afghan heritage, featuring traditional performances, exhibitions, and cultural exchange programs.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
    },
    {
      id: 9,
      title: 'Academic Excellence Awards 2024',
      date: 'February 2024',
      time: 'Evening ceremony',
      location: 'Main Auditorium',
      description: 'Annual ceremony recognizing outstanding academic achievements of students across all departments and programs.',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
    },
    {
      id: 10,
      title: 'International Students Welcome Event',
      date: 'January 2024',
      time: 'Afternoon session',
      location: 'Student Center',
      description: 'Networking and orientation event for international students to share experiences, build connections, and learn about campus resources.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
    },
    {
      id: 11,
      title: 'Annual Research Symposium 2023',
      date: 'December 2023',
      time: 'Full day event',
      location: 'NUML Research Center',
      description: 'Students and faculty presented their research projects across various disciplines, showcasing innovative work and academic excellence.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 'All Students',
    }
  ];

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

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
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(5, 150, 105, 0.3), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Events & News
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay connected with our community through exciting events, workshops, and celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-full p-1 border border-gray-700/50">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'upcoming'
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'past'
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${activeTab === 'upcoming'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-500/20 text-gray-400'
                      }`}>
                      {activeTab === 'upcoming' ? 'Upcoming' : 'Past Event'}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className="h-4 w-4 text-pink-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Add link button for upcoming events */}
                  {activeTab === 'upcoming' && event.link && (
                    <div className="pt-4">
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                      >
                        View on NUML Events
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Events;