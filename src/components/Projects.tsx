import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsDialog } from './ProjectDetailsDialog';
import { ScrollHeading } from './motion/ScrollHeading';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-[#f1f1f0] dark:bg-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <ScrollHeading label="Projects" />
          <h2 className="text-3xl sm:text-4xl font-bold text-notion-black dark:text-white mb-3">
            Featured Work
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl text-justify leading-loose">
            A curated set of projects across full-stack development, applied technology, and AI, 
            blending technical depth with practical, real-world solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={() => handleViewDetails(project)}
              isAnyHovered={hoveredId !== null}
              isThisHovered={hoveredId === project.id}
              onHover={(id) => setHoveredId(id)}
            />
          ))}
        </div>
      </div>

      <ProjectDetailsDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
}
