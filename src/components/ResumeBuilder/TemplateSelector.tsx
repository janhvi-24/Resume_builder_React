import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Button } from '../ui/Button';
import { Layout, Columns, Grid, AlignLeft } from 'lucide-react';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    icon: Layout,
    description: 'Clean and professional design with a modern touch',
  },
  {
    id: 'classic',
    name: 'Classic',
    icon: AlignLeft,
    description: 'Traditional layout perfect for conservative industries',
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: Grid,
    description: 'Stand out with a unique and bold design',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    icon: Columns,
    description: 'Simple and elegant design focusing on content',
  },
];

export const TemplateSelector = () => {
  const { resume, setTemplate } = useResumeStore();

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Choose Template</h2>
        <p className="text-gray-500">Select a design that best represents you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <div
              key={template.id}
              className={`relative p-4 border rounded-lg cursor-pointer transition-all ${
                resume.templateId === template.id
                  ? 'border-primary ring-2 ring-primary ring-opacity-50'
                  : 'border-gray-200 hover:border-primary'
              }`}
              onClick={() => setTemplate(template.id)}
            >
              <div className="flex flex-col items-center space-y-3">
                <Icon className="w-12 h-12 text-gray-600" />
                <h3 className="font-medium text-gray-900">{template.name}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {template.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}