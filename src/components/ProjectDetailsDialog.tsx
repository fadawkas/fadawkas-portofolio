import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectCarousel } from './ProjectCarousel';

interface ProjectDetailsDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsDialog({ project, isOpen, onClose }: ProjectDetailsDialogProps) {
  if (!project) return null;

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
            className="fixed inset-0 z-50 bg-black/80"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
                         bg-white dark:bg-dark-card
                         rounded-2xl shadow-2xl
                         border border-light-border dark:border-dark-border
                         pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full
                           bg-gray-100 dark:bg-neutral-800
                           text-gray-600 dark:text-gray-300
                           hover:bg-gray-200 dark:hover:bg-neutral-700
                           border border-light-border dark:border-dark-border
                           transition-colors duration-200
                           shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Carousel */}
              <div className="relative">
                <ProjectCarousel images={project.images} projectName={project.name} />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full
                                   bg-gray-900 dark:bg-white
                                   text-white dark:text-gray-900">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {project.name}
                </h2>

                {/* Full Description */}
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {project.detailDescription}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium rounded-md
                                   bg-gray-100 text-gray-700
                                   dark:bg-white/10 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg
                                bg-gray-50 dark:bg-neutral-800/50
                                border border-light-border dark:border-dark-border">
                  <span className="text-sm font-semibold text-gray-700 dark:text-white">
                    {project.highlight}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-light-border dark:border-dark-border">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
                                 bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100
                                 transition-colors duration-200"
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
                                 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
                               text-gray-600 dark:text-gray-400
                               hover:text-gray-900 dark:hover:text-white
                               transition-colors duration-200 ml-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
