import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Plus } from 'lucide-react';
import { useResumeStore } from '../../../../store/useResumeStore';
import { type Education } from '../../../../types/resume';
import { FormSection } from '../../ui/FormSection';
import { EducationEntry } from './EducationEntry';
import { EducationFormFields } from './EducationFormFields';

const initialEducation: Education = {
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: '',
  description: '',
  gpa: '',
  honors: [],
  relevantCourses: [],
};

export const EducationForm = () => {
  const { resume, addEducation, updateEducation, removeEducation } = useResumeStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Education>(initialEducation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      updateEducation(editIndex, formData);
    } else {
      addEducation(formData);
    }
    resetForm();
  };

  const handleEdit = (index: number) => {
    setFormData(resume.education[index]);
    setEditIndex(index);
    setIsEditing(true);
  };

  const resetForm = () => {
    setFormData(initialEducation);
    setEditIndex(null);
    setIsEditing(false);
  };

  return (
    <FormSection
      title="Education"
      description="Add your educational background"
    >
      {resume.education.length > 0 && (
        <div className="space-y-4">
          {resume.education.map((edu, index) => (
            <EducationEntry
              key={index}
              education={edu}
              onEdit={() => handleEdit(index)}
              onDelete={() => removeEducation(index)}
            />
          ))}
        </div>
      )}

      {(isEditing || resume.education.length === 0) && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <EducationFormFields
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
              {editIndex !== null ? 'Update' : 'Add'} Education
            </Button>
          </div>
        </form>
      )}

      {!isEditing && resume.education.length > 0 && (
        <Button
          onClick={() => setIsEditing(true)}
          variant="outline"
          className="w-full"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Another Education
        </Button>
      )}
    </FormSection>
  );
};