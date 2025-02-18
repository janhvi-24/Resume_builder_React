import React from 'react';
import { FormSection } from '../../ui/FormSection';
import { PersonalInfoFields } from './PersonalInfoFields';
import { PhotoUpload } from './PhotoUpload';
import { useResumeStore } from '../../../../store/useResumeStore';

export function PersonalInfoForm() {
  const { resume, setPersonalInfo } = useResumeStore();
  const { personalInfo } = resume;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handlePhotoUpload = (photoUrl: string) => {
    setPersonalInfo({ ...personalInfo, photo: photoUrl });
  };

  return (
    <FormSection
      title="Personal Information"
      description="Let's start with your basic information"
    >
      <div className="space-y-6">
        <PhotoUpload
          photo={personalInfo.photo}
          onPhotoUpload={handlePhotoUpload}
        />
        <PersonalInfoFields
          personalInfo={personalInfo}
          onChange={handleChange}
        />
      </div>
    </FormSection>
  );
}