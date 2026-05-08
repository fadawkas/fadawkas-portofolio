import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { ExperienceCard } from './ExperienceCard';

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-gray-50/50 dark:bg-white/[0.02]"
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
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-notion-black dark:text-white mb-4">
            Work History
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Real-world engineering experience in AI workflow development,
            backend systems, and production-oriented infrastructure.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="w-3 h-3 rounded-full bg-notion-black dark:bg-white"
                  />
                </div>

                {/* Card Container */}
                <div
                  className={`${
                    index % 2 === 0
                      ? 'lg:col-start-1 lg:pr-12'
                      : 'lg:col-start-2 lg:pl-12'
                  }`}
                >
                  <ExperienceCard experience={experience} index={index} />
                </div>

                {/* Empty Space for Other Side */}
                <div
                  className={`hidden lg:block ${
                    index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
