import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error 404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}
