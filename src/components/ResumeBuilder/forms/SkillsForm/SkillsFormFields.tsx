import React from 'react';
import { FormInput } from '../../ui/FormInput';
import { FormSelect } from '../../ui/FormSelect';
import { type Skill } from '../../../../types/resume';

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;
const skillCategories = ['Technical', 'Soft', 'Language', 'Tool'] as const;

interface SkillsFormFieldsProps {
  formData: Skill;
  setFormData: React.Dispatch<React.SetStateAction<Skill>>;
}

export const SkillsFormFields: React.FC<SkillsFormFieldsProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormInput
        label="Skill Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        required
      />

      <FormSelect
        label="Proficiency Level"
        value={formData.level}
        onChange={(e) =>
          setFormData({
            ...formData,
            level: e.target.value as Skill['level'],
          })
        }
        options={skillLevels.map((level) => ({
          value: level,
          label: level,
        }))}
        required
      />

      <FormSelect
        label="Category"
        value={formData.category}
        onChange={(e) =>
          setFormData({
            ...formData,
            category: e.target.value as Skill['category'],
          })
        }
        options={skillCategories.map((category) => ({
          value: category,
          label: category,
        }))}
        required
      />
    </div>
  );
};