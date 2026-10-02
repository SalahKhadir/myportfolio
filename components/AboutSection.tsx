"use client";

import { useLanguage } from "./LanguageContext";

const renderParagraph = (text: string) => {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={i} className="text-accent font-medium">
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

interface AboutSectionProps {
  showCvDownload?: boolean;
}

export default function AboutSection({ showCvDownload = false }: AboutSectionProps) {
  const { t } = useLanguage();
  const { profile, ui } = t;

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
      <div className="text-center mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
          {ui.about.tagline}
        </p>
        <h2 className="text-[clamp(48px,8vw,100px)] font-accent uppercase tracking-tight leading-[0.85] text-black dark:text-white mb-6">
          {ui.about.title}
        </h2>
        <p className="font-light text-gray-500 max-w-lg mx-auto">
          {ui.about.subtitle}
        </p>
      </div>
      
      <div className="w-full space-y-6 text-left">
        {profile.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx} className="text-gray-600 dark:text-gray-300 font-light text-lg md:text-xl leading-relaxed">
            {renderParagraph(paragraph)}
          </p>
        ))}
      </div>

      {showCvDownload && (
        <div className="mt-16 w-full border border-gray-alt/10 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-accent/30 dark:hover:border-accent/50 transition-colors duration-500 shadow-sm dark:shadow-none">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{ui.about.cvDownloadTitle}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md leading-relaxed">
              {ui.about.cvDownloadDesc}
            </p>
          </div>
          <a 
            href="/Salah_KHADIR_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="shrink-0 flex items-center gap-4 bg-black text-white dark:bg-white dark:text-black px-6 py-4 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <span className="font-bold text-xs uppercase tracking-widest">{ui.about.cvDownloadBtn}</span>
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-60 border-l border-white/20 dark:border-black/20 pl-4">{ui.about.cvFormat}</span>
          </a>
        </div>
      )}
    </div>
  );
}
