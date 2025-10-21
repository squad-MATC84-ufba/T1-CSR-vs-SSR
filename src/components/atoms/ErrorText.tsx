import React from 'react';

interface ErrorTextProps {
  children: React.ReactNode;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ children }) => {
  return (
    <p className="text-sm text-red-500 mt-1">
      {children}
    </p>
  );
};
