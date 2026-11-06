import { useCallback, useRef, useState } from 'react';
import { projects, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsDialog } from './ProjectDetailsDialog';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openerRef = useRef<HTMLElement | null>(null);

  const handleViewDetails = useCallback((project: Project) => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedProject(project);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#f1f1f0] dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold uppercase tracking-tight text-notion-black dark:text-white mb-4">Projects</h2>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            A curated set of projects across full-stack development, applied technology, and AI,
            blending technical depth with practical, real-world solutions.
          </p>
        </div>
        <ProjectCard project={projects[0]} featured onViewDetails={() => handleViewDetails(projects[0])} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.slice(1, 3).map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={() => handleViewDetails(project)} />
          ))}
        </div>
        <div className="mt-14 lg:mt-16">
          <h3 className="text-2xl font-semibold tracking-tight text-notion-black dark:text-white mb-6">More projects & research</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.slice(3).map((project) => (
              <ProjectCard key={project.id} project={project} compact onViewDetails={() => handleViewDetails(project)} />
            ))}
          </div>
        </div>
      </div>
      <ProjectDetailsDialog project={selectedProject} isOpen={isDialogOpen} onClose={handleCloseDialog} openerRef={openerRef} />
    </section>
  );
}
