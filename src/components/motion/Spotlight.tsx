import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Spotlight() {
  const reduced = useReducedMotion();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    // Disable on touch-only devices that have no pointer
    if (window.matchMedia('(hover: none)').matches) return;

    const el = divRef.current;
    if (!el) return;

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty('--spotlight-x', `${e.clientX}px`);
        el.style.setProperty('--spotlight-y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={divRef}
      aria-hidden
      className="spotlight-radial pointer-events-none"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        '--spotlight-x': '-9999px',
        '--spotlight-y': '-9999px',
      } as React.CSSProperties}
    />
  );
}
