import React from 'react';
import { FormInput } from '../../ui/FormInput';
import { FormTextArea } from '../../ui/FormTextArea';
import { type Education } from '../../../../types/resume';

interface EducationFormFieldsProps {
  formData: Education;
  setFormData: React.Dispatch<React.SetStateAction<Education>>;
}

export const EducationFormFields: React.FC<EducationFormFieldsProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormInput
        label="Institution"
        value={formData.institution}
        onChange={(e) =>
          setFormData({ ...formData, institution: e.target.value })
        }
        required
      />

      <FormInput
        label="Degree"
        value={formData.degree}
        onChange={(e) =>
          setFormData({ ...formData, degree: e.target.value })
        }
        required
      />

      <FormInput
        label="Field of Study"
        value={formData.field}
        onChange={(e) =>
          setFormData({ ...formData, field: e.target.value })
        }
        required
      />

      <FormInput
        label="GPA (Optional)"
        value={formData.gpa}
        onChange={(e) =>
          setFormData({ ...formData, gpa: e.target.value })
        }
      />

      <FormInput
        label="Start Date"
        type="date"
        value={formData.startDate}
        onChange={(e) =>
          setFormData({ ...formData, startDate: e.target.value })
        }
        required
      />

      <FormInput
        label="End Date"
        type="date"
        value={formData.endDate}
        onChange={(e) =>
          setFormData({ ...formData, endDate: e.target.value })
        }
        required
      />

      <div className="col-span-2">
        <FormTextArea
          label="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={3}
        />
      </div>
    </div>
  );
};