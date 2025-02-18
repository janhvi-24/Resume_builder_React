import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Plus } from 'lucide-react';
import { useResumeStore } from '../../../../store/useResumeStore';
import { type Skill } from '../../../../types/resume';
import { FormSection } from '../../ui/FormSection';
import { SkillEntry } from './SkillEntry';
import { SkillsFormFields } from './SkillsFormFields';

const initialSkill: Skill = {
  name: '',
  level: 'Intermediate',
  category: 'Technical',
};

export const SkillsForm = () => {
  const { resume, updateSkills } = useResumeStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Skill>(initialSkill);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSkills = [...resume.skills];
    if (editIndex !== null) {
      updatedSkills[editIndex] = formData;
    } else {
      updatedSkills.push(formData);
    }
    updateSkills(updatedSkills);
    resetForm();
  };

  const handleEdit = (index: number) => {
    setFormData(resume.skills[index]);
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleRemove = (index: number) => {
    const updatedSkills = resume.skills.filter((_, i) => i !== index);
    updateSkills(updatedSkills);
  };

  const resetForm = () => {
    setFormData(initialSkill);
    setEditIndex(null);
    setIsEditing(false);
  };

  return (
    <FormSection
      title="Skills"
      description="Add your professional skills"
    >
      {resume.skills.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resume.skills.map((skill, index) => (
            <SkillEntry
              key={index}
              skill={skill}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleRemove(index)}
            />
          ))}
        </div>
      )}

      {(isEditing || resume.skills.length === 0) && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <SkillsFormFields
            formData={formData}
            setFormData={setFormData}
          />

          <div className="flex justify-end gap-2">
            {isEditing && (
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            )}
            <Button type="submit">
              <Plus className="w-4 h-4 mr-2" />
              {editIndex !== null ? 'Update' : 'Add'} Skill
            </Button>
          </div>
        </form>
      )}

      {!isEditing && resume.skills.length > 0 && (
        <Button
          onClick={() => setIsEditing(true)}
          variant="outline"
          className="w-full"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Another Skill
        </Button>
      )}
    </FormSection>
  );
};