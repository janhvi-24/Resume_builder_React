import React, { useState } from 'react';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { EducationForm } from './forms/EducationForm/EducationForm';
import { SkillsForm } from './forms/SkillsForm/SkillsForm';
import { TemplateSelector } from './TemplateSelector';
import { ResumePreview } from './ResumePreview';
import { Navigation } from './Navigation';
import { Header } from './Header';

const steps = [
  {
    title: 'Personal Information',
    component: PersonalInfoForm,
  },
  {
    title: 'Education',
    component: EducationForm,
  },
  {
    title: 'Skills',
    component: SkillsForm,
  },
  {
    title: 'Template Selection',
    component: TemplateSelector,
  },
  {
    title: 'Preview & Download',
    component: ResumePreview,
  },
] as const;

export function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {steps[currentStep].title}
            </h2>
            <div className="text-sm text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>

          <CurrentStepComponent />

          <Navigation
            currentStep={currentStep}
            totalSteps={steps.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      </main>
    </div>
  );
}