import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsDialog } from './ProjectDetailsDialog';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      className="py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-notion-black dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of AI, backend, and full-stack projects I've built,
            ranging from RAG-powered legal systems to real-time monitoring
            platforms and machine learning applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <ProjectDetailsDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
}
