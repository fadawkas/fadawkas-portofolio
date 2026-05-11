export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'AI Engineering',
    skills: [
      'LLMs',
      'RAG',
      'LangGraph',
      'AI Agents',
      'Tool Integration',
      'TensorFlow',
      'Scikit-learn',
      'XGBoost',
      'NLP',
      'Hugging Face',
      'OpenRouter',
    ],
  },
  {
    name: 'Backend',
    skills: [
      'FastAPI',
      'Flask',
      'Express',
      'Go Chi',
      'REST API',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML/CSS',
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      'Docker',
      'Docker Compose',
      'Git',
      'Google Cloud Platform',
      'Vercel',
      'Render',
    ],
  },
];
