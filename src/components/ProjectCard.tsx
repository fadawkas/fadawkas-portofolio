import { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: () => void;
  isAnyHovered?: boolean;
  isThisHovered?: boolean;
  onHover?: (id: string | null) => void;
}

export function ProjectCard({ project, index, onViewDetails, isAnyHovered, isThisHovered, onHover }: ProjectCardProps) {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);

  const rotateX = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 25 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(-py * 12);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    onHover?.(null);
  };

  const dimmed = isAnyHovered && !isThisHovered;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      animate={{
        opacity: dimmed ? 0.5 : 1,
        filter: dimmed ? 'grayscale(0.4)' : 'grayscale(0)',
      }}
      style={reduced ? {} : { rotateX, rotateY, transformPerspective: 1000, transformOrigin: 'center' }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => onHover?.(project.id)}
      onMouseLeave={onMouseLeave}
      className="group flex flex-col overflow-hidden rounded-xl
                 bg-white dark:bg-dark-card
                 border border-[#e9e9e7] dark:border-dark-border
                 hover:border-gray-300 dark:hover:border-white/20
                 hover:shadow-sm
                 transition-colors duration-200"
    >
      {/* Image Carousel */}
      <div className="relative">
        <ProjectCarousel images={project.images} projectName={project.name} />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-medium rounded-full
                           bg-white/90 dark:bg-dark-card/90
                           border border-[#e9e9e7] dark:border-dark-border
                           text-gray-700 dark:text-gray-300
                           backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold text-notion-black dark:text-white leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md
                         bg-[#f1f1f0] dark:bg-white/10
                         border border-[#e9e9e7] dark:border-white/10
                         text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlight */}
        <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed italic">
          {project.highlight}
        </p>

        {/* Action row */}
        <div className="flex items-center gap-3 pt-1 mt-auto">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold
                       bg-notion-black hover:bg-gray-800 text-white rounded-lg
                       transition-colors duration-200"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <button
            onClick={onViewDetails}
            className="inline-flex items-center gap-1 text-sm font-medium
                       text-gray-500 dark:text-gray-400
                       hover:text-notion-black dark:hover:text-white
                       transition-colors duration-200 cursor-pointer group/btn"
          >
            Read more
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-150" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
