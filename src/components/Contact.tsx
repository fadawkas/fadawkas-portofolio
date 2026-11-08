import { Mail, MessageCircle, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react';
import { contactItems } from '../data/contact';

const iconMap = { email: Mail, linkedin: Linkedin, github: Github, cv: Download };

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-light-card dark:bg-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-notion-black dark:text-white mb-6">
            Let's build something <span className="font-serif italic text-gray-600 dark:text-gray-400">together.</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 max-w-lg">
            I'm open to AI engineering, backend engineering, full-stack, and
            production AI workflow opportunities.
          </p>
        </div>
        <div>
          {contactItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isEmail = item.type === 'Email';
            return (
              <a key={item.type} href={item.url} download={item.type === 'CV'}
                className={`group flex items-center gap-4 min-h-16 transition-colors ${isEmail
                  ? 'rounded-xl bg-accent text-notion-black p-5 mb-4 hover:bg-accent-hover'
                  : 'py-4 border-b border-gray-300 dark:border-white/15 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300'}`}>
                <Icon aria-hidden="true" className="w-5 h-5 shrink-0" />
                <span className="min-w-0 flex-1">
                  {isEmail && <span className="block text-xs mb-1">Email</span>}
                  <span className={`font-medium ${isEmail ? 'break-all text-lg' : 'text-base'}`}>{item.label}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            );
          })}
          <div className="mt-8">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Prefer WhatsApp? Message me at</p>
            <a href="https://wa.me/6285186861325" target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-lg font-semibold text-notion-black dark:text-white hover:underline underline-offset-4">
              <MessageCircle aria-hidden="true" className="w-5 h-5" /> +62 851-8686-1325
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
