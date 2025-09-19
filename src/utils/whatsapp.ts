// WhatsApp utility functions for the NUML Afghan Student Council

export interface WhatsAppMessage {
  type: 'general' | 'noc' | 'emergency' | 'academic' | 'accommodation' | 'visa';
  name?: string;
  email?: string;
  studentId?: string;
  subject: string;
  details?: string;
}

export const COUNCIL_WHATSAPP = '923148476338';
export const EMERGENCY_WHATSAPP = '923148476338';

export const createWhatsAppMessage = (messageData: WhatsAppMessage): string => {
  const { type, name, email, studentId, subject, details } = messageData;
  
  let message = `Hello NUML Afghan Student Council,\n\n`;
  
  // Add subject
  message += `Subject: ${subject}\n\n`;
  
  // Add personal details if provided
  if (name || email || studentId) {
    message += `Student Details:\n`;
    if (name) message += `Name: ${name}\n`;
    if (email) message += `Email: ${email}\n`;
    if (studentId) message += `Student ID: ${studentId}\n`;
    message += `\n`;
  }
  
  // Add specific message based on type
  switch (type) {
    case 'noc':
      message += `I need assistance with NOC (No Objection Certificate) processing.\n\n`;
      if (details) message += `Additional Details: ${details}\n\n`;
      message += `Please guide me through the process or connect me with the embassy liaison.\n\n`;
      break;
      
    case 'emergency':
      message += `🚨 URGENT: I need immediate assistance.\n\n`;
      if (details) message += `Emergency Details: ${details}\n\n`;
      message += `Please respond as soon as possible.\n\n`;
      break;
      
    case 'academic':
      message += `I need help with academic matters.\n\n`;
      if (details) message += `Details: ${details}\n\n`;
      message += `Please connect me with the academic support team.\n\n`;
      break;
      
    case 'accommodation':
      message += `I need assistance with accommodation/housing.\n\n`;
      if (details) message += `Details: ${details}\n\n`;
      message += `Please help me find suitable accommodation or connect me with other students.\n\n`;
      break;
      
    case 'visa':
      message += `I need help with visa or legal documentation.\n\n`;
      if (details) message += `Details: ${details}\n\n`;
      message += `Please provide guidance or connect me with the legal affairs team.\n\n`;
      break;
      
    default:
      if (details) message += `${details}\n\n`;
      message += `Please provide guidance or connect me with the relevant team.\n\n`;
  }
  
  message += `Thank you for your support!\n\n`;
  message += `Best regards,\n`;
  if (name) message += name;
  
  return message;
};

export const sendWhatsAppMessage = (messageData: WhatsAppMessage, phoneNumber: string = COUNCIL_WHATSAPP) => {
  const message = createWhatsAppMessage(messageData);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

// Predefined message templates
export const WHATSAPP_TEMPLATES = {
  generalInquiry: (name?: string) => createWhatsAppMessage({
    type: 'general',
    name,
    subject: 'General Inquiry',
    details: 'I have a general question about the council services.',
  }),
  
  nocRequest: (name?: string, studentId?: string, purpose?: string) => createWhatsAppMessage({
    type: 'noc',
    name,
    studentId,
    subject: 'NOC Request Assistance',
    details: purpose ? `Purpose: ${purpose}` : undefined,
  }),
  
  emergencyHelp: (name?: string, emergency?: string) => createWhatsAppMessage({
    type: 'emergency',
    name,
    subject: 'Emergency Assistance Required',
    details: emergency,
  }),
  
  academicSupport: (name?: string, course?: string) => createWhatsAppMessage({
    type: 'academic',
    name,
    subject: 'Academic Support Request',
    details: course ? `Course/Subject: ${course}` : undefined,
  }),
  
  accommodationHelp: (name?: string, preference?: string) => createWhatsAppMessage({
    type: 'accommodation',
    name,
    subject: 'Accommodation Assistance',
    details: preference ? `Preference: ${preference}` : undefined,
  }),
  
  visaHelp: (name?: string, visaType?: string) => createWhatsAppMessage({
    type: 'visa',
    name,
    subject: 'Visa & Legal Assistance',
    details: visaType ? `Visa Type: ${visaType}` : undefined,
  }),
};