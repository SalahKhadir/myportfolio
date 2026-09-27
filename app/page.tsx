import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArchitectureCard from "@/components/ArchitectureCard";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import { architectures } from "@/resources/content";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Selected Architectures */}
        <section className="py-24 px-6 max-w-[90rem] mx-auto w-full border-t border-gray-alt/10">
          <div className="mb-16">
            <h2 className="heading mb-4">SELECTED ARCHITECTURES</h2>
            <p className="font-mono text-sm uppercase tracking-widest text-gray-500">SYSTEMS & PLATFORMS</p>
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
        </section>
        
        {/* Technical Scope */}
        <section className="py-24 px-6 border-t border-gray-alt/10 bg-gray-50/30 dark:bg-black/20">
          <div className="mb-16 max-w-7xl mx-auto w-full">
            <h2 className="heading mb-4">WHAT I DO</h2>
            <p className="font-mono text-sm uppercase tracking-widest text-gray-500">TECHNICAL SCOPE</p>
          </div>
          
          <ServicesSection />
        </section>

        {/* Quick FAQ Preview & Contact */}
        <section className="py-24 px-6 border-t border-gray-alt/10">
          <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-4">TECHNICAL FAQ</h2>
                <p className="font-mono text-sm uppercase tracking-widest text-gray-500">COMMON INQUIRIES</p>
              </div>
              <FaqSection />
            </div>
            
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
