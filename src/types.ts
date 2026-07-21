export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'react' | 'nextjs' | 'ai';
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai';
  icon: string;
  proficiency: number; // 0-100
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'experience' | 'education';
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  journey: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  happyClients: number;
  technologiesCount: number;
  resumeUrl: string;
  email: string;
  phone: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}
