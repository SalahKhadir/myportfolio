"use client";

import { motion } from "framer-motion";
import MetricCounter from "./MetricCounter";
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
  showStats?: boolean;
}

export default function AboutSection({ showCvDownload = false, showStats = false }: AboutSectionProps) {
  const { t, language } = useLanguage();
  const { profile, ui } = t;
  const cvUrl = language === "fr" ? "/Salah_KHADIR_CV(fr).pdf" : "/Salah_KHADIR_CV(en).pdf";

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
          <motion.p
            key={idx}
            initial={{ opacity: 0.2, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-gray-600 dark:text-gray-300 font-light text-lg md:text-xl leading-relaxed will-change-[opacity,transform]"
          >
            {renderParagraph(paragraph)}
          </motion.p>
        ))}
      </div>

      {/* Quantitative Engineering Metrics Counter (Only on /about) */}
      {showStats && ui.about.stats && (
        <div className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-gray-alt/10 dark:border-neutral-800/80 bg-gray-50/50 dark:bg-neutral-900/40 flex flex-col items-start justify-center">
            <span className="font-accent text-4xl sm:text-5xl text-accent font-bold tracking-tight">
              <MetricCounter value={ui.about.stats.certificationsCount} suffix={ui.about.stats.certificationsSuffix} />
            </span>
            <span className="text-xs font-bold text-gray-900 dark:text-gray-100 mt-2 leading-tight">
              {ui.about.stats.certificationsLabel}
            </span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-1 leading-snug">
              {ui.about.stats.certificationsSub}
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-gray-alt/10 dark:border-neutral-800/80 bg-gray-50/50 dark:bg-neutral-900/40 flex flex-col items-start justify-center">
            <span className="font-accent text-4xl sm:text-5xl text-accent font-bold tracking-tight">
              <MetricCounter value={ui.about.stats.systemsBuiltCount} suffix={ui.about.stats.systemsBuiltSuffix} />
            </span>
            <span className="text-xs font-bold text-gray-900 dark:text-gray-100 mt-2 leading-tight">
              {ui.about.stats.systemsBuiltLabel}
            </span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-1 leading-snug">
              {ui.about.stats.systemsBuiltSub}
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-gray-alt/10 dark:border-neutral-800/80 bg-gray-50/50 dark:bg-neutral-900/40 flex flex-col items-start justify-center">
            <span className="font-accent text-4xl sm:text-5xl text-accent font-bold tracking-tight">
              <MetricCounter value={ui.about.stats.securityCount} suffix={ui.about.stats.securitySuffix} />
            </span>
            <span className="text-xs font-bold text-gray-900 dark:text-gray-100 mt-2 leading-tight">
              {ui.about.stats.securityLabel}
            </span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-1 leading-snug">
              {ui.about.stats.securitySub}
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-gray-alt/10 dark:border-neutral-800/80 bg-gray-50/50 dark:bg-neutral-900/40 flex flex-col items-start justify-center">
            <span className="font-accent text-4xl sm:text-5xl text-accent font-bold tracking-tight">
              <MetricCounter value={ui.about.stats.gradYear} suffix={ui.about.stats.gradSuffix} />
            </span>
            <span className="text-xs font-bold text-gray-900 dark:text-gray-100 mt-2 leading-tight">
              {ui.about.stats.gradLabel}
            </span>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-1 leading-snug">
              {ui.about.stats.gradSub}
            </span>
          </div>
        </div>
      )}

      {showCvDownload && (
        <div className="mt-16 w-full border border-gray-alt/10 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-accent/30 dark:hover:border-accent/50 transition-colors duration-500 shadow-sm dark:shadow-none">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{ui.about.cvDownloadTitle}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md leading-relaxed">
              {ui.about.cvDownloadDesc}
            </p>
          </div>
          <a 
            href={cvUrl} 
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
