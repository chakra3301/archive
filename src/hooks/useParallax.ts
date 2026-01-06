'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Hook for parallax scroll effects
 * @param speed - Parallax speed multiplier (default: 0.5)
 * @returns ref to attach to element and the parallax offset value
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;

      // Calculate parallax offset
      const parallax = scrolled * speed;
      setOffset(parallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}
