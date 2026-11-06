import { experiences } from '../data/experience';
import { ExperienceCard } from './ExperienceCard';

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold uppercase tracking-tight text-notion-black dark:text-white mb-4">Work history</h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              Engineering experience across agentic AI workflows, voice systems,
              backend integrations, RAG pipelines, and API development.
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
