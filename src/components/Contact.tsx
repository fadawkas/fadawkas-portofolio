import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Download, ArrowRight } from 'lucide-react';
import { contactItems } from '../data/contact';

const iconMap: Record<string, React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  cv: Download,
};

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gray-50/50 dark:bg-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-notion-black dark:text-white mb-4">
              Let's build something{' '}
              <span className="text-gray-500">together.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I'm open to AI engineering, backend engineering, full-stack, and
              production AI workflow opportunities.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {contactItems.map((item, index) => {
              const Icon = iconMap[item.icon];
              const isCv = item.type === 'CV';

              return (
                <motion.a
                  key={item.type}
                  href={item.url}
                  download={isCv}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className={`group flex items-center gap-4 p-4 rounded-xl
                             border transition-all duration-300 ${
                               isCv
                                 ? 'bg-gray-900 border-transparent text-white hover:bg-gray-800'
                                 : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                             }`}
                >
                  <div
                    className={`p-2.5 rounded-lg ${
                      isCv
                        ? 'bg-white/20'
                        : 'bg-gray-100 dark:bg-white/10 group-hover:bg-gray-200 dark:group-hover:bg-white/20 transition-colors'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isCv
                          ? 'text-white'
                          : 'text-notion-black dark:text-white'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-xs mb-0.5 ${
                        isCv ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {item.type}
                    </div>
                    <div
                      className={`font-medium truncate ${
                        isCv ? 'text-white' : 'text-notion-black dark:text-white'
                      }`}
                    >
                      {item.label}
                    </div>
                  </div>
                  {!isCv && (
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-notion-black dark:group-hover:text-white transition-colors flex-shrink-0" />
                  )}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Or contact me directly at
            </p>
            <a
              href="https://wa.me/6285186861325"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold
                         text-notion-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300
                         transition-colors duration-200"
            >
              <Phone className="w-6 h-6" />
              +62 851-8686-1325
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
