import React from 'react';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </section>
  );
};