import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { ModernTemplate } from './templates/ModernTemplate';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

export const ResumePreview = () => {
  const { resume } = useResumeStore();

  const handleDownload = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `${resume.personalInfo.firstName}-${resume.personalInfo.lastName}-Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  const TemplateComponent = {
    classic: ClassicTemplate,
    creative: CreativeTemplate,
    minimal: MinimalTemplate,
    modern: ModernTemplate,
  }[resume.templateId] || MinimalTemplate;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handleDownload} className="space-x-2">
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </Button>
      </div>

      <div id="resume-preview" className="bg-gray-100 p-8 rounded-lg">
        <TemplateComponent resume={resume} />
      </div>
    </div>
  );
};