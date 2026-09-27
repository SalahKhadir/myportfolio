import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Capabilities | Salah Khadir",
  description: "Core engineering domains and technical FAQ.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-[90rem] mx-auto w-full">
        <header className="mb-24 border-b border-gray-alt/10 pb-12">
          <h1 className="heading mb-6">CAPABILITIES</h1>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-sm max-w-2xl">
            CORE ENGINEERING DOMAINS AND TECHNICAL FAQ.
          </p>
        </header>

        <section className="mb-32">
          <ServicesSection />
        </section>

        <section className="max-w-4xl mx-auto w-full">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-4">TECHNICAL FAQ</h2>
            <p className="font-mono text-sm uppercase tracking-widest text-gray-500">DEEP DIVE INQUIRIES</p>
          </div>
          <FaqSection />
        </section>
      </main>
    </>
  );
}
