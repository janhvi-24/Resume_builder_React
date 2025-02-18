import React from 'react';
import { Button } from '../../../ui/Button';
import { PencilLine, Trash2 } from 'lucide-react';
import { type Skill } from '../../../../types/resume';

interface SkillEntryProps {
  skill: Skill;
  onEdit: () => void;
  onDelete: () => void;
}

export const SkillEntry: React.FC<SkillEntryProps> = ({
  skill,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 border rounded-lg hover:border-primary transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">{skill.name}</h3>
          <p className="text-sm text-gray-500">
            {skill.level} • {skill.category}
          </p>
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