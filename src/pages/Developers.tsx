import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, Code, Database, Smartphone, Globe, User, MapPin } from 'lucide-react';
import mashalImage from '../assets/Mashalzerak.jpeg';
import khyberImage from '../assets/khyber.jpeg';
import qadeerImage from '../assets/qadeer.jpeg';
import bashirImage from '../assets/bashir.jpeg';
import mz from '../assets/vip/mz.jpeg';

const Developers = () => {
  // Helper function to create Gmail compose URL
  const createGmailLink = (email: string, subject?: string, body?: string) => {
    const params = new URLSearchParams({
      to: email,
      ...(subject && { su: subject }),
      ...(body && { body: body })
    });
    return `https://mail.google.com/mail/?view=cm&fs=1&${params.toString()}`;
  };

  const developers = [
    {
      id: 1,
      name: 'Mashal Zerak',
      role: 'Full-Stack Developer & Co-Founder',
      image: mz,
      bio: 'Full-stack developer with expertise in modern web technologies and team leadership.',
      skills: [
        { name: 'MERN Stack', level: 80 },
        { name: 'ASP.net', level: 78 },
        { name: 'Python', level: 75 },
        { name: 'Databases', level: 80 },
        { name: 'Java', level: 75 }
      ],
      github: 'https://github.com/mz505',
      linkedin: 'https://www.linkedin.com/in/mashal-zerak-b62947257/',
      portfolio: 'https://mashalzerak.netlify.app/',
      email: 'mzerak25@gmail.com'
    },
    {
      id: 2,
      name: 'Khyber Kamawal',
      role: 'Full-Stack Developer & AI Specialist',
      image: khyberImage,
      bio: 'Versatile developer specializing in web/mobile apps, automation, and AI chatbots. Passionate about creating innovative solutions from concept to launch.',
      skills: [
        { name: 'MERN Stack', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'C++', level: 80 },
        { name: 'Python', level: 75 },

      ],
      github: 'https://github.com/khyberkamawal',
      linkedin: 'https://linkedin.com/in/khyberkamawal',
      portfolio: 'https://khyberportfolio.netlify.app',
      email: 'Khyberk460@gmail.com'
    }
    ,
    {
      id: 3,
      name: 'Abdul Bashir Aryan',
      role: 'UI/UX Designer & Co-Founder',
      image: bashirImage,
      bio: 'Creative designer passionate about crafting user-friendly interfaces and engaging digital experiences. Skilled in turning ideas into visually appealing designs.',
      skills: [
        { name: 'Figma', level: 72 },
        { name: 'Adobe XD', level: 82 },
        { name: 'UI/UX Research', level: 75 },
        { name: 'Prototyping', level: 80 }
      ],
      github: 'https://github.com/qadeershinwari',
      linkedin: 'https://linkedin.com/in/qadeershinwari',
      portfolio: 'https://qadeershinwari.dev',
      email: 'qadeer@hopepath.tech'
    }
    ,
    {
      id: 3,
      name: 'Abdul Qadeer Shinwari',
      role: 'Network Specialist & Co-Founder',
      image: qadeerImage,
      bio: 'Certified MCSE and CCNA specialist with expertise in network design, system administration, and security. Focused on building reliable, scalable, and secure infrastructures.',
      skills: [
        { name: 'Network Administration', level: 80 },
        { name: 'MCSE', level: 75 },
        { name: 'CCNA', level: 77 },
        { name: 'System Security', level: 70 }
      ],
      github: 'https://github.com/qadeershinwari',
      linkedin: 'https://linkedin.com/in/qadeershinwari',
      portfolio: 'https://qadeershinwari.dev',
      email: 'qadeer@hopepath.tech'
    }

  ];

  const hopePathInfo = {
    name: 'HopePath',
    tagline: 'Innovative Tech Solutions',
    description: 'HopePath is a cutting-edge technology organization dedicated to creating innovative solutions that bridge the gap between ideas and reality. We specialize in web development, mobile applications, and digital transformation.',
    mission: 'To provide hope through technology by creating digital solutions that empower communities and drive positive change.',
    services: [
      'Custom Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'Digital Consulting',
      'System Integration',
      'Cloud Solutions'
    ],
    socialMedia: {
      github: null,
      linkedin: null,
      twitter: null,
      instagram: null,
      facebook: 'https://www.facebook.com/people/Hopepath-Technology/',
      website: 'https://hopepath.netlify.app'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative pt-16">
      {/* Crimson Depth */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Developers</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The brilliant minds behind our innovative solutions. Our team combines technical expertise
            with creative vision to build the future of technology.
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At HopePath, we envision a future where technology bridges gaps and creates opportunities for everyone.
              Our mission is to develop innovative solutions that empower communities, foster growth, and make
              technology accessible to all. We believe in the power of code to transform lives and build a
              better tomorrow for the next generation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        className="relative z-10 py-16 bg-gray-900/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {hopePathInfo.mission}
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={itemVariants}>
            {hopePathInfo.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-transparent backdrop-blur-sm border border-gray-700/30 p-6 rounded-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:border-pink-500/50"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  animation: 'glow 2s ease-in-out infinite alternate'
                }}
              >
                <div className="flex items-center mb-3">
                  <Code className="text-pink-400 mr-3" size={24} />
                  <h3 className="font-semibold text-white">{service}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="relative z-10 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300">
              The talented individuals behind HopePath's success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {developers.map((developer, index) => (
              <motion.div
                key={developer.id}
                className="bg-transparent backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 hover:border-pink-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <div className="relative flex justify-center pt-6">
                  <div className="relative">
                    <img
                      src={developer.image}
                      alt={developer.name}
                      className="w-32 h-32 object-cover rounded-full border-4 border-pink-500/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {developer.name}
                  </h3>
                  <p className="text-pink-400 font-medium mb-3">
                    {developer.role}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {developer.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-300 mb-2">Technical Skills</h4>
                    {developer.skills.map((skill, index) => (
                      <div key={index} className="mb-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-pink-500 to-blue-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-3 pt-3 border-t border-gray-700">
                    <motion.a
                      href={createGmailLink(developer.email)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gradient-to-r from-pink-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Email"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-pink-500 text-pink-400 rounded-lg hover:bg-pink-500/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-gray-500 text-gray-400 rounded-lg hover:bg-gray-500/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={developer.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Portfolio"
                    >
                      <User className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media & Contact Section */}
      <motion.section
        className="relative z-10 py-16 bg-gray-900/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-bold mb-8 text-white" variants={itemVariants}>
            Connect with HopePath
          </motion.h2>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            variants={itemVariants}
          >
            <a
              href={hopePathInfo.socialMedia.github}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-3 rounded-full hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href={hopePathInfo.socialMedia.linkedin}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-3 rounded-full hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={hopePathInfo.socialMedia.website}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-3 rounded-full hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={24} />
            </a>
            <a
              href={createGmailLink("contact@hopepath.tech")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-3 rounded-full hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Get In Touch
            </h3>
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-400" />
                  <a
                    href={createGmailLink("hopepathtechnology@gmail.com")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    hopepathtechnology@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">E11/2 Markaz</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <ExternalLink className="w-5 h-5 text-green-400" />
                  <a
                    href="https://hopepath.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    hopepath.netlify.app
                  </a>
                </div>
              </div>
              <p className="text-gray-300 pt-4 border-t border-gray-700">
                Ready to work with us? We'd love to hear from you!
              </p>
            </div>
          </motion.div>

          <motion.p className="text-lg mt-8" variants={itemVariants}>
            Ready to bring your ideas to life? Let's collaborate!
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default Developers;
