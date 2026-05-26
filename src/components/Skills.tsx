import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { SkillGroup } from './SkillGroup';
import { ScrollHeading } from './motion/ScrollHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';

const allSkills = skillGroups.flatMap((g) => g.skills);
const marqueeSkills = [...allSkills, ...allSkills];

export function Skills() {
  const reduced = useReducedMotion();

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
          <ScrollHeading label="Skills" />
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

        {/* Skill Marquee */}
        {!reduced && (
          <div className="mt-12 overflow-hidden border-t border-b border-gray-200 dark:border-white/10 py-4 group/marquee">
            <div className="marquee-track flex gap-4 w-max group-hover/marquee:[animation-play-state:paused]">
              {marqueeSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap
                             bg-gray-100 text-gray-700
                             dark:bg-white/10 dark:text-gray-300
                             border border-[#e9e9e7] dark:border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
