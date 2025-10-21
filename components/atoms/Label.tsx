import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ 
  htmlFor, 
  children, 
  required = false 
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-[var(--color-deep-blue)] dark:text-[var(--color-text-on-dark)] mb-2"
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};