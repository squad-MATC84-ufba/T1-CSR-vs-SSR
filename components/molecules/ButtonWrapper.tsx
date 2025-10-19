import React from 'react';
import { Button } from '../atoms/Button';

interface ButtonWrapperProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children, onClick, type }) => (
  <Button onClick={onClick} type={type}>{children}</Button>
);
