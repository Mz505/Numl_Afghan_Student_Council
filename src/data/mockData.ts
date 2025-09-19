export interface Student {
  id: number;
  name: string;
  graduationYear: number;
  degree: string;
  image: string;
  bio: string;
  achievements: string[];
  portfolio: string;
  email: string;
  vision: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  attendees: number;
  isUpcoming: boolean;
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

// Mock data for development
export const mockStudents: Student[] = [
  {
    id: 1,
    name: 'Mariam Sadiq',
    graduationYear: 2023,
    degree: 'Master of Business Administration',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Currently working as a Business Analyst at a leading consulting firm in Dubai.',
    achievements: ['Dean\'s List', 'Best Business Plan Award', 'Leadership Excellence'],
    portfolio: 'https://mariamsadiq.com',
    email: 'mariam.sadiq@email.com',
    vision: 'To bridge business opportunities between Afghanistan and the international market.',
  },
  // Add more mock students as needed
];

export const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Orientation Session for New Students',
    date: '2025-02-15',
    time: '2:00 PM',
    location: 'Main Auditorium, NUML',
    description: 'Welcome session covering academic procedures, hostel information, and support services.',
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
    attendees: 150,
    isUpcoming: true,
  },
  // Add more mock events as needed
];

export const mockAnnouncements: Announcement[] = [
  {
    id: 1,
    title: 'Orientation Session for New Afghan Students',
    date: '2025-02-15',
    description: 'Welcome session covering academic procedures, hostel information, and support services.',
    priority: 'high',
  },
  // Add more mock announcements as needed
];