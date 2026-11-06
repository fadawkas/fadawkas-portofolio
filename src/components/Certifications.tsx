import { motion } from 'framer-motion';
import { FileCheck } from 'lucide-react';
import { certifications } from '../data/certifications';

export function Certifications() {
  return (
    <section className="pb-16 lg:pb-20">
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
            Credentials
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 py-5 border-t border-gray-200 dark:border-white/10"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-white/10">
                  <FileCheck className="w-5 h-5 text-notion-black dark:text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-notion-black dark:text-white text-sm mb-1 break-words">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {cert.issuer}
                  </p>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
