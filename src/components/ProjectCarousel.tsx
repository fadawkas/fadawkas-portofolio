import { useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ProjectCarouselProps {
  images: string[];
  projectName: string;
  isDialog?: boolean;
}

export function ProjectCarousel({ images, projectName, isDialog = false }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reduced = useReducedMotion();

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;

    const diffX = touchStart.current.x - e.changedTouches[0].clientX;
    const diffY = touchStart.current.y - e.changedTouches[0].clientY;
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) nextImage();
      else prevImage();
    }
    touchStart.current = null;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div
      role="region"
      aria-label={`${projectName} screenshots`}
      className={`group relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900 ${isDialog ? '' : 'rounded-t-xl'}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${projectName} screenshot ${currentIndex + 1}`}
          loading={isDialog ? 'eager' : 'lazy'}
          decoding="async"
          custom={direction}
          variants={slideVariants}
          initial={reduced ? false : 'enter'}
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30, duration: reduced ? 0 : undefined },
            opacity: { duration: reduced ? 0 : 0.2 },
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && <div className={`absolute inset-0 flex items-center justify-between p-3 transition-opacity duration-200 ${isDialog ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'} max-md:opacity-100`}>
        <button
          onClick={prevImage}
          aria-label={`Previous ${projectName} screenshot`}
          className="min-w-11 min-h-11 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm
                     hover:bg-black/70 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          aria-label={`Next ${projectName} screenshot`}
          className="min-w-11 min-h-11 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm
                     hover:bg-black/70 transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>}

      {/* Dot Indicators */}
      {images.length > 1 && <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 rounded-full bg-black/45 px-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            aria-label={`Show ${projectName} screenshot ${index + 1}`}
            aria-pressed={index === currentIndex}
            className={`min-w-8 min-h-8 flex items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
              index === currentIndex
                ? 'text-white'
                : 'text-white/70 hover:text-white'
            }`}
          ><span aria-hidden="true" className={`h-2 rounded-full ${index === currentIndex ? 'w-4 bg-white' : 'w-2 bg-current'}`} /></button>
        ))}
      </div>}
    </div>
  );
}
