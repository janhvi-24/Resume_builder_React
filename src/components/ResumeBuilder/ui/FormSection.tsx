import React from 'react';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
      {children}
    </div>
  );
};