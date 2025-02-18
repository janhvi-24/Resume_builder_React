import React from 'react';
import { type Skill } from '../../../types/resume';

interface SkillBadgeProps {
  name: string;
  level: Skill['level'];
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  const colors = {
    Beginner: 'bg-blue-50 text-blue-700 border-blue-200',
    Intermediate: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    Advanced: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Expert: 'bg-violet-50 text-violet-700 border-violet-200',
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm border ${colors[level]}`}
    >
      {name}
    </span>
  );
};