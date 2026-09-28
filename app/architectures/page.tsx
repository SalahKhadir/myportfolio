import Navbar from "@/components/Navbar";
import ArchitectureCard from "@/components/ArchitectureCard";
import FadeInView from "@/components/FadeInView";
import { architectures } from "@/resources/content";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineered Systems & Architectures',
  description:
    'Production backend architectures, microservices, and automated DevSecOps pipelines built by Salah Khadir.',
  alternates: {
    canonical: 'https://www.salahkhadir.codes/architectures',
  },
};

export default function ArchitecturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-24 px-6 max-w-[90rem] mx-auto w-full">
        <FadeInView delay={0.2}>
          <header className="mb-24 border-b border-gray-alt/10 pb-12">
            <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
              {"// PRODUCTION PLATFORMS"}
            </p>
            <h1 className="heading mb-6">ENGINEERED SYSTEMS</h1>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              High-throughput backend microservices, automated CI/CD delivery pipelines, and intelligent retrieval platforms engineered for resilience and scale.
            </p>
          </header>
        </FadeInView>

        <div className="flex flex-col gap-32">
          {architectures.map((arch, idx) => (
            <FadeInView key={arch.index}>
              <ArchitectureCard 
                index={arch.index}
                category={arch.category}
                title={arch.title}
                description={arch.description}
                image={arch.image}
                stack={arch.stack}
                coreFeatures={arch.coreFeatures}
                isEven={idx % 2 !== 0}
              />
            </FadeInView>
          ))}
        </div>
      </main>
    </>
  );
}
