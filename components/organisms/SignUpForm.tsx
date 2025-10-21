'use client';
import React, { useState } from 'react';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';

interface FormData {
  fullName: string;
  cpf: string;
  email: string;
  password: string;
}

interface FormErrors {
  fullName?: string;
  cpf?: string;
  email?: string;
  password?: string;
}

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    cpf: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome completo é obrigatório';
    }

    if (!formData.cpf.trim()) {
      newErrors.cpf = 'CPF é obrigatório';
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.cpf)) {
      newErrors.cpf = 'CPF inválido (formato: 000.000.000-00)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Senha deve ter no mínimo 8 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      // Handle success (redirect, show message, etc.)
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="fullName"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        value={formData.fullName}
        onChange={handleChange('fullName')}
        error={errors.fullName}
        required
      />
      
      <FormField
        id="cpf"
        label="CPF"
        placeholder="000.000.000-00"
        value={formData.cpf}
        onChange={handleChange('cpf')}
        error={errors.cpf}
        required
      />
      
      <FormField
        id="email"
        label="Email"
        placeholder="seu@email.com"
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
        error={errors.email}
        required
      />
      
      <FormField
        id="password"
        label="Senha"
        placeholder="Mínimo 8 caracteres"
        type="password"
        value={formData.password}
        onChange={handleChange('password')}
        error={errors.password}
        required
      />
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Criando...' : 'Criar Conta'}
      </Button>
    </form>
  );
};
