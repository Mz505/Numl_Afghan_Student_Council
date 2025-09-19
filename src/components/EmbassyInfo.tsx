import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Download, 
  MessageCircle, 
  FileText,
  ExternalLink,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const EmbassyInfo = () => {
  const [showNOCForm, setShowNOCForm] = useState(false);
  const [nocFormData, setNocFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    purpose: '',
    phoneNumber: '',
  });

  const handleNOCDownload = () => {
    // Create a proper Word document for NOC form
    const nocFormHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>NOC Request Form - Afghan Embassy Islamabad</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; margin-bottom: 30px; }
        .section { margin-bottom: 25px; }
        .field { margin-bottom: 15px; }
        .underline { border-bottom: 1px solid #000; display: inline-block; min-width: 200px; }
        .signature-section { margin-top: 40px; }
        .embassy-section { margin-top: 40px; background-color: #f5f5f5; padding: 15px; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px; border: 1px solid #ccc; }
    </style>
</head>
<body>
    <div class="header">
        <h1>NO OBJECTION CERTIFICATE (NOC) REQUEST FORM</h1>
        <h2>AFGHAN EMBASSY ISLAMABAD</h2>
        <p><strong>Official Use Only - Please Fill Completely</strong></p>
    </div>

    <div class="section">
        <h3>PERSONAL INFORMATION</h3>
        <table>
            <tr><td><strong>Full Name:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Father's Name:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Date of Birth:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Passport Number:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Email Address:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Phone Number:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Current Address in Pakistan:</strong></td><td class="underline">&nbsp;</td></tr>
        </table>
    </div>

    <div class="section">
        <h3>ACADEMIC INFORMATION</h3>
        <table>
            <tr><td><strong>University:</strong></td><td>National University of Modern Languages (NUML)</td></tr>
            <tr><td><strong>Student ID Number:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Program/Degree:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Current Semester/Year:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Expected Graduation Date:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>CGPA/Percentage:</strong></td><td class="underline">&nbsp;</td></tr>
        </table>
    </div>

    <div class="section">
        <h3>NOC REQUEST DETAILS</h3>
        <table>
            <tr><td><strong>Purpose of NOC:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Destination Country:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Duration of Travel/Stay:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Sponsoring Organization (if any):</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Additional Details:</strong></td><td class="underline">&nbsp;</td></tr>
        </table>
    </div>

    <div class="section">
        <h3>REQUIRED DOCUMENTS CHECKLIST</h3>
        <p>☐ Completed NOC Form</p>
        <p>☐ Copy of Passport (all pages)</p>
        <p>☐ Copy of Student ID Card</p>
        <p>☐ University Enrollment Letter</p>
        <p>☐ Academic Transcript (latest)</p>
        <p>☐ Passport-size photographs (2 copies)</p>
        <p>☐ Copy of Visa/Residence Permit (if applicable)</p>
    </div>

    <div class="signature-section">
        <h3>DECLARATION</h3>
        <p>I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that providing false information may result in rejection of my application.</p>
        <br><br>
        <table style="border: none;">
            <tr style="border: none;">
                <td style="border: none; width: 50%;"><strong>Applicant's Signature:</strong> ___________________</td>
                <td style="border: none; width: 50%;"><strong>Date:</strong> ___________________</td>
            </tr>
        </table>
    </div>

    <div class="embassy-section">
        <h3>FOR EMBASSY USE ONLY</h3>
        <table>
            <tr><td><strong>Application Received Date:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Processed By:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>NOC Issued Date:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Reference Number:</strong></td><td class="underline">&nbsp;</td></tr>
            <tr><td><strong>Remarks:</strong></td><td class="underline">&nbsp;</td></tr>
        </table>
    </div>

    <div class="section" style="margin-top: 30px;">
        <h3>EMBASSY CONTACT INFORMATION</h3>
        <p><strong>Afghan Embassy Islamabad</strong></p>
        <p>House No. 56, Main Nazimudin Road, F-7/4, Islamabad, Pakistan</p>
        <p>Phone: +92 51-282-4505 / 6 | Fax: +92 51-282-4504</p>
        <p>Email: afghanembassyisb@gmail.com</p>
        <p><strong>Working Hours:</strong> Monday–Thursday: 9:00 AM–4:00 PM (Closed Friday–Sunday)</p>
        <p><strong>Processing Time:</strong> 5-7 business days</p>
    </div>
</body>
</html>`;

    // Create Word document blob
    const blob = new Blob([nocFormHTML], { 
      type: 'application/msword' 
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NOC_Request_Form_Afghan_Embassy.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Show form after download
    setTimeout(() => setShowNOCForm(true), 1000);
  };

  const handleNOCSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email draft for embassy
    const emailSubject = `NOC Request - ${nocFormData.name} (${nocFormData.studentId})`;
    const emailBody = `Dear Afghan Embassy Islamabad,

I hope this email finds you well. I am writing to request a No Objection Certificate (NOC) for the following purpose:

Student Details:
- Name: ${nocFormData.name}
- Email: ${nocFormData.email}
- Student ID: ${nocFormData.studentId}
- Phone: ${nocFormData.phoneNumber}
- Purpose: ${nocFormData.purpose}

I have downloaded and filled the NOC form as per embassy requirements. Please find the completed form attached to this email.

I would be grateful if you could process my request at your earliest convenience. Please let me know if any additional documentation is required.

Required Documents (to be attached):
- Completed NOC form
- Copy of passport
- Student ID card copy
- University enrollment letter

Thank you for your time and assistance.

Best regards,
${nocFormData.name}
NUML Afghan Student Council Member`;

    const mailtoLink = `mailto:afghanembassyisb@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    setShowNOCForm(false);
    setNocFormData({ name: '', email: '', studentId: '', purpose: '', phoneNumber: '' });
  };

  const embassyServices = [
    { name: 'Passport Services', icon: '📘', available: true },
    { name: 'Visa Assistance', icon: '✈️', available: true },
    { name: 'Document Legalization', icon: '📋', available: true },
    { name: 'NOC Issuance', icon: '📄', available: true },
    { name: 'Student Support', icon: '🎓', available: true },
    { name: 'Emergency Services', icon: '🚨', available: true },
  ];

  return (
    <div className="space-y-8">
      {/* Embassy Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30"
      >
        <div className="flex items-center space-x-4 mb-6">
          <Building className="h-10 w-10 text-green-400" />
          <div>
            <h2 className="text-3xl font-bold text-white">Afghan Embassy Islamabad</h2>
            <p className="text-gray-300">Official consular services for Afghan citizens</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300 text-sm">House No. 56, Main Nazimudin Road</p>
                  <p className="text-gray-300 text-sm">F-7/4, Islamabad, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Phone & Fax</p>
                  <p className="text-gray-300 text-sm">Phone: +92 51-282-4505 / 6</p>
                  <p className="text-gray-300 text-sm">Fax: +92 51-282-4504</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-pink-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300 text-sm">afghanembassyisb@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Working Hours</p>
                  <p className="text-gray-300 text-sm">Monday–Thursday: 9:00 AM–4:00 PM</p>
                  <p className="text-red-300 text-sm">Closed: Friday–Sunday</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Available */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Services Available</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {embassyServices.map((service, index) => (
                <div
                  key={service.name}
                  className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <span className="text-lg">{service.icon}</span>
                  <span className="text-gray-300 text-sm">{service.name}</span>
                  {service.available && (
                    <CheckCircle className="h-4 w-4 text-green-400 ml-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* NOC Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="h-8 w-8 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">NOC Application Process</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
              1
            </div>
            <h4 className="text-white font-medium mb-2">Download Form</h4>
            <p className="text-gray-400 text-sm">Download the official NOC form from our secure link</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
              2
            </div>
            <h4 className="text-white font-medium mb-2">Fill & Submit</h4>
            <p className="text-gray-400 text-sm">Complete the form and submit via email to embassy</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
              3
            </div>
            <h4 className="text-white font-medium mb-2">Processing</h4>
            <p className="text-gray-400 text-sm">Embassy will process your request within 5-7 business days</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleNOCDownload}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            <span>Download NOC Form</span>
          </button>
          
          <button
            onClick={() => setShowNOCForm(true)}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 hover:bg-green-500/30 transition-all duration-300"
          >
            <Send className="h-5 w-5" />
            <span>Submit NOC Request</span>
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
            <div>
              <p className="text-yellow-400 font-medium text-sm">Important Note</p>
              <p className="text-gray-300 text-sm">
                Processing time is 5-7 business days. Submit your application well in advance of your required date.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* NOC Form Modal */}
      {showNOCForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setShowNOCForm(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">NOC Request Details</h3>
              <button
                onClick={() => setShowNOCForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleNOCSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={nocFormData.name}
                  onChange={(e) => setNocFormData({...nocFormData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={nocFormData.email}
                  onChange={(e) => setNocFormData({...nocFormData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Student ID</label>
                <input
                  type="text"
                  value={nocFormData.studentId}
                  onChange={(e) => setNocFormData({...nocFormData, studentId: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your NUML student ID"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={nocFormData.phoneNumber}
                  onChange={(e) => setNocFormData({...nocFormData, phoneNumber: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="+92 300 1234567"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Purpose of NOC</label>
                <select
                  value={nocFormData.purpose}
                  onChange={(e) => setNocFormData({...nocFormData, purpose: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-green-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select purpose</option>
                  <option value="Educational purposes">Educational purposes</option>
                  <option value="Employment">Employment</option>
                  <option value="Travel documentation">Travel documentation</option>
                  <option value="Visa application">Visa application</option>
                  <option value="Scholarship application">Scholarship application</option>
                  <option value="Document legalization">Document legalization</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>Send Email to Embassy</span>
              </button>
            </form>
            
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-400 text-sm text-center">
                📧 This will open your email client with a pre-filled message to the Afghan Embassy. 
                <br />Remember to attach the completed NOC form and required documents.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default EmbassyInfo;