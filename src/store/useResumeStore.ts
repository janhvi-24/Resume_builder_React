import { create } from 'zustand';
import type { Resume, Education, Experience, Project, Certification, Award, Language } from '../types/resume';

interface ResumeStore {
  resume: Resume;
  setPersonalInfo: (personalInfo: Resume['personalInfo']) => void;
  addEducation: (education: Education) => void;
  updateEducation: (index: number, education: Education) => void;
  removeEducation: (index: number) => void;
  addExperience: (experience: Experience) => void;
  updateExperience: (index: number, experience: Experience) => void;
  removeExperience: (index: number) => void;
  updateSkills: (skills: Resume['skills']) => void;
  addProject: (project: Project) => void;
  updateProject: (index: number, project: Project) => void;
  removeProject: (index: number) => void;
  addCertification: (certification: Certification) => void;
  updateCertification: (index: number, certification: Certification) => void;
  removeCertification: (index: number) => void;
  addAward: (award: Award) => void;
  updateAward: (index: number, award: Award) => void;
  removeAward: (index: number) => void;
  updateLanguages: (languages: Language[]) => void;
  updateInterests: (interests: string[]) => void;
  setTemplate: (templateId: string) => void;
  setThemeColors: (colors: Resume['themeColors']) => void;
}

const initialResume: Resume = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
  projects: [],
  certifications: [],
  awards: [],
  languages: [],
  interests: [],
  templateId: 'modern',
  themeColors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    accent: '#3b82f6',
  },
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: initialResume,
  setPersonalInfo: (personalInfo) =>
    set((state) => ({
      resume: { ...state.resume, personalInfo },
    })),
  addEducation: (education) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: [...state.resume.education, education],
      },
    })),
  updateEducation: (index, education) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: state.resume.education.map((e, i) =>
          i === index ? education : e
        ),
      },
    })),
  removeEducation: (index) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: state.resume.education.filter((_, i) => i !== index),
      },
    })),
  addExperience: (experience) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: [...state.resume.experience, experience],
      },
    })),
  updateExperience: (index, experience) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.map((e, i) =>
          i === index ? experience : e
        ),
      },
    })),
  removeExperience: (index) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.filter((_, i) => i !== index),
      },
    })),
  updateSkills: (skills) =>
    set((state) => ({
      resume: { ...state.resume, skills },
    })),
  addProject: (project) =>
    set((state) => ({
      resume: {
        ...state.resume,
        projects: [...state.resume.projects, project],
      },
    })),
  updateProject: (index, project) =>
    set((state) => ({
      resume: {
        ...state.resume,
        projects: state.resume.projects.map((p, i) =>
          i === index ? project : p
        ),
      },
    })),
  removeProject: (index) =>
    set((state) => ({
      resume: {
        ...state.resume,
        projects: state.resume.projects.filter((_, i) => i !== index),
      },
    })),
  addCertification: (certification) =>
    set((state) => ({
      resume: {
        ...state.resume,
        certifications: [...state.resume.certifications, certification],
      },
    })),
  updateCertification: (index, certification) =>
    set((state) => ({
      resume: {
        ...state.resume,
        certifications: state.resume.certifications.map((c, i) =>
          i === index ? certification : c
        ),
      },
    })),
  removeCertification: (index) =>
    set((state) => ({
      resume: {
        ...state.resume,
        certifications: state.resume.certifications.filter((_, i) => i !== index),
      },
    })),
  addAward: (award) =>
    set((state) => ({
      resume: {
        ...state.resume,
        awards: [...state.resume.awards, award],
      },
    })),
  updateAward: (index, award) =>
    set((state) => ({
      resume: {
        ...state.resume,
        awards: state.resume.awards.map((a, i) =>
          i === index ? award : a
        ),
      },
    })),
  removeAward: (index) =>
    set((state) => ({
      resume: {
        ...state.resume,
        awards: state.resume.awards.filter((_, i) => i !== index),
      },
    })),
  updateLanguages: (languages) =>
    set((state) => ({
      resume: { ...state.resume, languages },
    })),
  updateInterests: (interests) =>
    set((state) => ({
      resume: { ...state.resume, interests },
    })),
  setTemplate: (templateId) =>
    set((state) => ({
      resume: { ...state.resume, templateId },
    })),
  setThemeColors: (themeColors) =>
    set((state) => ({
      resume: { ...state.resume, themeColors },
    })),
}));