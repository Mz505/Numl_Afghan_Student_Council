import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { createWhatsAppMessage } from '../utils/whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Auto-forward to council team via WhatsApp
    setTimeout(() => {
      try {
        // Create WhatsApp message for council team
        const whatsappMessage = createWhatsAppMessage({
          type: formData.subject as any,
          name: formData.name,
          email: formData.email,
          subject: `Contact Form: ${formData.subject}`,
          details: formData.message,
        });
        
        // Auto-forward to WhatsApp
        const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 130, 246, 0.3), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions or need support? We're here to help our community
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Reach out to us through any of the following channels. We're always ready to assist our fellow Afghan students.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">council@numl.edu.pk</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+92 314 8476338</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">National University of Modern Languages<br />Sector H-9, Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/16VVPAWHk3/?mibextid=wwXIfr"
                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/mashalzirak__01/"
                    className="p-3 bg-pink-600 rounded-full hover:bg-pink-500 transition-colors duration-300"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-blue-400 rounded-full hover:bg-blue-300 transition-colors duration-300"
                  >
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                  <WhatsAppButton
                    message="Hello NUML Afghan Student Council! I'd like to get in touch with you."
                    className="p-3 bg-green-600 rounded-full hover:bg-green-500 transition-colors duration-300"
                  >
                    <MessageCircle className="h-6 w-6 text-white" />
                  </WhatsAppButton>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="academic">Academic Support</option>
                    <option value="visa">Visa & Legal Assistance</option>
                    <option value="accommodation">Accommodation Help</option>
                    <option value="events">Event Information</option>
                    <option value="membership">Council Membership</option>
                    <option value="resources">Resource Request</option>
                    <option value="emergency">Emergency Assistance</option>
                    <option value="roommate">Roommate Finder</option>
                    <option value="noc">NOC Assistance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-pink-500 hover:shadow-lg hover:shadow-blue-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400"
                  >
                    <div className="text-center">
                      ✅ Message sent successfully! 
                      <br />
                      <span className="text-sm">Your inquiry has been forwarded to the relevant council team via WhatsApp.</span>
                    </div>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center"
                  >
                    ❌ Failed to send message. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm text-center mb-4">
                  Prefer instant messaging? Contact us directly:
                </p>
                <WhatsAppButton
                  message="Hello NUML Afghan Student Council! I'd like to get in touch regarding student services."
                  className="w-full"
                >
                  <span>Chat with us on WhatsApp</span>
                </WhatsAppButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Us
            </h2>
            <p className="text-gray-400 text-lg">
              Visit us at the National University of Modern Languages
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-96 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.8967737853677!2d73.0697478!3d33.6459422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sNational%20University%20of%20Modern%20Languages%2C%20Sector%20H-9%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1644589420665!5m2!1sen!2s&q=National+University+of+Modern+Languages+Islamabad&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NUML Location"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;