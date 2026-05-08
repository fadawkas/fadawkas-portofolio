import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { SkillGroup } from './SkillGroup';

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
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
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-notion-black dark:text-white mb-4">
            Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
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
