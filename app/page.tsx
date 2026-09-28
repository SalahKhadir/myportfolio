import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ArchitectureCard from "@/components/ArchitectureCard";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import FadeInView from "@/components/FadeInView";
import { architectures } from "@/resources/content";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* About Me */}
        <FadeInView className="py-24 px-6 max-w-[90rem] mx-auto w-full border-t border-gray-alt/10">
          <AboutSection />
        </FadeInView>

        {/* Selected Architectures */}
        <FadeInView className="py-24 px-6 max-w-[90rem] mx-auto w-full border-t border-gray-alt/10">
          <div className="mb-16">
            <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
              {"// PRODUCTION PLATFORMS"}
            </p>
            <h2 className="heading mb-4">ENGINEERED SYSTEMS</h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl leading-relaxed">
              High-throughput backend microservices, automated CI/CD delivery pipelines, and intelligent retrieval platforms engineered for resilience and scale.
            </p>
          </div>
          
          <div className="flex flex-col gap-24">
            {architectures.slice(0, 2).map((arch, idx) => (
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
        </FadeInView>
        
        {/* Technical Scope */}
        <FadeInView className="py-24 px-6 border-t border-gray-alt/10 bg-gray-50/30 dark:bg-black/20">
          <div className="mb-16 max-w-7xl mx-auto w-full">
            <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
              {"// TECHNICAL DOMAINS"}
            </p>
            <h2 className="heading mb-4">CORE CAPABILITIES</h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl leading-relaxed">
              Specializing in resilient server architectures, automated deployment workflows, and contextual data pipelines.
            </p>
          </div>
          
          <ServicesSection />
        </FadeInView>

        {/* Technical FAQ */}
        <FadeInView className="py-24 px-6 border-t border-gray-alt/10">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-4">SYSTEM SPECS & FAQ</h2>
              <p className="font-mono text-sm uppercase tracking-widest text-gray-500">DEEP DIVE INQUIRIES</p>
            </div>
            <FaqSection />
          </div>
        </FadeInView>

        {/* Contact Form (Phase 01) */}
        <FadeInView className="py-24 px-6 border-t border-gray-alt/10 bg-[radial-gradient(#e8e8e8_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]">
          <ContactForm />
        </FadeInView>
      </main>
    </>
  );
}
