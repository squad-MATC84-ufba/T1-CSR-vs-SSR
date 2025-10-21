'use client';
import React from 'react';
import { Logo } from '../organisms/Logo';
import { PageHeader } from '../molecules/PageHeader';
import { SignUpForm } from '../organisms/SignUpForm';
import { FormFooter } from '../molecules/FormFooter';

export interface SignUpTemplateProps {
  heading: string;
  subheading: string;
  footerText: string;
  footerLink: string;
  footerLinkHref?: string;
}

export const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
  heading,
  subheading,
  footerText,
  footerLink,
  footerLinkHref = '/login',
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--color-light-gray)] dark:bg-[var(--color-deep-blue)]">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Logo />
        </div>
        
        <PageHeader heading={heading} subheading={subheading} />
        
        <SignUpForm />
        
        <FormFooter 
          text={footerText}
          linkText={footerLink}
          linkHref={footerLinkHref}
        />
      </div>
    </div>
  );
};