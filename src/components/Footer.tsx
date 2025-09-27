import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-pink-400">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">council@numl.edu.pk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+92 314 8476338</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">NUML, Sector H-9, Islamabad</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-pink-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="/Resources" className="block text-sm hover:text-blue-400 transition-colors">
                Student Resources
              </a>
              <a href="/Events" className="block text-sm hover:text-blue-400 transition-colors">
                Upcoming Events
              </a>
              <a href="/GraduatedStudents" className="block text-sm hover:text-blue-400 transition-colors">
                Alumni Network
              </a>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-pink-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16VVPAWHk3/?mibextid=wwXIfr"

                className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mashalzirak__01/"
                className="p-2 bg-pink-600 rounded-full hover:bg-pink-500 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-400 rounded-full hover:bg-blue-300 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400">
            © 2025 NUML Afghan Student Council. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;