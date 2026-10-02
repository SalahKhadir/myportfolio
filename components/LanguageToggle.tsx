"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200 font-mono text-xs font-bold uppercase tracking-widest w-10 flex items-center justify-center"
      aria-label="Toggle Language"
    >
      {language === "en" ? "FR" : "EN"}
    </button>
  );
}
