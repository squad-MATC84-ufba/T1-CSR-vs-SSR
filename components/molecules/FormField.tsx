import React from 'react';
import { Input } from '../atoms/Input';

interface FormFieldProps {
  id: string;
  placeholder: string;
  type?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ id, placeholder, type = 'text' }) => (
  <Input id={id} placeholder={placeholder} type={type} />
);
