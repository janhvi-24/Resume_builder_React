import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
}) => {
  return (
    <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-blue-600">{subtitle}</p>
      <p className="text-sm text-gray-500 mt-1">{period}</p>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};