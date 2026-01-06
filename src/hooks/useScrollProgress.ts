'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track scroll progress as a percentage (0-100)
 * @returns number representing scroll progress percentage
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    // Set initial progress
    updateProgress();

    // Update on scroll
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}
