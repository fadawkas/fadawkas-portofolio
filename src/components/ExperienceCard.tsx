import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div
        className="pt-6 border-t border-gray-300 dark:border-white/20"
      >
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-notion-black dark:text-white">
              <Building2 className="w-4 h-4" />
              <span className="font-semibold">{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-col xl:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
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
