import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Initialize theme before React renders to prevent flash
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
  const prefersDark = true; // Default to dark
  
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
