"use client";

import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import FadeInView from "@/components/FadeInView";
import { useLanguage } from "@/components/LanguageContext";

export default function ClientCapabilities() {
  const { t } = useLanguage();
  const { ui } = t;

  return (
    <>
      <Navbar />
      <main className="pt-48 pb-24 px-6 max-w-[90rem] mx-auto w-full min-h-[80vh]">
        <FadeInView delay={0.2}>
          <header className="mb-24 border-b border-gray-alt/10 pb-12">
            <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
              {ui.capabilities.tagline}
            </p>
            <h1 className="heading mb-6">{ui.capabilities.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              {ui.capabilities.description}
            </p>
          </header>
        </FadeInView>

        <FadeInView className="mb-32">
          <ServicesSection />
        </FadeInView>

        <FadeInView className="mb-32">
          <TechnicalArsenal />
        </FadeInView>
      </main>
    </>
  );
}
