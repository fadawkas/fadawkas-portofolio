import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
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

function SectionHeader({ label }: { label: string }) {
  return (
    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      {label}
    </h3>
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
      if (!dialogRef.current.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
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
              className="relative flex w-full max-w-5xl max-h-[90dvh] min-h-0 flex-col overflow-hidden
                         bg-white dark:bg-dark-card
                         rounded-3xl
                         shadow-[0_25px_70px_-20px_rgba(0,0,0,0.45)]
                         border border-light-border dark:border-dark-border
                         ring-1 ring-black/5 dark:ring-white/5
                         pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-start gap-4 border-b border-light-border dark:border-dark-border px-5 py-5 sm:px-10 sm:py-7">
                <div className="min-w-0 flex-1 space-y-2">
                  <h2 id="project-dialog-title" className="text-xl sm:text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{project.category}</p>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="project-dialog-scroll min-h-0 overflow-y-auto overscroll-contain" data-lenis-prevent>
                <div className="px-5 py-7 sm:px-10 sm:py-9">
                  <p className="max-w-[65ch] text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700 dark:text-gray-200">
                    {project.description}
                  </p>
                </div>

                <div className="border-y border-gray-200 dark:border-white/10 bg-[#e9e9e7] dark:bg-black/20 p-4 sm:px-10 sm:py-8">
                  <div className="overflow-hidden rounded-lg border border-black/10 dark:border-white/10 shadow-sm">
                    <ProjectCarousel images={project.images} projectName={project.name} isDialog />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10 px-5 py-8 sm:px-10 sm:py-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-10">
                  <div className="min-w-0 space-y-9">
                    <section className="space-y-4">
                      <SectionHeader label="Problem" />
                      <p className="text-base text-gray-700 dark:text-gray-200 leading-7">{project.problem}</p>
                    </section>
                    <section className="space-y-4 border-t border-gray-200 dark:border-white/10 pt-8">
                      <SectionHeader label="Engineering approach" />
                      <p className="text-base text-gray-700 dark:text-gray-200 leading-7 text-left sm:text-justify">{project.engineering}</p>
                    </section>

                    <section aria-label={project.highlightType} className="bg-notion-black dark:bg-[#e9e9e7] p-6 sm:p-7 rounded-xl">
                      <p className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight text-white dark:text-notion-black">{project.highlight}</p>
                      <h3 className="mt-5 text-sm font-medium text-gray-300 dark:text-gray-700">{project.highlightType}</h3>
                      {project.highlightType === 'Reported metric' && (
                        <p className="mt-3 text-sm leading-relaxed text-gray-300 dark:text-gray-700">Reported project evaluation result. See the repository for evaluation details and context.</p>
                      )}
                    </section>

                    {project.limitation && (
                      <p className="border-t border-gray-200 dark:border-white/10 pt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                        {project.limitation}
                      </p>
                    )}
                  </div>

                  <aside aria-label="Project details" className="min-w-0 border-t border-gray-200 dark:border-white/10 pt-8 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                    <div className="space-y-8">
                      <section className="space-y-4">
                        <SectionHeader label="Technologies" />
                        <ul aria-label="Technologies" className="divide-y divide-gray-200 dark:divide-white/10">
                          {project.techStack.map((tech) => (
                            <li key={tech} className="py-2.5 text-sm text-gray-700 dark:text-gray-300">{tech}</li>
                          ))}
                        </ul>
                      </section>

                      <section className="space-y-4 border-t border-gray-200 dark:border-white/10 pt-6">
                        <SectionHeader label="Explore the project" />
                        <div className="flex flex-col items-start gap-3">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-notion-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
                            >
                              <Github aria-hidden="true" className="w-4 h-4" />
                              View on GitHub
                              <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.links.demo && project.links.demo !== '#' && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10 transition-colors"
                            >
                              <ExternalLink aria-hidden="true" className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </section>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  ), document.body);
}
