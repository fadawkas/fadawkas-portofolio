import { motion } from 'framer-motion';
import { SkillGroup as SkillGroupType } from '../data/skills';
import { Cpu, Server, Layout, Wrench } from 'lucide-react';

interface SkillGroupProps {
  group: SkillGroupType;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  'AI Engineering': Cpu,
  'Backend': Server,
  'Frontend': Layout,
  'DevOps & Tools': Wrench,
};

const bgMap: Record<string, string> = {
  'AI Engineering': 'bg-gray-100 dark:bg-white/10',
  'Backend': 'bg-gray-100 dark:bg-white/10',
  'Frontend': 'bg-gray-100 dark:bg-white/10',
  'DevOps & Tools': 'bg-gray-100 dark:bg-white/10',
};

export function SkillGroup({ group, index }: SkillGroupProps) {
  const Icon = iconMap[group.name] || Wrench;
  const bgClass = bgMap[group.name] || 'bg-gray-100 dark:bg-white/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-xl
                 bg-white dark:bg-white/5
                 border border-gray-200 dark:border-white/10
                 hover:border-gray-300 dark:hover:border-white/20
                 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2.5 rounded-lg ${bgClass}`}>
          <Icon className="w-5 h-5 text-notion-black dark:text-white" />
        </div>
        <h3 className="text-lg font-bold text-notion-black dark:text-white">
          {group.name}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm font-medium rounded-lg
                       bg-gray-100 text-gray-700
                       dark:bg-white/10 dark:text-gray-300
                       hover:bg-gray-200 dark:hover:bg-white/20
                       transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
