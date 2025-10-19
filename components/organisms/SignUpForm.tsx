import React from 'react';
import { FormField } from '../molecules/FormField';
import { ButtonWrapper } from '../molecules/ButtonWrapper';

export const SignUpForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <FormField id="fullName" placeholder="Nome Completo" />
      <FormField id="cpf" placeholder="CPF" />
      <FormField id="email" placeholder="Email" type="email" />
      <FormField id="password" placeholder="Senha" type="password" />
      <ButtonWrapper type="submit">Criar Conta</ButtonWrapper>
    </form>
  );
};
