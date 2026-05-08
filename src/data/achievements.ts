export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Best Paper - SENAMIKA 2024',
    description:
      'Awarded for presenting a well-researched and impactful computer science paper on machine learning for flood prediction.',
    year: '2024',
  },
  {
    title: 'Best Presenter - SENAMIKA 2024',
    description:
      'Recognized for delivering an outstanding research presentation at a national-level seminar on computer science applications.',
    year: '2024',
  },
  {
    title: 'GPA 3.87 - Informatics',
    description:
      'Graduated from UPN Veteran Jakarta, Faculty of Computer Science with a strong academic record.',
    year: '2025',
  },
];
