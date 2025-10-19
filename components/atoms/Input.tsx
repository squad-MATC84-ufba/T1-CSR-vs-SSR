import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`
        w-full
        h-12 sm:h-14
        px-3 sm:px-4
        rounded-lg
        border-none
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[var(--color-subtle-gold)]
        bg-[var(--color-input-bg-light)]
        text-[var(--color-text-on-light)]
        placeholder-[var(--color-medium-gray)]
        dark:bg-[var(--color-input-bg-dark)]
        dark:text-[var(--color-text-on-dark)]
        dark:placeholder-[var(--color-medium-gray)]
        ${className}
      `}
    />
  );
};
