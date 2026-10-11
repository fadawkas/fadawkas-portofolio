export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  detailDescription: string;
  techStack: string[];
  highlight: string;
  images: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

import ragLaw1 from '../assets/projects/rag-law-1.png';
import ragLaw2 from '../assets/projects/rag-law-2.png';
import ragLaw3 from '../assets/projects/rag-law-3.png';
import infraMon1 from '../assets/projects/infra-mon-1.png';
import infraMon2 from '../assets/projects/infra-mon-2.png';
import infraMon3 from '../assets/projects/infra-mon-3.png';
import shish1 from '../assets/projects/shish-1.png';
import shish2 from '../assets/projects/shish-2.png';
import shish3 from '../assets/projects/shish-3.png';
import raga1 from '../assets/projects/raga-1.png';
import raga2 from '../assets/projects/raga-2.png';
import raga3 from '../assets/projects/raga-3.png';
import flood1 from '../assets/projects/flood-1.png';
import flood2 from '../assets/projects/flood-2.png';
import nobi1 from '../assets/projects/nobi-1.png';
import nobi2 from '../assets/projects/nobi-2.png';
import nobi3 from '../assets/projects/nobi-3.png';

export const projects: Project[] = [
  {
    id: 'rag-criminal-law',
    name: 'RAG-Based Criminal Law Consultation',
    category: 'AI / RAG',
    description:
      'A legal research assistant that uses retrieved Indonesian criminal-law documents to answer questions, with consultation history and RAG evaluation.',
    detailDescription:
      'I built ThemisAI as an academic project to explore how retrieval-augmented generation can support Indonesian criminal-law research. The application combines a React and TypeScript interface with a FastAPI backend, a FAISS vector index, and PostgreSQL for user accounts and consultation history. When a user submits a question, the system retrieves relevant legal passages and supplies them to the language model as context for its response. The project also includes RAGAS evaluation and model-comparison experiments to assess retrieval and response quality.',
    techStack: ['FastAPI', 'React', 'TypeScript', 'FAISS', 'PostgreSQL', 'Docker'],
    highlight: 'Answer Relevancy: 0.801 • Context Precision: 1.00',
    images: [ragLaw1, ragLaw2, ragLaw3],
    links: {
      github: 'https://github.com/fadawkas/themisai',
      demo: '#',
    },
  },
  {
    id: 'nobi-interview-training',
    name: 'AI Interview Training Platform',
    category: 'AI / Full-Stack',
    description:
      'An interview practice platform with contextual questions, recorded-answer transcription, facial-expression analysis, and background feedback processing.',
    detailDescription:
      'I built NobiAI to help users practice interview answers and review feedback after each session. The application combines a React and TypeScript frontend, an Express API, and a separate FastAPI service for speech transcription and facial-expression analysis. Recorded answers are stored and processed in the background, with audio transcribed using Whisper and video analyzed for facial expressions. The results are presented alongside structured feedback, while MongoDB stores session data and Docker Compose connects the application services.',
    techStack: ['React', 'TypeScript', 'Express.js', 'FastAPI', 'MongoDB', 'OpenAI Whisper', 'Docker'],
    highlight: 'Recorded-Answer Transcription • Background Analysis',
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
    detailDescription:
      'I built HeimOps to connect telemetry collection, alert evaluation, and incident management in one application. A containerized Go agent sends telemetry to a Go backend, which stores data in PostgreSQL and evaluates rules using thresholds, time windows, minimum sample counts, and cooldowns. Server-Sent Events stream updates to the React dashboard, where users can review alerts and move incidents through open, acknowledged, and resolved states. The project also includes asynchronous Discord notifications and a Docker Compose setup for running the stack locally.',
    techStack: ['Go', 'React', 'PostgreSQL', 'SSE', 'Docker Compose'],
    highlight: 'Real-Time Monitoring • Alert Engine',
    images: [infraMon1, infraMon2, infraMon3],
    links: {
      github: 'https://github.com/fadawkas/heimops',
      demo: '#',
    },
  },
  {
    id: 'phishing-detection',
    name: 'ML-Based Phishing Detection',
    category: 'Security / Machine Learning',
    description:
      'A Chrome extension that analyzes URL features with a machine-learning classifier and displays phishing predictions through a Flask-backed browser interface.',
    detailDescription:
      'I developed this project to explore how machine learning can help identify potentially suspicious website URLs. It combines URL feature extraction and an XGBoost classifier with a Flask inference API and a React-based Chrome extension interface. The extension sends a URL for analysis and displays the model’s prediction. The repository includes datasets and notebooks for feature extraction and model development, connecting the research workflow to a browser-based application.',
    techStack: ['Flask', 'React', 'XGBoost', 'Chrome Extension'],
    highlight: '85% Detection Accuracy',
    images: [shish1, shish2, shish3],
    links: {
      github: 'https://github.com/fadawkas/ShiShi_Project',
      demo: '#',
    },
  },
  {
    id: 'fitness-nlp',
    name: 'NLP Fitness Recommendation System',
    category: 'AI Chatbot',
    description:
      'A fitness chatbot that uses NLP and a neural-network intent classifier to provide predefined workout recommendations and motivational responses.',
    detailDescription:
      'I built Raga-Bot to make fitness information accessible through a conversational interface. The system processes user messages and uses a neural-network classifier to identify intents, then selects a predefined response for the recognized category. The application combines a React interface, a Flask backend, and MySQL for application data. This project connects intent-classification experiments with a web application for fitness recommendations and motivational support.',
    techStack: ['React', 'Flask', 'MySQL', 'NLP', 'Neural Network'],
    highlight: '100% Intent Recognition Accuracy',
    images: [raga1, raga2, raga3],
    links: {
      github: 'https://github.com/fadawkas/Raga-Chatbot',
      demo: '#',
    },
  },
  {
    id: 'flood-prediction',
    name: 'ML-Based Flood Prediction',
    category: 'Research / Machine Learning',
    description:
      'A research project comparing SVM and KNN for rainfall classification and flood-risk assessment in Jakarta, evaluated using stratified cross-validation.',
    detailDescription:
      'I worked on this research project to compare SVM and KNN approaches for rainfall classification and flood-risk assessment in Jakarta. The workflow covers data preparation, model training, parameter experiments, and evaluation using Stratified K-Fold Cross Validation. The repository includes the dataset and experiment notebooks, allowing the model-development process to be inspected. The research was presented at SENAMIKA 2024 and received Best Paper and Best Presenter recognition.',
    techStack: ['Python', 'Scikit-learn', 'SVM', 'KNN', 'Machine Learning'],
    highlight: 'SVM 90.19% • KNN 88.32% Accuracy',
    images: [flood1, flood2],
    links: {
      github: 'https://github.com/fadawkas/Senamika_DataScience',
      demo: '#',
    },
  },
];
