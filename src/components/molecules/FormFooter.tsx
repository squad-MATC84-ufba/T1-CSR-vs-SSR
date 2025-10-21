import React from 'react';
import { Text } from '../atoms/Text';

interface FormFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export const FormFooter: React.FC<FormFooterProps> = ({ 
  text, 
  linkText, 
  linkHref 
}) => (
  <Text variant="caption" className="text-center mt-6">
    {text}{' '}
    <a 
      href={linkHref}
      className="font-semibold hover:underline text-[var(--color-subtle-gold)]"
    >
      {linkText}
    </a>
  </Text>
);