import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface NumberTickerProps {
  target: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function NumberTicker({
  target,
  decimals = 0,
  suffix = '',
  duration = 1.4,
  className = '',
}: NumberTickerProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(target.toFixed(decimals));
      return;
    }

    const controls = animate(motionValue, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });

    return () => controls.stop();
  }, [inView, target, decimals, duration, motionValue, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}
