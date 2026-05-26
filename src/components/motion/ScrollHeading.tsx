import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ScrollHeadingProps {
  label: string;
  className?: string;
}

export function ScrollHeading({ label, className = '' }: ScrollHeadingProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ['0.15em', '0.35em']);

  const baseClass = `text-xs font-semibold uppercase text-gray-400 mb-3 ${className}`;

  if (reduced) {
    return <p className={baseClass}>{label}</p>;
  }

  return (
    <motion.p
      ref={ref}
      className={baseClass}
      style={{ opacity, letterSpacing }}
    >
      {label}
    </motion.p>
  );
}
