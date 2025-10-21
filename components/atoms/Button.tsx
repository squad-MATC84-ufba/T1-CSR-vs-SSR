import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary',
}) => {
  const baseStyles = `
    hover:cursor-pointer
    w-full h-12 sm:h-14 rounded-lg font-bold
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-[var(--color-subtle-gold)]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: `
      bg-[var(--color-subtle-gold)] text-[var(--color-deep-blue)]
      hover:opacity-90
    `,
    secondary: `
      bg-[var(--color-deep-blue)] text-white
      hover:bg-opacity-90
    `,
    ghost: `
      bg-transparent border-2 border-[var(--color-subtle-gold)]
      text-[var(--color-subtle-gold)] hover:bg-[var(--color-subtle-gold)]
      hover:text-[var(--color-deep-blue)]
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};