import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';
import qudrat from '../assets/Qurdrat.jpeg';
import bashir from '../assets/bashir.jpeg';
// import sidiqaAmani from '../assets/sidiqaAmani.jpeg';

const About = () => {
  const councilMembers = [
    {
      name: 'Qudrat Rahman Nazari',
      role: 'President',
      image: qudrat,
      bio: 'Leading the council with vision and dedication to student welfare.',
    },
    {
      name: 'Said Hassan Bahader',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Coordinating academic support and community outreach programs for Afghan students.',
    },
    {
      name: 'Easmat',
      role: 'Secretary',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing communications and organizing council activities.',
    },
    {
      name: 'Aziz Ullah Hazrati',
      role: 'Cultural Secretary',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Organizing cultural events and preserving Afghan traditions at NUML.',
    },
    {
      name: 'Abdul Bashir Aryan',
      role: 'Media Coordinator',
      image:bashir,
      bio: 'Managing social media presence and documenting council activities.',
    },
    {
      name: 'Sidiqa Amani',
      role: 'Girl Representative (PhD Scholar)',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Representing female Afghan students and advocating for their academic needs.',
    },
  ];

  const values = [
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong bonds among Afghan students at NUML',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Promoting academic achievement and personal growth',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Developing future leaders and change-makers',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Heart,
      title: 'Support',
      description: 'Providing guidance and assistance to all members',
      color: 'from-purple-500 to-purple-600',
    },
  ];

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
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30, 64, 175, 0.3), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Our Council
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dedicated to supporting Afghan students at NUML through community building, 
              academic assistance, and cultural preservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To create a supportive and inclusive environment for Afghan students at NUML, 
                fostering academic excellence, cultural pride, and personal development while 
                building lasting connections within our community.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the leading student organization that empowers Afghan students to achieve 
                their educational goals, contribute meaningfully to society, and serve as 
                ambassadors of Afghan culture and values.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Members */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-lg">
              Dedicated leaders working for the Afghan student community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {councilMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-pink-400 text-center font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our History</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Established in 2018, the NUML Afghan Student Council was founded by a group 
                of passionate Afghan students who recognized the need for a unified platform 
                to support their community at the National University of Modern Languages.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Over the years, we have grown from a small group of dedicated individuals 
                to a thriving organization that serves hundreds of Afghan students, providing 
                academic support, cultural events, and a sense of home away from home.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;