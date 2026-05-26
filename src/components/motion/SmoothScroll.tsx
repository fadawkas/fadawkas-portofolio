import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Expose lenis so Navbar can use it for anchor scrolling
    (window as unknown as Record<string, unknown>).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as Record<string, unknown>).__lenis;
    };
  }, [reduced]);

  return <>{children}</>;
}
