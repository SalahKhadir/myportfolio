import Navbar from "@/components/Navbar";
import ArchitectureCard from "@/components/ArchitectureCard";
import { architectures } from "@/resources/content";

export const metadata = {
  title: "Architectures | Salah Khadir",
  description: "A catalog of backend systems and DevSecOps pipelines.",
};

export default function ArchitecturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[90rem] mx-auto w-full">
        <header className="mb-24 border-b border-gray-alt/10 pb-12">
          <h1 className="heading mb-6">ARCHITECTURES</h1>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-sm max-w-2xl">
            A CATALOG OF SYSTEMS, PIPELINES, AND PLATFORMS ENGINEERED FOR RESILIENCE AND SCALE.
          </p>
        </header>

        <div className="flex flex-col gap-32">
          {architectures.map((arch, idx) => (
            <ArchitectureCard 
              key={arch.index}
              index={arch.index}
              category={arch.category}
              title={arch.title}
              description={arch.description}
              image={arch.image}
              stack={arch.stack}
              coreFeatures={arch.coreFeatures}
              isEven={idx % 2 !== 0}
            />
          ))}
        </div>
      </main>
    </>
  );
}
