import { Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left - Built with */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Code2 className="w-4 h-4" />
            <span>
              Built with{' '}
              <span className="font-medium text-notion-black dark:text-white">
                React, TypeScript, and Tailwind CSS
              </span>
            </span>
          </div>

          {/* Right - Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>&copy; {currentYear} Muhammad Fadawkas Oemarki.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
