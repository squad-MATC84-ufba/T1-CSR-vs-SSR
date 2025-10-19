'use client';
import React from 'react';
import { Logo } from '../organisms/Logo';
import { SignUpForm } from '../organisms/SignUpForm';

export interface SignUpTemplateProps {
  heading: string;
  subheading: string;
  footerText: string;
  footerLink: string;
}

export const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  heading,
  subheading,
  footerText,
  footerLink,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--color-light-gray)] dark:bg-[var(--color-deep-blue)]">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Logo />
        </div>
        <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-deep-blue)] dark:text-[var(--color-text-on-dark)]">
            {heading}
          </h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-[var(--color-medium-gray)]">
            {subheading}
          </p>
        </div>
        <SignUpForm />
        <p className="text-center text-xs sm:text-sm mt-4 sm:mt-6 text-[var(--color-medium-gray)]">
          {footerText}{' '}
          <a className="font-semibold hover:underline text-[var(--color-subtle-gold)]" href="#">
            {footerLink}
          </a>
        </p>
      </div>
    </div>
  );
};
