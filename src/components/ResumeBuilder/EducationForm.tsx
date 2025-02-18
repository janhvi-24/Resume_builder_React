import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Plus, Trash2, PencilLine } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import { type Education } from '../../types/resume';
import { formatDateRange } from '../../lib/dateUtils';

export const EducationForm = () => {
  const { resume, addEducation, updateEducation, removeEducation } = useResumeStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Education>({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    description: '',
    gpa: '',
    honors: [],
    relevantCourses: [],
  });

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
    setFormData({
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',
      gpa: '',
      honors: [],
      relevantCourses: [],
    });
    setEditIndex(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <p className="text-gray-500">Add your educational background</p>
      </div>

      {resume.education.length > 0 && (
        <div className="space-y-4">
          {resume.education.map((edu, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>
                  )}
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
                    onClick={() => removeEducation(index)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {(isEditing || resume.education.length === 0) && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Institution
              </label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) =>
                  setFormData({ ...formData, institution: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <input
                type="text"
                value={formData.degree}
                onChange={(e) =>
                  setFormData({ ...formData, degree: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Field of Study
              </label>
              <input
                type="text"
                value={formData.field}
                onChange={(e) =>
                  setFormData({ ...formData, field: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                GPA (Optional)
              </label>
              <input
                type="text"
                value={formData.gpa}
                onChange={(e) =>
                  setFormData({ ...formData, gpa: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
            />
          </div>

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
    </div>
  );
};