export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  profilePicture?: string;
  profileStrength: number;
  skills: string[];
  experience: number;
  education: string;
  preferredRole?: string;
  salary?: {
    min: number;
    max: number;
  };
  languages: string[];
  verificationStatus?: 'verified' | 'pending';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  benefits: string[];
  experienceLevel: string;
  postedAt: string;
  isVerified: boolean;
  distance?: number;
  shift?: 'Day Shift' | 'Night Shift';
}

export interface Application {
  id: string;
  jobId: string;
  job: Job;
  status: 'submitted' | 'viewed' | 'shortlisted' | 'interview' | 'rejected';
  appliedAt: string;
  lastUpdated: string;
}

export interface Interview {
  id: string;
  applicationId: string;
  jobTitle: string;
  companyName: string;
  date: string;
  time: string;
  type: 'video' | 'call' | 'in-person';
  recruiterName: string;
  recruiterImage?: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  preparationNotes: string[];
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderImage?: string;
  text: string;
  attachments?: {
    url: string;
    type: 'pdf' | 'image' | 'document';
    size: number;
  }[];
  timestamp: string;
  read: boolean;
}
