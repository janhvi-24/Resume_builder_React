import React from 'react';
import { type Resume } from '../../../types/resume';
import { formatDate } from '../../../lib/dateUtils';
import { ResumeSection } from '../ui/ResumeSection';
import { SkillBadge } from '../ui/SkillBadge';
import { TimelineItem } from '../ui/TimelineItem';

interface ModernTemplateProps {
  resume: Resume;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ resume }) => {
  const { personalInfo, education, experience, skills } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg">
      <header className="relative pb-8 mb-8">
        <div className="absolute inset-0 h-32 bg-gradient-to-r from-blue-500 to-cyan-400" />
        
        <div className="relative pt-20 px-6">
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt="Profile"
              className="absolute left-6 -top-4 w-24 h-24 rounded-xl shadow-lg object-cover border-4 border-white"
            />
          )}
          
          <div className="ml-32">
            <h1 className="text-4xl font-bold text-gray-900">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p className="text-xl text-blue-600 font-medium mt-1">
              {personalInfo.title}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <main className="col-span-2 space-y-6">
          <ResumeSection title="About Me">
            <p className="text-gray-600 leading-relaxed">{personalInfo.summary}</p>
          </ResumeSection>

          {experience.length > 0 && (
            <ResumeSection title="Experience">
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    title={exp.position}
                    subtitle={exp.company}
                    period={`${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`}
                    description={exp.description}
                  />
                ))}
              </div>
            </ResumeSection>
          )}

          {education.length > 0 && (
            <ResumeSection title="Education">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    title={edu.degree}
                    subtitle={edu.institution}
                    period={`${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}`}
                    description={edu.description}
                  />
                ))}
              </div>
            </ResumeSection>
          )}
        </main>

        <aside className="space-y-6">
          {skills.length > 0 && (
            <ResumeSection title="Skills">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <SkillBadge
                    key={index}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </ResumeSection>
          )}
        </aside>
      </div>
    </div>
  );
};