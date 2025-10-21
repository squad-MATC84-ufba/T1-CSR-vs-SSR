import React from 'react';
import { Text } from '../atoms/Text';

interface PageHeaderProps {
  heading: string;
  subheading: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  heading, 
  subheading 
}) => (
  <div className="text-center mb-6 sm:mb-8">
    <Text variant="heading">{heading}</Text>
    <Text variant="subheading" className="mt-2">
      {subheading}
    </Text>
  </div>
);