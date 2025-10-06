'use client';

import { useState, useEffect } from 'react';

// Reutilização da mesma interface para a resposta da API
interface ApiResponse {
  message: string;
}

export default function PageCSR() {
  // Tipagem do estado 'data'. Ele pode ser 'ApiResponse' ou 'null' (estado inicial).
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/hello-world')
      .then((res) => res.json())
      // Garantia de que os dados recebidos da API são tratados como do tipo ApiResponse.
      .then((apiData: ApiResponse) => {
        setData(apiData);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Exemplo de CSR (Client-Side Rendering) com TypeScript</h1>
      <p>
        Esta mensagem foi buscada pelo seu navegador DEPOIS que a página
        inicial carregou.
      </p>
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}>
        <strong>Mensagem da API:</strong>{' '}
        {/*
          Uso do "optional chaining" (data?.message) porque o TypeScript
          sabe que 'data' pode ser nulo e nos força a lidar com isso.
        */}
        {loading ? 'Carregando...' : data?.message}
      </div>
    </main>
  );
}