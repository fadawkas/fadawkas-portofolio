import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>&copy; {currentYear} Muhammad Fadawkas Oemarki.</span>
          </div>
          <a href="#home" className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 py-2 hover:underline underline-offset-4">Back to top <ArrowUp aria-hidden="true" className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
