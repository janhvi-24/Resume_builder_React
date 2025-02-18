import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  location: z.string().min(1, 'Location is required'),
  title: z.string().min(1, 'Professional title is required'),
  summary: z.string().min(50, 'Summary should be at least 50 characters'),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
  portfolio: z.string().url().optional(),
  website: z.string().url().optional(),
});

export const educationSchema = z.object({
  institution: z.string().min(1, 'Institution name is required'),
  degree: z.string().min(1, 'Degree is required'),
  field: z.string().min(1, 'Field of study is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  description: z.string(),
  gpa: z.string().optional(),
  honors: z.array(z.string()).optional(),
  relevantCourses: z.array(z.string()).optional(),
});

export const experienceSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  location: z.string().optional(),
  isRemote: z.boolean().optional(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  description: z.string().min(1, 'Description is required'),
  achievements: z.array(z.string()),
});

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Description is required'),
  technologies: z.array(z.string()),
  link: z.string().url().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  achievements: z.array(z.string()),
});

export const certificationSchema = z.object({
  name: z.string().min(1, 'Certification name is required'),
  organization: z.string().min(1, 'Organization is required'),
  issueDate: z.string().min(1, 'Issue date is required'),
  expiryDate: z.string().optional(),
  credentialId: z.string().optional(),
  credentialUrl: z.string().url().optional(),
});

export const skillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
  category: z.enum(['Technical', 'Soft', 'Language', 'Tool']).optional(),
});