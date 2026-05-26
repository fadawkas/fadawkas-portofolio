import { motion } from 'framer-motion';
import fadawkasImg from '../assets/Fadawkas-2.jpeg';
import { NumberTicker } from './motion/NumberTicker';
import { ScrollHeading } from './motion/ScrollHeading';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-24"
        >
          <ScrollHeading label="About" className="mb-5" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-notion-black dark:text-white leading-tight">
            Turning Complex Ideas Into{' '}
            <span className="text-gray-500">Reliable Digital Products</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-28 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
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
            className="space-y-12 lg:space-y-16 order-1 lg:order-2"
          >
            {/* Bio */}
            <div className="space-y-6 lg:space-y-8 text-gray-600 dark:text-gray-400 text-justify leading-loose">
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
            <div className="grid grid-cols-3 gap-5 lg:gap-6 pt-4 lg:pt-2">
              <div className="p-5 lg:p-6 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1">
                  <NumberTicker target={5} suffix="+" />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">AI Projects</div>
              </div>
              <div className="p-5 lg:p-6 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1">
                  <NumberTicker target={1} />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Year Experience</div>
              </div>
              <div className="p-5 lg:p-6 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1">
                  <NumberTicker target={3.87} decimals={2} />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">GPA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
