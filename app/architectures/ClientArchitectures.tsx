"use client";

import Navbar from "@/components/Navbar";
import ArchitectureCard from "@/components/ArchitectureCard";
import FadeInView from "@/components/FadeInView";
import { useLanguage } from "@/components/LanguageContext";

export default function ClientArchitectures() {
  const { t } = useLanguage();
  const { ui, architectures } = t;

  return (
    <>
      <Navbar />
      <main className="pt-48 pb-24 px-6 max-w-[90rem] mx-auto w-full">
        <header className="mb-24 border-b border-gray-alt/10 pb-12">
          <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
            {ui.architectures.tagline}
          </p>
          <h1 className="heading mb-6">{ui.architectures.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 font-light text-lg md:text-xl max-w-3xl leading-relaxed">
            {ui.architectures.description}
          </p>
        </header>

        <div className="flex flex-col gap-14 relative">
          {architectures.map((arch, idx) => (
            <div
              key={arch.index}
              className="sticky z-10 bg-white dark:bg-[#0c0c0e] rounded-3xl p-6 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-lg dark:shadow-2xl transition-all will-change-transform"
              style={{ top: `calc(6rem + ${idx * 24}px)` }}
            >
              <ArchitectureCard 
                index={arch.index}
                category={arch.category}
                title={arch.title}
                description={arch.description}
                image={arch.image}
                stack={arch.stack}
                coreFeatures={arch.coreFeatures}
                isEven={idx % 2 !== 0}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
