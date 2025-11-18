export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface Post {
  title: string;
  content: string;
  date: string;
}