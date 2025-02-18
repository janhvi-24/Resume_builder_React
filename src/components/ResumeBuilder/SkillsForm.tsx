import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Plus, Trash2, PencilLine } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import { type Skill } from '../../types/resume';

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;
const skillCategories = ['Technical', 'Soft', 'Language', 'Tool'] as const;

export const SkillsForm = () => {
  const { resume, updateSkills } = useResumeStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Skill>({
    name: '',
    level: 'Intermediate',
    category: 'Technical',
  });

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
    setFormData({
      name: '',
      level: 'Intermediate',
      category: 'Technical',
    });
    setEditIndex(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <p className="text-gray-500">Add your professional skills</p>
      </div>

      {resume.skills.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resume.skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <p className="text-sm text-gray-500">
                    {skill.level} • {skill.category}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(index)}
                  >
                    <PencilLine className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemove(index)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {(isEditing || resume.skills.length === 0) && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Skill Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Proficiency Level
              </label>
              <select
                value={formData.level}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    level: e.target.value as Skill['level'],
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              >
                {skillLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value as Skill['category'],
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              >
                {skillCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

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
    </div>
  );
};