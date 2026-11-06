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
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="min-w-0 py-2"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-lg ${bgClass}`}>
          <Icon className="w-5 h-5 text-notion-black dark:text-white" />
        </div>
        <h3 className="text-lg font-bold text-notion-black dark:text-white">
          {group.name}
        </h3>
      </div>

      {/* Skills */}
      <ul aria-label={`${group.name} technologies`} className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="px-2.5 py-1 text-sm leading-relaxed rounded-md border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
