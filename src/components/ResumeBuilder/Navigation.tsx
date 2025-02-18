import React from 'react';
import { Button } from '../ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
}: NavigationProps) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={currentStep === 0}
        className="space-x-2"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </Button>

      <div className="flex space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentStep ? 'bg-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <Button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className="space-x-2"
      >
        <span>{currentStep === totalSteps - 1 ? 'Finish' : 'Next'}</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}