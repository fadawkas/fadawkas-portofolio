export interface ContactItem {
  type: string;
  label: string;
  url: string;
  icon: 'email' | 'linkedin' | 'github' | 'cv';
}

export const contactItems: ContactItem[] = [
  {
    type: 'Email',
    label: 'oemarkid@gmail.com',
    url: 'mailto:oemarkid@gmail.com',
    icon: 'email',
  },
  {
    type: 'LinkedIn',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/fadawkas',
    icon: 'linkedin',
  },
  {
    type: 'GitHub',
    label: 'GitHub',
    url: 'https://github.com/fadawkas',
    icon: 'github',
  },
  {
    type: 'CV',
    label: 'Download CV',
    url: '/Fadawkas_CV.pdf',
    icon: 'cv',
  },
];
