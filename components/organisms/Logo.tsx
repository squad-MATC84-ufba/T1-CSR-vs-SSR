import React from 'react';

export const Logo: React.FC = () => (
  <div className="p-3 rounded-xl bg-[var(--color-deep-blue)] dark:bg-[var(--color-subtle-gold)]">
    <svg fill="none" height="40" viewBox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM36 36H12V30C12 25.0294 17.3726 21 24 21C30.6274 21 36 25.0294 36 30V36Z"
        fill="#F8FAFC"
      />
    </svg>
  </div>
);
