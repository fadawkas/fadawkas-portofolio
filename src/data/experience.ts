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
    location: 'Jakarta, Indonesia · On-site',
    companyDescription:
      'Developing agentic voice AI workflows and integrations across backend systems, AI services, and external tools.',
    achievements: [
      'Develop agentic voice AI workflows that support real-time conversations and contextual actions through tool calling.',
      'Implement backend integrations connecting AI agents with APIs, external services, and automated workflows.',
      'Develop and experiment with custom voice AI pipelines involving conversational intelligence, speech processing, and telephony integration.',
      'Configure and maintain staging environments across frontend, backend, AI services, and external integrations to support testing and deployment readiness.',
    ],
  },
  {
    id: 'kuasar',
    company: 'Kuasar',
    role: 'Backend & AI Engineer Intern',
    period: 'May 2025 - Aug 2025',
    location: 'Jakarta, Indonesia · Remote',
    companyDescription:
      'Contributed backend and AI components to an underwriting platform using LLMs, LangGraph, RAG, FastAPI, and PostgreSQL.',
    achievements: [
      'Developed backend and AI components for an underwriting platform with LLM-based chatbot capabilities.',
      'Implemented LangGraph workflows and RAG pipelines to retrieve relevant context for conversational responses.',
      'Designed and implemented REST APIs using FastAPI and PostgreSQL to support application workflows and data persistence.',
      'Supported backend workflows used in staging and production environments.',
    ],
  },
];
