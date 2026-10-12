import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Code2, Sparkles, Link2 } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ProjectDetailsDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  openerRef: React.RefObject<HTMLElement | null>;
}

function getLenis() {
  return (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
}

function SectionHeader({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-1 h-4 rounded-full bg-notion-black dark:bg-white" />
      <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {label}
      </h3>
    </div>
  );
}

export function ProjectDetailsDialog({ project, isOpen, onClose, openerRef }: ProjectDetailsDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const lenis = getLenis();
    const previousOverflow = document.body.style.overflow;
    const root = document.getElementById('root');
    const previousInert = root?.inert ?? false;
    const opener = openerRef.current;

    document.body.style.overflow = 'hidden';
    if (root) root.inert = true;
    lenis?.stop();
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow || 'unset';
      if (root) root.inert = previousInert;
      lenis?.start();
      window.removeEventListener('keydown', onKeyDown);
      requestAnimationFrame(() => opener?.focus());
    };
  }, [isOpen, onClose, openerRef]);

  if (!project) return null;

  return createPortal((
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 40, filter: 'blur(4px)' }}
            transition={{ duration: reduced ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none overflow-hidden"
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              tabIndex={-1}
              data-lenis-prevent
              className="relative w-full max-w-4xl max-h-[90dvh] min-h-0 overflow-y-auto overscroll-contain
                         bg-white dark:bg-dark-card
                         rounded-3xl
                         shadow-[0_25px_70px_-20px_rgba(0,0,0,0.45)]
                         border border-light-border dark:border-dark-border
                         ring-1 ring-black/5 dark:ring-white/5
                         pointer-events-auto
                         [&::-webkit-scrollbar]:w-2
                         [&::-webkit-scrollbar-thumb]:rounded-full
                         [&::-webkit-scrollbar-thumb]:bg-gray-300
                         dark:[&::-webkit-scrollbar-thumb]:bg-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Title */}
              <div className="sticky top-0 z-30 flex items-center gap-4 px-6 sm:px-8 py-4 bg-white/95 dark:bg-dark-card/95 backdrop-blur-md border-b border-light-border dark:border-dark-border">
                <h2 id="project-dialog-title" className="flex-1 text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {project.name}
                </h2>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="shrink-0 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/30 to-transparent" />
                <ProjectCarousel images={project.images} projectName={project.name} isDialog />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full
                               bg-white/90 dark:bg-black/60 backdrop-blur-sm
                               border border-white/20
                               text-gray-800 dark:text-white"
                  >
                    {project.category}
                  </span>
                </div>

              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="p-6 sm:p-8 space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <section className="space-y-3">
                    <SectionHeader icon={Sparkles} label="Problem" />
                    <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">{project.problem}</p>
                  </section>
                  <section className="space-y-3">
                    <SectionHeader icon={Code2} label="Engineering approach" />
                    <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">{project.engineering}</p>
                  </section>
                </div>

                {/* Technologies + Key Result */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <SectionHeader icon={Code2} label="Technologies" />
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-sm font-medium rounded-md
                                     bg-[#f1f1f0] dark:bg-white/10
                                     border border-[#e9e9e7] dark:border-white/10
                                     text-gray-600 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <SectionHeader icon={Sparkles} label={project.highlightType} />
                    <div
                      className="flex gap-3 p-4 rounded-xl
                                 bg-[#f1f1f0]/80 dark:bg-white/[0.04]
                                 border border-[#e9e9e7] dark:border-dark-border
                                 border-l-2 border-l-notion-black dark:border-l-white"
                    >
                      <Sparkles className="w-5 h-5 shrink-0 text-notion-black dark:text-white mt-0.5" />
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white leading-relaxed">
                        {project.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <SectionHeader icon={Link2} label="Links" />
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
                                   bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                   rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100
                                   hover:-translate-y-0.5 active:translate-y-0
                                   transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    )}
                    {project.links.demo && project.links.demo !== '#' && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
                                   bg-transparent border border-gray-300 dark:border-gray-600
                                   text-gray-700 dark:text-gray-300
                                   rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800
                                   hover:-translate-y-0.5 active:translate-y-0
                                   transition-all duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  ), document.body);
}
