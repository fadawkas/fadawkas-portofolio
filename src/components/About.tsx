import { motion } from 'framer-motion';
import fadawkasImg from '../assets/Fadawkas-2.jpeg';
import { NumberTicker } from './motion/NumberTicker';

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-10 lg:mb-12 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-notion-black dark:text-white leading-tight">
            Turning Complex Ideas Into{' '}
            <span className="text-gray-600 dark:text-gray-400 italic font-serif">Reliable Digital Products</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 overflow-hidden"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
              <img
                src={fadawkasImg}
                alt="Muhammad Fadawkas Oemarki"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 order-1 lg:order-2 min-w-0 overflow-hidden"
          >
            {/* Bio */}
            <div className="space-y-6 lg:space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I’m Fadawkas, an AI Engineer who enjoys turning complex ideas into useful software.
                My work brings together AI, backend engineering, and full-stack development. I build
                LLM workflows, connect agents to tools and external services, and develop the APIs
                and applications that support them.
              </p>
              <p>
                I’m interested in how systems fit together, how AI uses context, how
                services communicate, and how background tasks are coordinated. I graduated in
                Informatics from UPN “Veteran” Jakarta, where I also explored machine learning
                research and student leadership. My approach is to build with purpose, keep software
                understandable, and improve through hands-on work.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
              <div className="py-2">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1 tabular-nums">
                  <NumberTicker target={5} suffix="+" />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">AI Projects</div>
              </div>
              <div className="py-2">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1 tabular-nums">
                  <NumberTicker target={1} />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Year Experience</div>
              </div>
              <div className="py-2">
                <div className="text-2xl font-bold text-notion-black dark:text-white mb-1 tabular-nums">
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
