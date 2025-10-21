import React from 'react';
import { SignUpTemplate } from '../../../components/templates/SignUpTemplate';

const SignUpPage: React.FC = () => {
  return (
    <SignUpTemplate
      heading="Criar sua conta"
      subheading="Junte-se ao UFBANK e tome o controle das suas finanças."
      footerText="Já tem uma conta?"
      footerLink="Faça login"
      footerLinkHref="/login"
    />
  );
};

export default SignUpPage;