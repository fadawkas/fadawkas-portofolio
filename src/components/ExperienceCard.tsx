import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative"
    >
      <div
        className="p-6 lg:p-8 rounded-xl
                   bg-white dark:bg-white/5
                   border border-gray-200 dark:border-white/10
                   hover:border-gray-300 dark:hover:border-white/20
                   transition-all duration-300"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-notion-black dark:text-white">
              <Building2 className="w-4 h-4" />
              <span className="font-semibold">{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
          {experience.companyDescription}
        </p>

        {/* Achievements */}
        <ul className="space-y-3">
          {experience.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-notion-black dark:bg-white flex-shrink-0" />
              <span className="text-sm leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
