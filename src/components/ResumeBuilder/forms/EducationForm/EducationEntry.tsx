import React from 'react';
import { Button } from '../../../ui/Button';
import { PencilLine, Trash2 } from 'lucide-react';
import { type Education } from '../../../../types/resume';
import { formatDateRange } from '../../../../lib/dateUtils';

interface EducationEntryProps {
  education: Education;
  onEdit: () => void;
  onDelete: () => void;
}

export const EducationEntry: React.FC<EducationEntryProps> = ({
  education,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 border rounded-lg hover:border-primary transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">{education.degree}</h3>
          <p className="text-gray-600">{education.institution}</p>
          <p className="text-sm text-gray-500">
            {formatDateRange(education.startDate, education.endDate)}
          </p>
          {education.gpa && (
            <p className="text-sm text-gray-600 mt-1">GPA: {education.gpa}</p>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={onEdit}>
            <PencilLine className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onDelete}>
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};