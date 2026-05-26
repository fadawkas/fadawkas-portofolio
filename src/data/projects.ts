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
      'Web-based criminal law consultation system using Retrieval-Augmented Generation and Large Language Models to deliver contextual, accurate, and domain-specific legal responses.',
    detailDescription:
      'RAG-Based Criminal Law Consultation is a full-stack legal AI assistant engineered to democratize access to criminal law consultation. At its core, the system employs a Retrieval-Augmented Generation (RAG) pipeline that ingests and indexes Indonesian criminal law documents into a FAISS vector store, enabling semantic search over thousands of legal passages. When a user submits a legal query, the system retrieves the most contextually relevant law segments and feeds them into a Large Language Model, which generates a grounded, citation-backed response that drastically reduces hallucination risk compared to vanilla LLM usage. The FastAPI backend orchestrates the entire RAG workflow, while the React and TypeScript frontend provides an intuitive chat interface with real-time streaming responses. PostgreSQL persists user sessions and query history for full auditability. Containerized with Docker, this system is ready for production deployment, with evaluation metrics showing an Answer Relevancy of 0.801 and a Context Precision of 1.00, confirming that every retrieved document was perfectly relevant to the user query.',
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
      'Full-stack AI-powered interview preparation platform with contextual question generation, real-time speech transcription via OpenAI Whisper, facial expression analysis, and structured candidate feedback.',
    detailDescription:
      'NobiAI is a production-ready interview simulation platform that replicates the pressure and nuance of real job interviews. Users select a target role and company, and the system generates contextually relevant interview questions tailored to that position. During the session, the React frontend streams the webcam feed to the backend, which stores the video and queues it for asynchronous processing via an Agenda.js job worker. The Express.js backend extracts audio using FFmpeg and forwards it to a FastAPI AI service running OpenAI Whisper for high-accuracy automatic speech recognition. In parallel, a facial emotion model (FEM) analyzes frame-by-frame expressions throughout the answer, computing confidence scores and dominant emotion distributions. The AI service then invokes an LLM to evaluate the transcript against the question context, producing a structured feedback report with identified strengths, areas for improvement, and actionable coaching suggestions — all persisted in MongoDB. The entire stack is containerized with Docker Compose, sharing a volume between services for media file exchange. The result is an end-to-end feedback loop covering linguistic clarity, emotional confidence, and domain relevance.',
    techStack: ['React', 'TypeScript', 'Express.js', 'FastAPI', 'MongoDB', 'OpenAI Whisper', 'Docker'],
    highlight: 'Real-Time Transcription • Emotion Scoring',
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
      'Real-time monitoring and incident management platform with alert evaluation, service status tracking, and SSE-powered live dashboards. Containerized telemetry ingestion pipeline.',
    detailDescription:
      'Real-Time Infrastructure Monitoring is a production-grade observability platform purpose-built for teams that need real-time visibility into their infrastructure. The system features a Go-based telemetry ingestion service that parses and processes metric streams, evaluates them against configurable alert thresholds, and pushes live updates to the React frontend via Server-Sent Events (SSE) with sub-second latency from metric ingestion to dashboard update. The alert engine supports severity classification, deduplication, and escalation policies, ensuring that on-call engineers are notified about the right issues at the right time. Service status tracking provides a comprehensive view of component health with historical uptime records. All telemetry data, alert configurations, and incident logs are persisted in PostgreSQL for post-mortem analysis. The entire stack, including the Go collector, React UI, and database, is orchestrated via Docker Compose for seamless local development and one-command production deployment.',
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
      'Chrome extension with a Flask backend and React frontend, utilizing an XGBoost machine learning model to detect phishing by analyzing URLs through feature extraction, achieving 85% accuracy on testing.',
    detailDescription:
      'This project delivers a complete browser-based defense against phishing attacks, combining a Chrome extension frontend with a Flask API backend powered by a trained XGBoost classifier. When a user visits a site, the extension extracts over 30 URL-based features including domain age, subdomain depth, presence of IP addresses, URL length, special character ratios, and TLD rarity, then sends them to the Flask inference endpoint. The XGBoost model, trained on a curated dataset of legitimate and phishing URLs, evaluates the feature vector and returns a risk score with explainable classifications in under 200 milliseconds. The React-based popup UI presents the result in a clean traffic-light format of safe, suspicious, or dangerous with feature breakdowns so users understand why a site was flagged. On the benchmark test set, the model achieved 85% detection accuracy with a low false-positive rate, making it practical for day-to-day browsing. The extension integrates seamlessly into the Chrome toolbar and runs silently in the background, alerting users only when a threat is detected.',
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
      'A rule-based chatbot using NLP and a Neural Network model to provide fitness recommendations and motivational support, integrated into a React-based website with Flask and MySQL for seamless user interaction and data management.',
    detailDescription:
      'Raga-Bot is an intelligent fitness companion that combines natural language processing with neural network classification to deliver personalized workout and nutrition guidance. The chatbot processes user input through a multi-stage NLP pipeline including tokenization, stop-word removal, stemming, and TF-IDF vectorization before passing the processed query to a trained Neural Network classifier that maps intents across more than 15 fitness categories, from strength training routines and cardio plans to dietary recommendations and recovery protocols. With 100% intent recognition accuracy on the test set, the bot reliably understands user needs and responds with curated, evidence-based advice. The React frontend presents a modern conversational UI with rich media responses, while Flask handles API orchestration and MySQL stores user profiles, conversation history, and progression tracking. The system learns from each interaction, allowing it to tailor future recommendations based on the user\'s fitness journey, goals, and past feedback.',
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
      'Machine learning project using Support Vector Machine (SVM) and K-Nearest Neighbor (KNN) algorithms, evaluated through Stratified K-Fold Cross Validation, to predict rainfall rates and assess flood risks in Jakarta.',
    detailDescription:
      'This research-grade machine learning project tackles one of Jakarta\'s most pressing challenges, flood risk prediction, by comparing two powerful classification algorithms: Support Vector Machine (SVM) and K-Nearest Neighbor (KNN). The study uses historical rainfall, water elevation, and geographic data to train both models, with features engineered to capture seasonal patterns, extreme weather indicators, and regional flood susceptibility factors. To ensure statistical robustness, the models were evaluated using Stratified K-Fold Cross Validation with k equals 10, preserving class distribution across every fold. SVM achieved 90.19% accuracy, while KNN closely followed at 88.32%, demonstrating that machine learning can provide reliable, data-driven flood risk assessments for urban planning and early warning systems. This research was accepted and published at SENAMIKA 2024, a national computer science symposium, contributing valuable insights into the applicability of classical machine learning methods for environmental hazard prediction in developing urban centers.',
    techStack: ['Python', 'Scikit-learn', 'SVM', 'KNN', 'Machine Learning'],
    highlight: 'SVM 90.19% • KNN 88.32% Accuracy',
    images: [flood1, flood2],
    links: {
      github: 'https://github.com/fadawkas/Senamika_DataScience',
      demo: '#',
    },
  },
];