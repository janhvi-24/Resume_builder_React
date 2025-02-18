import React from 'react';
import { type Resume } from '../../../types/resume';
import { formatDate } from '../../../lib/dateUtils';

interface ClassicTemplateProps {
  resume: Resume;
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ resume }) => {
  const { personalInfo, education, experience, skills } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg">
      <header className="border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl text-gray-600 mt-1">{personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
        <p className="text-gray-700">{personalInfo.summary}</p>
      </section>

      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </p>
                <p className="mt-2 text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill.name} - {skill.level}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};