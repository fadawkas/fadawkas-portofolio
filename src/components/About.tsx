import { motion } from 'framer-motion';
import fadawkasImg from '../assets/Fadawkas.jpeg';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-notion-black dark:text-white">
            Turning Complex Ideas Into{' '}
            <span className="text-gray-500">Reliable Digital Products</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
              <img
                src={fadawkasImg}
                alt="Muhammad Fadawkas Oemarki"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Bio */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I am a fresh graduate in Informatics from Universitas Pembangunan Nasional "Veteran" Jakarta
                with a strong focus on full-stack development and AI-powered systems. My work combines
                modern web development, backend architecture, LLM integration, RAG pipelines, and AI workflow automation.
              </p>
              <p>
                Currently working as an AI Engineer at Neuram, where I build and configure AI agent workflows,
                tool integrations, and automated task execution pipelines for enterprise clients. Previously,
                I interned at Kuasar as a Backend & AI Engineer, developing an AI-powered underwriting platform
                with LangGraph and RAG pipelines.
              </p>
              <p>
                I am passionate about creating reliable, automation-driven solutions that connect modern web systems
                with intelligent AI capabilities. My research on flood prediction using SVM and KNN algorithms
                earned me Best Presenter and Best Paper awards at SENAMIKA 2024.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1">5+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">AI Projects</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1">1</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Year Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1">3.87</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">GPA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
