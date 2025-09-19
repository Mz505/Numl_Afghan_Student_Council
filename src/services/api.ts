// Mock API service for development
// In production, these would connect to your actual backend

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Simulate API delays
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  // Students API
  async getStudents(): Promise<ApiResponse<any[]>> {
    await delay(500);
    return {
      success: true,
      data: [], // This would come from your MongoDB backend
    };
  },

  async getStudentsByYear(year: number): Promise<ApiResponse<any[]>> {
    await delay(500);
    return {
      success: true,
      data: [], // Filtered by graduation year
    };
  },

  // Events API
  async getEvents(): Promise<ApiResponse<any[]>> {
    await delay(500);
    return {
      success: true,
      data: [], // This would come from your MongoDB backend
    };
  },

  async createEvent(eventData: any): Promise<ApiResponse<any>> {
    await delay(500);
    return {
      success: true,
      data: eventData,
      message: 'Event created successfully',
    };
  },

  // Contact API
  async submitContactForm(formData: any): Promise<ApiResponse<any>> {
    await delay(500);
    return {
      success: true,
      data: formData,
      message: 'Message sent successfully',
    };
  },

  // Announcements API
  async getAnnouncements(): Promise<ApiResponse<any[]>> {
    await delay(500);
    return {
      success: true,
      data: [], // This would come from your MongoDB backend
    };
  },

  async createAnnouncement(announcementData: any): Promise<ApiResponse<any>> {
    await delay(500);
    return {
      success: true,
      data: announcementData,
      message: 'Announcement created successfully',
    };
  },
};