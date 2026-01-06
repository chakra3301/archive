'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Fade out when scrolling down, fade in when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-40"
        >
          <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            {/* Minimal brand */}
            <a
              href="#"
              className="text-sm text-charcoal hover:text-dark-gray transition-colors"
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Archive
            </a>

            {/* Minimal navigation */}
            <div className="flex gap-8">
              <a
                href="#gallery"
                className="text-sm text-charcoal hover:text-dark-gray transition-colors"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                Gallery
              </a>
              <a
                href="#about"
                className="text-sm text-charcoal hover:text-dark-gray transition-colors"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm text-charcoal hover:text-dark-gray transition-colors"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                Contact
              </a>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
