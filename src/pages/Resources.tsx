import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import { 
  BookOpen, 
  FileText, 
  Home, 
  ExternalLink, 
  GraduationCap, 
  HelpCircle,
  Calendar,
  Clock,
  MapPin,
  Users,
  AlertCircle,
  Shield,
  Heart,
  Briefcase,
  CreditCard,
  Globe,
  Phone,
  Mail,
  Download,
  MessageCircle,
  Building,
  Stethoscope,
  Brain,
  UserCheck,
  FileCheck,
  Search,
  Send,
  X
} from 'lucide-react';

const Resources = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNOCForm, setShowNOCForm] = useState(false);
  const [nocFormData, setNocFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    purpose: '',
  });

  // Fetch upcoming events from NUML
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Real NUML events with actual dates
        const realEvents = [
          {
            id: 'icect2025',
            title: 'ICECT 2025 - International Conference on Emerging Computing Technologies',
            date: '2025-11-13',
            description: 'International Conference featuring latest research in computing and emerging technologies',
            link: 'https://numl.edu.pk/events',
            isHighlighted: true,
            venue: 'NUML Main Campus',
          },
          {
            id: 'nccai2025',
            title: 'NCCAI-2025 - National Conference on Computing and AI',
            date: '2025-05-20',
            description: 'National Conference on Computing and Artificial Intelligence with industry experts',
            link: 'https://numl.edu.pk/events',
            isHighlighted: true,
            venue: 'NUML Conference Hall',
          },
          {
            id: 'penframestage',
            title: 'Pen, Frame, Stage... Creative Arts Festival',
            date: '2025-05-06',
            description: 'Annual creative arts and literary festival showcasing student talents in writing, visual arts, and performing arts',
            link: 'https://numl.edu.pk/events',
            isHighlighted: true,
            venue: 'NUML Arts Center',
          },
        ];
        
        setUpcomingEvents(realEvents);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleNOCSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with NOC request details
    const whatsappMessage = `NOC Request from NUML Afghan Student Council
    
Name: ${nocFormData.name}
Email: ${nocFormData.email}
Student ID: ${nocFormData.studentId}
Purpose: ${nocFormData.purpose}

Please process my NOC request. I have downloaded and filled the NOC form as per embassy requirements.

Required Documents:
- Completed NOC form
- Copy of passport
- Student ID card copy
- University enrollment letter

Thank you for your assistance.`;

    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setShowNOCForm(false);
    setNocFormData({ name: '', email: '', studentId: '', purpose: '' });
  };

  const annualEvents = [
    {
      title: 'Culture Festival',
      description: 'Annual celebration of Afghan culture with traditional music, poetry, and cuisine',
      timing: 'Annual Event (Usually March)',
      registration: 'No registration required',
      icon: '🎭',
      whatsappContact: true,
    },
    {
      title: 'Spring Festival',
      description: 'Welcoming spring with outdoor activities, sports, and community gatherings',
      timing: 'Annual Event (March-April)',
      registration: 'No registration required',
      icon: '🌸',
      whatsappContact: true,
    },
    {
      title: 'Orientation for New Afghan Students',
      description: 'Welcome session covering academic procedures, hostel information, and support services',
      timing: 'September (Date TBD)',
      registration: 'Open registration',
      icon: '🎓',
      whatsappContact: true,
    },
  ];

  const resourceCategories = [
    {
      title: 'Admissions Guide',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      resources: [
        { 
          name: 'NUML Eligibility Criteria', 
          link: 'https://numl.edu.pk/admissions', 
          description: 'Complete department-wise admission requirements and criteria',
          isExternal: true,
        },
        { 
          name: 'Application Deadlines (Live Updates)', 
          link: 'https://numl.edu.pk/admissions', 
          description: 'Current deadlines - Extended to August 18, 2025 for Fall semester',
          isExternal: true,
          badge: 'Extended',
        },
        { 
          name: 'Fee Structure 2025', 
          link: 'https://numl.edu.pk/admissions', 
          description: 'Updated tuition and fee breakdown by program for 2025',
          isExternal: true,
        },
        { 
          name: 'Scholarship Opportunities', 
          link: 'https://hec.gov.pk/english/scholarshipsgrants/Pages/default.aspx', 
          description: 'HEC need-based, Merit, Pakistan Bait-ul-Maal, differently-abled scholarships',
          isExternal: true,
        },
      ],
    },
    {
      title: 'Visa & Legal Information',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      resources: [
        { 
          name: 'Student Visa Guidelines', 
          link: 'https://www.mofa.gov.pk/visa-information/', 
          description: 'Apply at least 2 months before visa expiry - complete process guide',
          isExternal: true,
          badge: 'Important',
        },
        { 
          name: 'Afghan Embassy Services', 
          link: '#embassy-info', 
          description: 'Complete embassy information, NOC forms, and contact details',
          isExternal: false,
          badge: 'Updated',
        },
        { 
          name: 'Legal Aid & Counseling', 
          link: 'https://numl.edu.pk/', 
          description: 'NUML Student Affairs and Counseling services for legal guidance',
          isExternal: true,
        },
        { 
          name: 'Document Verification', 
          link: 'https://numl.edu.pk/admissions', 
          description: 'Required documents and verification procedures',
          isExternal: true,
        },
      ],
    },
    {
      title: 'Accommodation',
      icon: Home,
      color: 'from-pink-500 to-pink-600',
      resources: [
        { 
          name: 'NUML Hostel Information', 
          link: 'https://numl.edu.pk/facilities', 
          description: 'On-campus accommodation details, facilities, and application process',
          isExternal: true,
        },
        { 
          name: 'Off-Campus Housing Near NUML', 
          link: '#housing-listings', 
          description: 'Verified rental options and shared accommodations near campus',
          isExternal: false,
        },
        { 
          name: 'Islamabad Safety Guidelines', 
          link: '#safety-guide', 
          description: 'Essential safety tips and emergency contacts for international students',
          isExternal: false,
        },
        { 
          name: 'Roommate Finder', 
          link: '#roommate-finder', 
          description: 'Connect with potential Afghan student roommates via WhatsApp',
          isExternal: false,
          badge: 'WhatsApp',
        },
      ],
    },
    {
      title: 'Academic Support',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      resources: [
        { 
          name: 'NUML Library Resources', 
          link: 'https://numl.edu.pk/facilities', 
          description: 'Digital and physical library access, research databases',
          isExternal: true,
        },
        { 
          name: 'Tutoring & Academic Support', 
          link: 'https://numl.edu.pk/', 
          description: 'Peer tutoring services and academic assistance programs',
          isExternal: true,
        },
        { 
          name: 'Research Guidelines (ORIC)', 
          link: 'https://numl.edu.pk/', 
          description: 'Office of Research, Innovation & Commercialization guidelines',
          isExternal: true,
        },
        { 
          name: 'Language Learning Support', 
          link: 'https://numl.edu.pk/', 
          description: 'Urdu & English language departments and learning resources',
          isExternal: true,
        },
      ],
    },
    {
      title: 'Student Services',
      icon: HelpCircle,
      color: 'from-cyan-500 to-cyan-600',
      resources: [
        { 
          name: 'Medical Inspection Room', 
          link: '#medical-services', 
          description: 'First aid, basic medication, ambulance service, health awareness',
          isExternal: false,
          badge: 'On Campus',
        },
        { 
          name: 'Psychological Counselling Center', 
          link: '#pcc-services', 
          description: 'Free counseling, assessment, group therapy - Mon-Fri 8:15 AM-1:00 PM',
          isExternal: false,
          badge: 'Free Service',
        },
        { 
          name: 'Career Services (Placement)', 
          link: 'https://numl.edu.pk/', 
          description: 'Job placement assistance and career guidance through ITCON',
          isExternal: true,
        },
        { 
          name: 'Student ID & Services', 
          link: 'https://numl.edu.pk/', 
          description: 'Student ID application, university services, and benefits',
          isExternal: true,
        },
      ],
    },
  ];

  const handleWhatsAppContact = (subject: string) => {
    const message = `Hello NUML Afghan Student Council,

I need assistance with: ${subject}

Please provide guidance or connect me with the relevant team.

Thank you!`;
    
    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168, 85, 247, 0.3), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Student Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to succeed at NUML - from admissions to graduation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Afghan Embassy Information */}
      <section id="embassy-info" className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Afghan Embassy Islamabad
            </h2>
            <p className="text-gray-400 text-lg">
              Complete embassy services and NOC processing for Afghan students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Embassy Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Building className="h-8 w-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Embassy Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300 text-sm">House No. 56, Main Nazimudin Road, F-7/4, Islamabad</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Contact</p>
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
                    <p className="text-gray-300 text-sm">Closed: Friday–Sunday</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NOC Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30"
            >
              <div className="flex items-center space-x-3 mb-6">
                <FileCheck className="h-8 w-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">NOC Services</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Get your No Objection Certificate (NOC) for various purposes including education, employment, and travel.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Passport services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Visa assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Document legalization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Student support & NOC issuance</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => {
                    // Create a PDF NOC form
                    const pdf = new jsPDF();
                    
                    // Set font and title
                    pdf.setFontSize(16);
                    pdf.setFont('helvetica', 'bold');
                    pdf.text('NOC REQUEST FORM', 105, 20, { align: 'center' });
                    pdf.text('AFGHAN EMBASSY ISLAMABAD', 105, 30, { align: 'center' });
                    
                    // Reset font for content
                    pdf.setFontSize(12);
                    pdf.setFont('helvetica', 'normal');
                    
                    let yPosition = 50;
                    const lineHeight = 8;
                    const sectionSpacing = 15;
                    
                    // Personal Information Section
                    pdf.setFont('helvetica', 'bold');
                    pdf.text('PERSONAL INFORMATION:', 20, yPosition);
                    yPosition += sectionSpacing;
                    
                    pdf.setFont('helvetica', 'normal');
                    const personalFields = [
                      'Full Name: ________________________________',
                      'Father\'s Name: ____________________________',
                      'Date of Birth: ____________________________',
                      'Passport Number: __________________________',
                      'Email: ____________________________________',
                      'Phone Number: _____________________________'
                    ];
                    
                    personalFields.forEach(field => {
                      pdf.text(field, 20, yPosition);
                      yPosition += lineHeight;
                    });
                    
                    yPosition += 10;
                    
                    // Academic Information Section
                    pdf.setFont('helvetica', 'bold');
                    pdf.text('ACADEMIC INFORMATION:', 20, yPosition);
                    yPosition += sectionSpacing;
                    
                    pdf.setFont('helvetica', 'normal');
                    pdf.text('University: National University of Modern Languages (NUML)', 20, yPosition);
                    yPosition += lineHeight;
                    
                    const academicFields = [
                      'Student ID: _______________________________',
                      'Program/Degree: ___________________________',
                      'Current Semester/Year: ____________________',
                      'Expected Graduation: ______________________'
                    ];
                    
                    academicFields.forEach(field => {
                      pdf.text(field, 20, yPosition);
                      yPosition += lineHeight;
                    });
                    
                    yPosition += 10;
                    
                    // NOC Request Details Section
                    pdf.setFont('helvetica', 'bold');
                    pdf.text('NOC REQUEST DETAILS:', 20, yPosition);
                    yPosition += sectionSpacing;
                    
                    pdf.setFont('helvetica', 'normal');
                    const nocFields = [
                      'Purpose of NOC: ___________________________',
                      'Destination Country: ______________________',
                      'Duration: _________________________________',
                      'Additional Details: _______________________',
                      '___________________________________________'
                    ];
                    
                    nocFields.forEach(field => {
                      pdf.text(field, 20, yPosition);
                      yPosition += lineHeight;
                    });
                    
                    yPosition += 15;
                    
                    // Declaration Section
                    pdf.setFont('helvetica', 'bold');
                    pdf.text('DECLARATION:', 20, yPosition);
                    yPosition += sectionSpacing;
                    
                    pdf.setFont('helvetica', 'normal');
                    const declarationText = 'I hereby declare that the information provided above is true and correct to the best of my knowledge.';
                    const splitDeclaration = pdf.splitTextToSize(declarationText, 170);
                    pdf.text(splitDeclaration, 20, yPosition);
                    yPosition += splitDeclaration.length * lineHeight + 15;
                    
                    pdf.text('Signature: ____________________________    Date: ________________', 20, yPosition);
                    yPosition += 20;
                    
                    // Embassy Use Section
                    pdf.setFont('helvetica', 'bold');
                    pdf.text('FOR EMBASSY USE ONLY:', 20, yPosition);
                    yPosition += sectionSpacing;
                    
                    pdf.setFont('helvetica', 'normal');
                    const embassyFields = [
                      'Application Received: _____________________',
                      'Processed By: _____________________________',
                      'NOC Issued Date: __________________________',
                      'Reference Number: _________________________'
                    ];
                    
                    embassyFields.forEach(field => {
                      pdf.text(field, 20, yPosition);
                      yPosition += lineHeight;
                    });
                    
                    // Add new page if needed for contact information
                    if (yPosition > 250) {
                      pdf.addPage();
                      yPosition = 30;
                    } else {
                      yPosition += 15;
                    }
                    
                    // Contact Information Section
                    pdf.setFont('helvetica', 'bold');
                    pdf.text('CONTACT INFORMATION:', 20, yPosition);
                    yPosition += sectionSpacing;
                    
                    pdf.setFont('helvetica', 'normal');
                    const contactInfo = [
                      'Afghan Embassy Islamabad',
                      'House No. 56, Main Nazimudin Road, F-7/4, Islamabad',
                      'Phone: +92 51-282-4505/6',
                      'Email: afghanembassyisb@gmail.com'
                    ];
                    
                    contactInfo.forEach(info => {
                      pdf.text(info, 20, yPosition);
                      yPosition += lineHeight;
                    });
                    
                    // Save the PDF
                    pdf.save('NOC_Form_Afghan_Embassy.pdf');
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 hover:bg-green-500/30 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                  <span>Download NOC Form</span>
                </button>
                
                <button
                  onClick={() => setShowNOCForm(true)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Submit NOC Request</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NUML Health & Counseling Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Health & Counseling Services
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive support for your physical and mental well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Psychological Counselling Center */}
            <motion.div
              id="pcc-services"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Psychological Counselling Center</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-300">Free psychological counseling and mental health support</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">Monday–Friday: 8:15 AM–1:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">+92-51-9265100 ext 2057</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">counsellor@numl.edu.pk</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-purple-500/20 rounded-lg p-2 text-center text-purple-300">
                    Individual Counseling
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-2 text-center text-purple-300">
                    Group Therapy
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-2 text-center text-purple-300">
                    Assessment Services
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-2 text-center text-purple-300">
                    Crisis Support
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppContact('Psychological Counseling Appointment')}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 hover:bg-purple-500/30 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Book Appointment via WhatsApp</span>
                </button>
              </div>
            </motion.div>

            {/* Medical Inspection Room */}
            <motion.div
              id="medical-services"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Stethoscope className="h-8 w-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">Medical Inspection Room</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-300">Comprehensive health services for all students</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300 text-sm">+92-51-9265100 (Medical Room)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-red-400" />
                    <span className="text-gray-300 text-sm">Monday–Friday: 8:00 AM–5:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-red-500/20 rounded-lg p-2 text-center text-red-300">
                    First Aid
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-2 text-center text-red-300">
                    Basic Medication
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-2 text-center text-red-300">
                    Ambulance Service
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-2 text-center text-red-300">
                    Health Awareness
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppContact('Medical Emergency or Health Services')}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact Medical Services</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated with council events and NUML activities
            </p>
          </motion.div>

          {/* Annual Council Events */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Council Annual Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {annualEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{event.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.timing}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-400">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.registration}</span>
                    </div>
                  </div>
                  
                  {event.whatsappContact && (
                    <button
                      onClick={() => handleWhatsAppContact(`${event.title} - Event Information`)}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-all duration-300"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">Get Event Updates</span>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* NUML Highlighted Events */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">NUML Highlighted Events</h3>
              <a
                href="https://numl.edu.pk/events"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="text-sm">View All Events</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <p className="text-gray-400 mt-2">Loading events...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.a
                    key={event.id}
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="block bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                  >
                    {event.isHighlighted && (
                      <div className="inline-flex items-center px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full mb-3">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Highlighted
                      </div>
                    )}
                    <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                    <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-purple-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      {event.venue && (
                        <div className="flex items-center space-x-2 text-blue-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{event.venue}</span>
                        </div>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Essential Resources
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive guides and links for Afghan students at NUML
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.a
                      key={resource.name}
                      href={resource.link}
                      target={resource.isExternal ? "_blank" : "_self"}
                      rel={resource.isExternal ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (resourceIndex * 0.05) }}
                      whileHover={{ scale: 1.02 }}
                      className="block p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                              {resource.name}
                            </h3>
                            {resource.badge && (
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                resource.badge === 'Extended' ? 'bg-orange-500/20 text-orange-400' :
                                resource.badge === 'Important' ? 'bg-red-500/20 text-red-400' :
                                resource.badge === 'Updated' ? 'bg-blue-500/20 text-blue-400' :
                                resource.badge === 'WhatsApp' ? 'bg-green-500/20 text-green-400' :
                                resource.badge === 'Free Service' ? 'bg-purple-500/20 text-purple-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>
                                {resource.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">
                            {resource.description}
                          </p>
                        </div>
                        <ExternalLink className={`h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors ${!resource.isExternal ? 'opacity-50' : ''}`} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact for Auto-Forward */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Need Immediate Help?</h2>
              <p className="text-gray-300">
                Connect with us via WhatsApp for instant support and guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleWhatsAppContact('Academic Support')}
                className="flex items-center justify-center space-x-2 p-4 bg-blue-500/20 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
              >
                <BookOpen className="h-5 w-5" />
                <span>Academic Support</span>
              </button>
              <button
                onClick={() => handleWhatsAppContact('Visa & Legal Assistance')}
                className="flex items-center justify-center space-x-2 p-4 bg-green-500/20 rounded-xl text-green-400 hover:bg-green-500/30 transition-all duration-300"
              >
                <FileText className="h-5 w-5" />
                <span>Visa & Legal</span>
              </button>
              <button
                onClick={() => handleWhatsAppContact('Accommodation Help')}
                className="flex items-center justify-center space-x-2 p-4 bg-pink-500/20 rounded-xl text-pink-400 hover:bg-pink-500/30 transition-all duration-300"
              >
                <Home className="h-5 w-5" />
                <span>Accommodation</span>
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => handleWhatsAppContact('General Inquiry')}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contact Council via WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Emergency Contacts
            </h2>
            <p className="text-gray-400 text-lg">
              Important numbers for urgent situations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                title: 'University Security', 
                number: '+92 51 9265100', 
                available: '24/7',
                icon: Shield,
                color: 'from-blue-500 to-blue-600',
              },
              { 
                title: 'Medical Emergency', 
                number: '1122', 
                available: '24/7',
                icon: Heart,
                color: 'from-red-500 to-red-600',
              },
              { 
                title: 'Council WhatsApp', 
                number: '+92 300 1234567', 
                available: '9 AM - 9 PM',
                icon: MessageCircle,
                color: 'from-green-500 to-green-600',
                isWhatsApp: true,
              },
              { 
                title: 'Student Affairs', 
                number: '+92 51 9265101', 
                available: '8 AM - 5 PM',
                icon: Briefcase,
                color: 'from-purple-500 to-purple-600',
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 text-center group hover:border-gray-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-xl font-bold text-green-400 mb-2">{contact.number}</p>
                <p className="text-gray-400 text-sm mb-3">Available: {contact.available}</p>
                
                {contact.isWhatsApp && (
                  <button
                    onClick={() => handleWhatsAppContact('Emergency Assistance')}
                    className="w-full px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-all duration-300 text-sm"
                  >
                    Contact via WhatsApp
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Additional Support
            </h2>
            <p className="text-gray-400 text-lg">
              Specialized resources and external links
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'HEC Scholarships Portal',
                description: 'Higher Education Commission scholarship opportunities and applications',
                link: 'https://hec.gov.pk/scholarships',
                icon: CreditCard,
                color: 'from-yellow-500 to-orange-500',
              },
              {
                title: 'Pakistan Bait-ul-Maal',
                description: 'Financial assistance for deserving students - need-based support',
                link: 'https://www.pbm.gov.pk',
                icon: Heart,
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: 'NUML ORIC Research',
                description: 'Office of Research, Innovation & Commercialization guidelines',
                link: 'https://numl.edu.pk/oric',
                icon: Search,
                color: 'from-indigo-500 to-purple-500',
              },
              {
                title: 'Islamabad Police Helpline',
                description: 'Emergency police assistance and safety reporting',
                link: 'tel:15',
                icon: Shield,
                color: 'from-blue-500 to-indigo-500',
              },
              {
                title: 'NUML Placement Center',
                description: 'Job placement assistance and career guidance through ITCON',
                link: 'https://numl.edu.pk/',
                icon: Briefcase,
                color: 'from-purple-500 to-violet-500',
              },
              {
                title: 'Student Services Portal',
                description: 'Student ID application, university services, and online forms',
                link: 'https://numl.edu.pk/',
                icon: UserCheck,
                color: 'from-pink-500 to-rose-500',
              },
            ].map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="block p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4`}>
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-end mt-4">
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="text-2xl font-bold text-white">NOC Request Form</h3>
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
                <MessageCircle className="h-5 w-5" />
                <span>Submit via WhatsApp</span>
              </button>
            </form>
            
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-400 text-xs text-center">
                📋 Download the NOC form first, then submit your request via WhatsApp for faster processing
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
export default Resources;