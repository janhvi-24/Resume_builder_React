import React from 'react';

interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};