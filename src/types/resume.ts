export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface Experience {
  company: string;
  position: string;
  location?: string;
  isRemote?: boolean;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category?: 'Technical' | 'Soft' | 'Language' | 'Tool';
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  startDate?: string;
  endDate?: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Language {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  photo?: string;
  summary: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  website?: string;
}

export interface Resume {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  awards: Award[];
  languages: Language[];
  interests?: string[];
  volunteerWork?: Experience[];
  references?: string;
  templateId: string;
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}