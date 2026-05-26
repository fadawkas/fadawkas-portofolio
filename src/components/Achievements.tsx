import { motion } from 'framer-motion';
import { Trophy, Award, GraduationCap } from 'lucide-react';
import { achievements } from '../data/achievements';
import { ScrollHeading } from './motion/ScrollHeading';

const iconMap: Record<string, React.ElementType> = {
  'Best Paper - SENAMIKA 2024': Trophy,
  'Best Presenter - SENAMIKA 2024': Award,
  'GPA 3.87 - Informatics': GraduationCap,
};

export function Achievements() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <ScrollHeading label="Achievements" />
          <h2 className="text-3xl sm:text-4xl font-bold text-notion-black dark:text-white">
            Recognition
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.title] || Trophy;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="p-6 rounded-xl text-center
                           bg-white dark:bg-white/5
                           border border-gray-200 dark:border-white/10
                           hover:border-gray-300 dark:hover:border-white/20
                           transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100 dark:bg-white/10">
                  <Icon className="w-5 h-5 text-notion-black dark:text-white" />
                </div>
                <h3 className="text-lg font-bold text-notion-black dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
                {achievement.year && (
                  <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                    {achievement.year}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
