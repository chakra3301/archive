import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-neutral-gray/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Minimal copyright */}
          <p
            className="text-xs text-dark-gray"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            © {currentYear}
          </p>

          {/* Minimal links */}
          <div className="flex gap-6">
            <a
              href="mailto:contact@example.com"
              className="text-xs text-dark-gray hover:text-charcoal transition-colors"
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Contact
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-dark-gray hover:text-charcoal transition-colors"
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
