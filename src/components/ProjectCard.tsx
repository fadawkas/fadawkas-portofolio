import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { SystemFlow } from './SystemFlow';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  compact?: boolean;
  onViewDetails: () => void;
}

export function ProjectCard({ project, featured = false, compact = false, onViewDetails }: ProjectCardProps) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-card ${featured ? 'md:grid md:grid-cols-[1.15fr_1fr]' : 'flex flex-col'}`}>
      <div className={featured ? 'min-w-0 bg-gray-50 dark:bg-black/10 md:flex md:items-center p-3 sm:p-5' : 'min-w-0'}>
        <div className="w-full overflow-hidden rounded-lg">
          <ProjectCarousel images={project.images} projectName={project.name} />
        </div>
      </div>
      <div className={`flex flex-col items-start gap-4 ${featured ? 'p-6 lg:p-10' : 'p-5 sm:p-6'}`}>
        <span className="text-sm text-gray-600 dark:text-gray-300">{project.category}</span>
        <h3 className={`font-semibold leading-tight tracking-tight text-notion-black dark:text-white ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">{project.description}</p>
        {!compact && (
          <ul aria-label="Technologies" className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-300">
            {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        )}
        <div className="w-full border-t border-gray-200 dark:border-white/10 pt-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{project.highlightType}</p>
          <p className="text-sm font-medium leading-relaxed text-gray-800 dark:text-gray-100">{project.highlight}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
          <button
            onClick={onViewDetails}
            aria-label={`View case study: ${project.name}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-notion-black text-white dark:bg-white dark:text-gray-900 px-5 py-2 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            View case study <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
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
      {featured && project.systemFlow && (
        <div className="md:col-span-2 border-t border-gray-200 dark:border-white/10 p-6 lg:px-10">
          <SystemFlow steps={project.systemFlow} />
        </div>
      )}
    </article>
  );
}
