"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import { 
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPhp,
  SiSpringboot, SiFastapi, SiDjango, SiLaravel, SiReact, SiNextdotjs, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb, SiMinio,
  SiDocker, SiKubernetes, SiTerraform, SiGitlab, SiGithubactions, SiLinux
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";

import AboutSection from "@/components/AboutSection";
import ArchitectureCard from "@/components/ArchitectureCard";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import FadeInView from "@/components/FadeInView";
import { useLanguage } from "@/components/LanguageContext";

const techLogos = [
  { node: <FaJava />, title: "Java" },
  { node: <SiSpringboot />, title: "Spring Boot" },
  { node: <SiPython />, title: "Python" },
  { node: <SiFastapi />, title: "FastAPI" },
  { node: <SiDjango />, title: "Django" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiCplusplus />, title: "C++" },
  { node: <SiPhp />, title: "PHP" },
  { node: <SiLaravel />, title: "Laravel" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <GrOracle />, title: "Oracle" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiMinio />, title: "MinIO" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiKubernetes />, title: "Kubernetes" },
  { node: <SiTerraform />, title: "Terraform" },
  { node: <SiGitlab />, title: "GitLab" },
  { node: <SiGithubactions />, title: "GitHub Actions" },
  { node: <SiLinux />, title: "Linux" }
];

export default function HomePage() {
  const { t } = useLanguage();
  const { ui, architectures } = t;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <FadeInView className="py-8 w-full overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technology stack"
          />
        </FadeInView>

        {/* About Me */}
        <FadeInView className="py-24 px-6 max-w-[90rem] mx-auto w-full border-t border-gray-alt/10">
          <AboutSection />
        </FadeInView>

        {/* Selected Architectures */}
        <FadeInView className="py-24 px-6 max-w-[90rem] mx-auto w-full border-t border-gray-alt/10">
          <div className="mb-16">
            <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
              {ui.page.engineeredSystemsTag}
            </p>
            <h2 className="heading mb-4">{ui.page.engineeredSystemsTitle}</h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl leading-relaxed">
              {ui.page.engineeredSystemsDesc}
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
              {ui.page.capabilitiesTag}
            </p>
            <h2 className="heading mb-4">{ui.page.capabilitiesTitle}</h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl leading-relaxed">
              {ui.page.capabilitiesDesc}
            </p>
          </div>
          
          <ServicesSection />
        </FadeInView>

        {/* Technical FAQ */}
        <FadeInView className="py-24 px-6 border-t border-gray-alt/10">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-4">{ui.page.faqTitle}</h2>
              <p className="font-mono text-sm uppercase tracking-widest text-gray-500">{ui.page.faqTag}</p>
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
