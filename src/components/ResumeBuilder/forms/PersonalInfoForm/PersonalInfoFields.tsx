import React from 'react';
import { FormInput } from '../../ui/FormInput';
import { FormTextArea } from '../../ui/FormTextArea';
import { type PersonalInfo } from '../../../../types/resume';

interface PersonalInfoFieldsProps {
  personalInfo: PersonalInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function PersonalInfoFields({ personalInfo, onChange }: PersonalInfoFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormInput
        label="First Name"
        name="firstName"
        value={personalInfo.firstName}
        onChange={onChange}
        required
      />

      <FormInput
        label="Last Name"
        name="lastName"
        value={personalInfo.lastName}
        onChange={onChange}
        required
      />

      <FormInput
        label="Professional Title"
        name="title"
        value={personalInfo.title}
        onChange={onChange}
        required
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={onChange}
        required
      />

      <FormInput
        label="Phone"
        type="tel"
        name="phone"
        value={personalInfo.phone}
        onChange={onChange}
        required
      />

      <FormInput
        label="Location"
        name="location"
        value={personalInfo.location}
        onChange={onChange}
        required
      />

      <FormInput
        label="LinkedIn Profile"
        type="url"
        name="linkedin"
        value={personalInfo.linkedin}
        onChange={onChange}
      />

      <FormInput
        label="Portfolio Website"
        type="url"
        name="portfolio"
        value={personalInfo.portfolio}
        onChange={onChange}
      />

      <div className="col-span-2">
        <FormTextArea
          label="Professional Summary"
          name="summary"
          value={personalInfo.summary}
          onChange={onChange}
          rows={4}
          required
        />
      </div>
    </div>
  );
}