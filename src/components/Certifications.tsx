import { motion } from 'framer-motion';
import { FileCheck } from 'lucide-react';
import { certifications } from '../data/certifications';

export function Certifications() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Certifications
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-notion-black dark:text-white">
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
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-5 rounded-xl
                         bg-white dark:bg-white/5
                         border border-gray-200 dark:border-white/10
                         hover:border-gray-300 dark:hover:border-white/20
                         transition-all duration-300"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-white/10">
                  <FileCheck className="w-5 h-5 text-notion-black dark:text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-notion-black dark:text-white text-sm mb-1 truncate">
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
