import React from 'react';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { ErrorText } from '../atoms/ErrorText';

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  type = 'text',
  required = false,
  error,
  value,
  onChange,
}) => (
  <div className="w-full">
    <Label htmlFor={id} required={required}>
      {label}
    </Label>
    <Input
      id={id}
      placeholder={placeholder}
      type={type}
      hasError={!!error}
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <ErrorText>{error}</ErrorText>}
  </div>
);
