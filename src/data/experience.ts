export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  companyDescription: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'neuram',
    company: 'Neuram',
    role: 'AI Engineer',
    period: 'Mar 2026 - Present',
    location: 'Jakarta, Indonesia',
    companyDescription:
      'AI solutions company building intelligent automation systems, AI agents, and scalable production-ready AI workflows for enterprise clients.',
    achievements: [
      'Built and configured AI agent workflows, including tool integrations, agent skills, and automated task execution pipelines to support real-world client operations.',
      'Configured and maintained staging environments across frontend, backend, AI services, and third-party integrations, ensuring production-ready reliability for high-volume user traffic.',
    ],
  },
  {
    id: 'kuasar',
    company: 'Kuasar',
    role: 'Backend & AI Engineer Intern',
    period: 'May 2025 - Aug 2025',
    location: 'Jakarta, Indonesia',
    companyDescription:
      'Technology solutions company helping clients develop intelligent applications powered by AI and modern backend systems.',
    achievements: [
      'Built an AI-powered underwriting platform integrating LLM-based chatbot services using LangGraph and RAG pipelines.',
      'Designed and implemented scalable REST APIs using FastAPI and PostgreSQL, supporting production workloads.',
    ],
  },
];
