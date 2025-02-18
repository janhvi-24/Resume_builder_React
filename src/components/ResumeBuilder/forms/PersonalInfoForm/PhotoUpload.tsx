import React, { useRef } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '../../../ui/Button';

interface PhotoUploadProps {
  photo?: string;
  onPhotoUpload: (photoUrl: string) => void;
}

export function PhotoUpload({ photo, onPhotoUpload }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB');
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload an image file (JPEG, PNG, or GIF)');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onPhotoUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file && fileInputRef.current) {
      fileInputRef.current.files = e.dataTransfer.files;
      const event = new Event('change', { bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Profile Photo
      </label>
      <div
        className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {photo ? (
          <img
            src={photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <div className="text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
            id="photo-upload"
          />
          <label htmlFor="photo-upload">
            <Button variant="outline" className="cursor-pointer mb-2">
              <Upload className="w-4 h-4 mr-2" />
              Choose Photo
            </Button>
          </label>
          <p className="text-sm text-gray-500">
            Drag and drop or click to upload
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Max file size: 5MB (JPEG, PNG, GIF)
          </p>
        </div>
      </div>
    </div>
  );
}