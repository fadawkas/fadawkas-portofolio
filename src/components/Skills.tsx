import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { SkillGroup } from './SkillGroup';

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20 border-y border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold uppercase tracking-tight text-notion-black dark:text-white mb-4">
            Technologies
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Technologies and tools I use to build AI-powered and production-oriented applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.name} group={group} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
