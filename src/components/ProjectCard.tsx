import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectCarousel } from './ProjectCarousel';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: () => void;
}

export function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-xl
                 bg-white dark:bg-white/5
                 border border-gray-200 dark:border-white/10
                 hover:border-gray-300 dark:hover:border-white/20
                 transition-all duration-300"
    >
      {/* Image Carousel */}
      <div className="relative group">
        <ProjectCarousel images={project.images} projectName={project.name} />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full
                           bg-notion-black/90 text-white">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md
                         bg-gray-100 text-gray-700
                         dark:bg-white/10 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlight */}
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg
                        bg-gray-100 dark:bg-white/10
                        border border-gray-200 dark:border-white/10">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {project.highlight}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2 mt-auto">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                       bg-gray-900 dark:bg-white text-white dark:text-gray-900
                       rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100
                       transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <button
            onClick={onViewDetails}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                       bg-transparent border border-gray-300 dark:border-white/20
                       text-gray-700 dark:text-gray-300
                       rounded-lg hover:bg-gray-50 dark:hover:bg-white/5
                       transition-colors duration-200 cursor-pointer"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
