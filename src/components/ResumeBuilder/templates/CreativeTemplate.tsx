import React from 'react';
import { type Resume } from '../../../types/resume';
import { formatDate } from '../../../lib/dateUtils';

interface CreativeTemplateProps {
  resume: Resume;
}

export const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ resume }) => {
  const { personalInfo, education, experience, skills } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg grid grid-cols-3">
      <aside className="col-span-1 bg-indigo-600 text-white p-8">
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white"
          />
        )}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <div className="space-y-2 text-sm">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>

          {skills.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Skills</h2>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <div className="w-full bg-indigo-700 rounded-full h-1.5 mt-1">
                      <div
                        className="bg-white h-1.5 rounded-full"
                        style={{
                          width: skill.level === 'Expert' ? '100%' :
                                 skill.level === 'Advanced' ? '75%' :
                                 skill.level === 'Intermediate' ? '50%' :
                                 '25%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>

      <main className="col-span-2 p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-xl text-indigo-600 mt-1">{personalInfo.title}</p>
          <p className="mt-4 text-gray-600">{personalInfo.summary}</p>
        </header>

        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 before:rounded-full">
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-indigo-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 before:rounded-full">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-indigo-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                  <p className="mt-2 text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};