import { ArrowDown, Download, MapPin } from 'lucide-react';
import fadawkasImg from '../assets/Fadawkas.jpeg';

export function Hero() {
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 xl:min-h-screen xl:flex xl:items-center xl:pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.8fr)] xl:grid-cols-[minmax(0,1fr)_auto] gap-10 xl:gap-20 items-center">
          <div className="space-y-6 order-1">
            <p className="text-base text-gray-700 dark:text-gray-300">Hey, I'm Fadawkas,</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-notion-black dark:text-white">
              <span className="block italic font-serif">AI Engineer</span>
              <span className="block text-gray-700 dark:text-gray-300">&amp; Full-Stack</span>
              <span className="block">Developer</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
              I build agentic AI workflows, tool integrations, and the backend services behind useful LLM and full-stack applications.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Tangerang Selatan, Indonesia</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-1">
              <button
                type="button"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-notion-black hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-semibold rounded-full transition-colors"
              >
                View Projects <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="/Fadawkas_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-transparent text-notion-black dark:text-white font-semibold rounded-full border border-gray-300 dark:border-white/30 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden="true" /> Download CV
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-2">
            <div className="relative rounded-full border border-gray-300 dark:border-white/20 p-1">
              <div className="absolute -inset-8 rotating-border-ring" aria-hidden="true" />
              <div className="absolute inset-0 rotating-border" aria-hidden="true" />
              <div className="w-56 h-56 sm:w-72 sm:h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  src={fadawkasImg}
                  alt="Muhammad Fadawkas Oemarki"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-20 pt-8 lg:pt-10 border-t border-gray-200 dark:border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-8">
            <div>
              <h2 className="text-base font-semibold text-notion-black dark:text-white mb-2">AI-Powered Systems</h2>
              <p className="max-w-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Building LLM applications, RAG pipelines, and tool-calling agents, with interests in workflow automation and voice AI.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-notion-black dark:text-white mb-2">Full-Stack Development</h2>
              <p className="max-w-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Building web applications with Python and JavaScript, connecting interfaces, APIs, and databases.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-notion-black dark:text-white mb-2">Infrastructure &amp; Deployment</h2>
              <p className="max-w-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Configuring Docker environments and staging setups for connected frontend, backend, and AI services.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-notion-black dark:text-white mb-2">Research &amp; Innovation</h2>
              <p className="max-w-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Best Presenter and Best Paper at SENAMIKA 2024, with published research on machine learning applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
