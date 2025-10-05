'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ClientSide() {
  const [helloWorld, setHelloWorld] = useState<string | null>(null);
  const apiUrl = 'http://localhost:3000/api/hello-world';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Network response failed');
        return response.json();
      })
      .then((data) => setHelloWorld(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-xl shadow-md text-center">
      <h1 className="text-2xl font-bold text-green-600 mb-4">
        Client Side Rendering
      </h1>

      <p className="text-gray-700 text-lg font-bold mb-6">
        {helloWorld ?? 'Loading...'}
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
