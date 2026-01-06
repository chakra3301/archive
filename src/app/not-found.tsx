import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-normal text-charcoal mb-4" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          404
        </h1>
        <p className="text-charcoal mb-8">Page not found</p>
        <Link
          href="/"
          className="text-sm text-dark-gray hover:text-charcoal transition-colors"
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

