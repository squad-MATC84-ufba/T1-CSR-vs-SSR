import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-xl shadow-md flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Rendering Options
      </h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/server-side"
            className="inline-block w-full text-center bg-blue-300 hover:bg-blue-400 text-blue-800 font-medium py-2 px-4 rounded transition-colors"
          >
            Server Side Rendering
          </Link>
        </li>
        <li>
          <Link
            href="/client-side"
            className="inline-block w-full text-center bg-green-300 hover:bg-green-400 text-green-800 font-medium py-2 px-4 rounded transition-colors"
          >
            Client Side Rendering
          </Link>
        </li>
      </ul>
    </div>
  )
}
