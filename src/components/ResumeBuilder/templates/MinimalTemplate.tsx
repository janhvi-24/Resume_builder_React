import React from 'react';
import { type Resume } from '../../../types/resume';
import { formatDate } from '../../../lib/dateUtils';

interface MinimalTemplateProps {
  resume: Resume;
}

export const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ resume }) => {
  const { personalInfo, education, experience, skills } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-light text-gray-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-lg text-gray-600 mt-1">{personalInfo.title}</p>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      <section className="mb-8">
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          {personalInfo.summary}
        </p>
      </section>

      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-light text-gray-900 mb-4 uppercase tracking-wider">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                <div className="text-sm text-gray-500">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </div>
                <div className="col-span-3">
                  <h3 className="font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-light text-gray-900 mb-4 uppercase tracking-wider">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                <div className="text-sm text-gray-500">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </div>
                <div className="col-span-3">
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="mt-2 text-gray-600">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h2 className="text-lg font-light text-gray-900 mb-4 uppercase tracking-wider">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-600 text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};