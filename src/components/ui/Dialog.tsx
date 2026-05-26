import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function getLenis() {
  return (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
}

export function Dialog({ isOpen, onClose, children }: DialogProps) {
  useEffect(() => {
    if (!isOpen) return;

    const lenis = getLenis();
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    lenis?.stop();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow || 'unset';
      lenis?.start();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-3xl max-h-[90vh] min-h-0 overflow-y-auto overscroll-contain pointer-events-auto
                         rounded-3xl bg-white dark:bg-dark-card
                         border border-light-border dark:border-dark-border
                         ring-1 ring-black/5 dark:ring-white/5
                         shadow-[0_25px_70px_-20px_rgba(0,0,0,0.45)]
                         [&::-webkit-scrollbar]:w-2
                         [&::-webkit-scrollbar-thumb]:rounded-full
                         [&::-webkit-scrollbar-thumb]:bg-gray-300
                         dark:[&::-webkit-scrollbar-thumb]:bg-white/10"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-10 p-2 rounded-full
                           bg-white/80 dark:bg-black/60 backdrop-blur-md
                           text-gray-700 dark:text-gray-200
                           hover:bg-white dark:hover:bg-black/80
                           border border-white/30 dark:border-white/10
                           transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>

              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
