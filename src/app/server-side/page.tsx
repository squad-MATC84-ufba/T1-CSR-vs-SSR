interface ApiResponse {
  message: string;
}

// Tipagem do retorno da função para ser uma "Promise" do mesmo tipo.
async function getData(): Promise<ApiResponse> {
  const res = await fetch('http://localhost:3000/api/hello-world', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Falha ao buscar dados da API');
  }
  // O TypeScript agora sabe que res.json() deve retornar algo compatível com ApiResponse
  return res.json();
}

export default async function PageSSR() {
  // Inferência correta da variável "data"
  const data = await getData();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Exemplo de SSR (Server-Side Rendering) com TypeScript</h1>
      <p>
        Esta mensagem foi buscada no servidor ANTES da página ser enviada para
        o seu navegador.
      </p>
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}>
        <strong>Mensagem da API:</strong> {data.message}
      </div>
    </main>
  );
}