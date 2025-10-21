import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body',
  className = '' 
}) => {
  const styles = {
    heading: 'text-2xl sm:text-3xl font-bold text-[var(--color-deep-blue)] dark:text-[var(--color-text-on-dark)]',
    subheading: 'text-sm sm:text-base text-[var(--color-medium-gray)]',
    body: 'text-sm sm:text-base text-[var(--color-deep-blue)] dark:text-[var(--color-text-on-dark)]',
    caption: 'text-xs sm:text-sm text-[var(--color-medium-gray)]',
  };

  return <p className={`${styles[variant]} ${className}`}>{children}</p>;
};
