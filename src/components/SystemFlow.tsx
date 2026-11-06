import { ArrowDown, ArrowRight } from 'lucide-react';

export function SystemFlow({ steps }: { steps: string[] }) {
  return (
    <ol aria-label="System flow" className="grid grid-cols-1 sm:grid-cols-4 gap-3">
      {steps.map((step, index) => (
        <li key={step} className="relative flex sm:flex-col items-center sm:items-start gap-3 border-t border-gray-300 dark:border-white/20 pt-3 sm:pr-5">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 leading-relaxed">{step}</span>
          {index < steps.length - 1 && <>
            <ArrowRight aria-hidden="true" className="hidden sm:block absolute right-0 top-4 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <ArrowDown aria-hidden="true" className="sm:hidden ml-auto shrink-0 w-4 h-4 text-gray-500 dark:text-gray-400" />
          </>}
        </li>
      ))}
    </ol>
  );
}
