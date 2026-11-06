import { motion } from 'framer-motion';
import { Trophy, Award, GraduationCap } from 'lucide-react';
import { achievements } from '../data/achievements';

const iconMap: Record<string, React.ElementType> = {
  'Best Paper - SENAMIKA 2024': Trophy,
  'Best Presenter - SENAMIKA 2024': Award,
  'GPA 3.87 - Informatics': GraduationCap,
};

export function Achievements() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold uppercase tracking-tight text-notion-black dark:text-white">
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
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="pt-6 border-t border-gray-300 dark:border-white/20"
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
                  <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
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
