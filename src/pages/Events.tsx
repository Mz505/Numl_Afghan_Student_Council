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
      title: 'ICECT 2025 - International Conference',
      date: '2025-11-13',
      time: '2:00 PM',
      location: 'NUML Conference Hall',
      description: 'International Conference on Emerging Computing Technologies. Afghan students are encouraged to participate and present research.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 150,
    },
    {
      id: 2,
      title: 'NCCAI-2025 - AI Conference',
      date: '2025-05-20',
      time: '6:00 PM',
      location: 'NUML Main Campus',
      description: 'National Conference on Computing and Artificial Intelligence. Great opportunity for Afghan CS students to showcase projects.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 300,
    },
    {
      id: 3,
      title: 'Pen, Frame, Stage 2025',
      date: '2025-05-06',
      time: '3:00 PM',
      location: 'NUML Arts Center',
      description: 'Creative arts festival featuring writing, photography, and theatrical performances. Afghan students can showcase their cultural talents.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 80,
    },
    {
      id: 4,
      title: 'Afghan Student Orientation',
      date: '2025-09-15',
      time: '10:00 AM',
      location: 'Main Auditorium, NUML',
      description: 'Annual orientation session for new Afghan students covering academic procedures, hostel information, and support services.',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 200,
    },
    {
      id: 5,
      title: 'Cultural Exhibition',
      date: 'Will be shared ',
      time: 'undefined yet',
      location: 'Student Center Hall',
      description: 'Celebrating Nowruz and Afghan culture with traditional music, poetry, and cuisine. Join us for an evening of cultural appreciation.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      attendees: 250,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Graduation ceremony',
      date: '2025-08-21',
      time: '4:00 PM',
      location: 'Campus Grounds',
      description: 'Graduation Ceremony of Student at NUML of year 2023,2024,2025 only Afghan students.',
      image: Group_photo,
      attendees: 250,
    },
    {
      id: 5,
      title: 'Culture Exhibition',
      date: '2025-03-20',
      time: '10:00 AM',
      location: 'Ghazali Ground',
      description: 'A Rich Afghan Culture Exhibition',
      image: spring2,
      attendees: "17000 students + Guest",
    },
    , {
      id: 6,
      title: 'Meeting Ambassador',
      date: '2025-03-10',
      time: '2:00 PM',
      location: 'Afghan Embassy Islamabad',
      description: 'Discussion of upcoming events and financial support.',
      image: embassay,
      attendees: "Afghan council Members",
    },
    {
      id: 7,
      title: 'Meeting With NUML Rector',
      date: '2021-11-20',
      time: '10:00 AM',
      location: 'NUML Auditorium',
      description: 'Discussion of issues ',
      image: meetRector,
      attendees: "All Afghan students",
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

                  {activeTab === 'upcoming' && (
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                      Register Now
                    </button>
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