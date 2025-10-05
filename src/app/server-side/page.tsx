import Link from 'next/link';

export default async function ServerSide() {
  const apiUrl = 'http://localhost:3000/api/hello-world';
  const res = await fetch(apiUrl, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const helloWorld: { message: string } = await res.json();

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-xl shadow-md text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Server Side Rendering
      </h1>
      <p className="text-gray-700 text-lg font-bold mb-6">
        {helloWorld.message}
      </p>

      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors underline underline-offset-2"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
