import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full h-12 sm:h-14
        rounded-lg
        font-bold
        transition-all duration-300
        hover:opacity-90
        focus:outline-none focus:ring-2 focus:ring-subtle-gold
        bg-subtle-gold
        text-deep-blue 
        dark:bg-subtle-gold
        dark:text-deep-blue
        ${className}
      `}
    >
      {children}
    </button>
  );
};
