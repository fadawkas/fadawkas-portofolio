export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  engineering: string;
  techStack: string[];
  highlight: string;
  highlightType: 'Reported metric' | 'Implemented capability';
  images: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

import ragLaw1 from '../assets/projects/rag-law-1.webp';
import ragLaw2 from '../assets/projects/rag-law-2.webp';
import ragLaw3 from '../assets/projects/rag-law-3.webp';
import infraMon1 from '../assets/projects/infra-mon-1.webp';
import infraMon2 from '../assets/projects/infra-mon-2.webp';
import infraMon3 from '../assets/projects/infra-mon-3.webp';
import shish1 from '../assets/projects/shish-1.webp';
import shish2 from '../assets/projects/shish-2.webp';
import shish3 from '../assets/projects/shish-3.webp';
import raga1 from '../assets/projects/raga-1.webp';
import raga2 from '../assets/projects/raga-2.webp';
import raga3 from '../assets/projects/raga-3.webp';
import flood1 from '../assets/projects/flood-1.webp';
import flood2 from '../assets/projects/flood-2.webp';
import nobi1 from '../assets/projects/nobi-1.webp';
import nobi2 from '../assets/projects/nobi-2.webp';
import nobi3 from '../assets/projects/nobi-3.webp';

export const projects: Project[] = [
  {
    id: 'rag-criminal-law',
    name: 'RAG-Based Criminal Law Consultation',
    category: 'AI / RAG',
    description:
      'A legal research assistant that uses retrieved Indonesian criminal-law documents to answer questions, with consultation history and RAG evaluation.',
    problem: 'Support Indonesian criminal-law research by retrieving relevant legal documents for a user’s question.',
    engineering: 'The application combines a React and TypeScript interface, FastAPI backend, FAISS vector index, and PostgreSQL for user accounts and consultation history. Retrieved legal passages are supplied as language-model context; RAGAS evaluation and model-comparison experiments are included.',
    techStack: ['FastAPI', 'React', 'TypeScript', 'FAISS', 'PostgreSQL', 'Docker'],
    highlight: 'Answer Relevancy: 0.801 • Context Precision: 1.00',
    highlightType: 'Reported metric',
    images: [ragLaw1, ragLaw2, ragLaw3],
    links: {
      github: 'https://github.com/fadawkas/themisai',
    },
  },
  {
    id: 'nobi-interview-training',
    name: 'AI Interview Training Platform',
    category: 'AI / Full-Stack',
    description:
      'An interview practice platform with contextual questions, recorded-answer transcription, facial-expression analysis, and background feedback processing.',
    problem: 'Help users practice interview answers and review feedback after a session.',
    engineering: 'The React and TypeScript frontend connects to an Express API and a separate FastAPI analysis service. Recorded answers are processed in the background: Whisper transcribes audio, video is analyzed for facial expressions, and results are presented with structured feedback.',
    techStack: ['React', 'TypeScript', 'Express.js', 'FastAPI', 'MongoDB', 'OpenAI Whisper', 'Docker'],
    highlight: 'Recorded-Answer Transcription • Background Analysis',
    highlightType: 'Implemented capability',
    images: [nobi1, nobi2, nobi3],
    links: {
      github: 'https://github.com/fadawkas/nobi-interview-training',
    },
  },
  {
    id: 'real-time-monitoring',
    name: 'Real-Time Infrastructure Monitoring',
    category: 'Monitoring / DevOps',
    description:
      'An infrastructure monitoring console with telemetry collection, configurable alert rules, live dashboard updates, and incident lifecycle management.',
    problem: 'Bring infrastructure telemetry, alert evaluation, and incident management into one application.',
    engineering: 'A containerized Go agent sends telemetry to a Go backend. The backend stores data in PostgreSQL and evaluates configurable thresholds, time windows, minimum sample counts, and cooldowns. Server-Sent Events update the React dashboard; incidents move through open, acknowledged, and resolved states.',
    techStack: ['Go', 'React', 'PostgreSQL', 'SSE', 'Docker Compose'],
    highlight: 'Real-Time Monitoring • Alert Engine',
    highlightType: 'Implemented capability',
    images: [infraMon1, infraMon2, infraMon3],
    links: {
      github: 'https://github.com/fadawkas/heimops',
    },
  },
  {
    id: 'phishing-detection',
    name: 'ML-Based Phishing Detection',
    category: 'Security / Machine Learning',
    description:
      'A Chrome extension that analyzes URL features with a machine-learning classifier and displays phishing predictions through a Flask-backed browser interface.',
    problem: 'Explore machine-learning classification as a way to identify potentially suspicious website URLs.',
    engineering: 'URL feature extraction and an XGBoost classifier connect to a Flask inference API and React-based Chrome extension. The repository includes datasets and notebooks for feature extraction and model development.',
    techStack: ['Flask', 'React', 'XGBoost', 'Chrome Extension'],
    highlight: '85% Detection Accuracy',
    highlightType: 'Reported metric',
    images: [shish1, shish2, shish3],
    links: {
      github: 'https://github.com/fadawkas/ShiShi_Project',
    },
  },
  {
    id: 'fitness-nlp',
    name: 'NLP Fitness Recommendation System',
    category: 'AI Chatbot',
    description:
      'A fitness chatbot that uses NLP and a neural-network intent classifier to provide predefined workout recommendations and motivational responses.',
    problem: 'Make fitness information and workout recommendations accessible through a conversational interface.',
    engineering: 'A neural-network intent classifier maps user messages to predefined responses. The application combines a React interface, Flask backend, and MySQL for application data.',
    techStack: ['React', 'Flask', 'MySQL', 'NLP', 'Neural Network'],
    highlight: '100% Intent Recognition Accuracy',
    highlightType: 'Reported metric',
    images: [raga1, raga2, raga3],
    links: {
      github: 'https://github.com/fadawkas/Raga-Chatbot',
    },
  },
  {
    id: 'flood-prediction',
    name: 'ML-Based Flood Prediction',
    category: 'Research / Machine Learning',
    description:
      'A research project comparing SVM and KNN for rainfall classification and flood-risk assessment in Jakarta, evaluated using stratified cross-validation.',
    problem: 'Compare SVM and KNN for rainfall classification and flood-risk assessment in Jakarta.',
    engineering: 'The research workflow covers data preparation, model training, parameter experiments, and evaluation using Stratified K-Fold Cross Validation. The dataset and experiment notebooks are included in the repository.',
    techStack: ['Python', 'Scikit-learn', 'SVM', 'KNN', 'Machine Learning'],
    highlight: 'SVM 90.19% • KNN 88.32% Accuracy',
    highlightType: 'Reported metric',
    images: [flood1, flood2],
    links: {
      github: 'https://github.com/fadawkas/Senamika_DataScience',
    },
  },
];
