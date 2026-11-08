import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectCarousel } from './ProjectCarousel';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  compact?: boolean;
  onViewDetails: () => void;
}

export function ProjectCard({ project, featured = false, compact = false, onViewDetails }: ProjectCardProps) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card transition-colors hover:border-gray-400 dark:hover:border-white/30 ${featured ? 'md:grid md:grid-cols-[1.15fr_1fr]' : 'flex flex-col'}`}>
      <div className={`min-w-0 bg-light-card dark:bg-black/20 p-4 sm:p-6 ${featured ? 'md:flex md:items-center lg:p-8' : ''}`}>
        <div className="w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10 shadow-sm">
          <ProjectCarousel images={project.images} projectName={project.name} />
        </div>
      </div>
      <div className={`flex flex-1 flex-col items-start gap-5 ${featured ? 'p-6 lg:p-10' : 'p-6 sm:p-8'}`}>
        <div>
          <h3 className={`font-semibold leading-tight tracking-tight text-notion-black dark:text-white ${featured ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
            {project.name}
          </h3>
          <p className="mt-3 text-xs font-medium text-gray-600 dark:text-gray-400">{project.category}</p>
        </div>
        <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{project.description}</p>
        {!compact && (
          <ul aria-label="Technologies" className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-300">
            {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        )}
        <div className="w-full border-t border-gray-200 dark:border-white/10 pt-5">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{project.highlightType}</p>
          <p className="text-base font-semibold leading-relaxed tracking-tight text-notion-black dark:text-white">{project.highlight}</p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-3 mt-auto pt-3">
          <button
            onClick={onViewDetails}
            aria-label={`View case study: ${project.name}`}
            className="inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-notion-black dark:text-white underline-offset-4 hover:underline"
          >
            View case study
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-notion-black group-hover:bg-accent-hover transition-colors">
              <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
            </span>
          </button>
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              aria-label={`GitHub: ${project.name}`}
              className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-gray-700 dark:text-gray-200 underline-offset-4 hover:underline">
              <Github aria-hidden="true" className="w-4 h-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
