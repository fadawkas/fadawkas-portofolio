interface ScrollHeadingProps {
  label: string;
  className?: string;
}

export function ScrollHeading({ label, className = '' }: ScrollHeadingProps) {
  return (
    <p className={`text-xs font-semibold uppercase text-gray-600 dark:text-gray-300 mb-3 ${className}`}>
      {label}
    </p>
  );
}
