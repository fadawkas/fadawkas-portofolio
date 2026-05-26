import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface WordRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'p' | 'span';
  className?: string;
  delay?: number;
}

export function WordReveal({
  text,
  as: Tag = 'p',
  className = '',
  delay = 0,
}: WordRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(' ');

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={`${className} overflow-hidden`} style={{ display: 'block' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
