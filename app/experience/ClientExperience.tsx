"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import FadeInView from "@/components/FadeInView";
import CertificationCard from "@/components/CertificationCard";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

function renderHighlightedMetric(text: string) {
  const parts = text.split(/(-\d+(?:\.\d+)?%|\b\d+m\d+s\b|\b\d+(?:\.\d+)?%|\b\d+\b)/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span
          key={index}
          className="font-semibold text-accent dark:text-cyan-300 bg-accent/10 dark:bg-accent/15 px-1.5 py-0.5 rounded border border-accent/20 mx-0.5 inline-block"
        >
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function ClientExperience() {
  const { t } = useLanguage();
  const { ui, experience, education, certifications } = t;

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <>
      <Navbar />
      <main className="pt-48 pb-24 px-6 max-w-[90rem] mx-auto w-full">
        <FadeInView delay={0.2}>
          <header className="mb-24 border-b border-gray-alt/10 pb-12">
            <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
              {ui.experience.tagline}
            </p>
            <h1 className="heading mb-6">{ui.experience.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg md:text-xl max-w-3xl leading-relaxed">
              {ui.experience.description}
            </p>
          </header>
        </FadeInView>

        {/* Experience Timeline */}
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-2">{ui.experience.careerTimeline}</h2>
          </div>

          <div ref={timelineRef} className="relative ml-4 md:ml-6 space-y-20">
            {/* Base timeline track */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-3 bottom-3 w-[2px] bg-gray-200 dark:bg-white/10"
            />

            {/* Glowing Laser Tracer Line */}
            <motion.div
              aria-hidden="true"
              style={{ scaleY }}
              className="absolute left-0 top-3 bottom-3 w-[2px] origin-top bg-gradient-to-b from-accent via-accent to-accent/60 shadow-[0_0_10px_rgba(var(--accent-rgb,144,202,249),0.8)] z-10"
            />

            {experience.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.3, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="relative pl-8 md:pl-12 group will-change-[transform,opacity]"
              >
                {/* Milestone Dot with Radar Pulse */}
                <div className="absolute -left-[5px] top-2 z-20 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0.4 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4 }}
                    className="w-3 h-3 bg-accent rounded-full outline outline-4 outline-white dark:outline-[#0a0a0a] shadow-[0_0_10px_rgba(var(--accent-rgb,144,202,249),0.9)]"
                  />
                  <motion.span
                    initial={{ scale: 1, opacity: 0 }}
                    whileInView={{
                      scale: [1, 2.4, 2.8],
                      opacity: [0.8, 0.3, 0],
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute w-3 h-3 rounded-full bg-accent pointer-events-none"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                  <h3 className="text-2xl font-bold dark:text-white group-hover:text-accent transition-colors duration-300">{job.role}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 bg-gray-alt/10 px-2 py-1 rounded">
                    {job.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-6">
                  <span className="text-accent font-bold">{job.company}</span>
                  <span className="text-gray-alt">/</span>
                  <span className="text-gray-500">{job.location}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6 max-w-3xl">
                  {job.summary}
                </p>

                <ul className="space-y-3 mb-8 max-w-3xl">
                  {job.metrics.map((metric, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 + i * 0.06,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3 will-change-[transform,opacity]"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0 shadow-[0_0_6px_rgba(var(--accent-rgb,144,202,249),0.8)]" />
                      <span className="text-sm font-mono text-gray-600 dark:text-gray-400 leading-relaxed">
                        {renderHighlightedMetric(metric)}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.85, y: 6 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.12 + techIdx * 0.03,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-mono text-[9px] uppercase tracking-widest rounded-full border border-gray-alt/20 group-hover:border-accent/40 hover:!border-accent hover:text-accent transition-colors cursor-default will-change-transform"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Certifications */}
          <FadeInView>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-2">{ui.experience.certifications}</h2>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <CertificationCard
                  key={idx}
                  cert={cert}
                  issuerLabel={ui.experience.issuer}
                />
              ))}
            </div>
          </FadeInView>

          {/* Education */}
          <FadeInView>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-2">{ui.experience.education}</h2>
            </div>
            
            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-gray-alt/20 hover:border-accent transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 block mb-3">{edu.period}</span>
                  <h3 className="text-xl font-bold dark:text-white mb-2 leading-tight">{edu.degree}</h3>
                  <p className="text-accent text-sm mb-4 font-medium">{edu.specialization}</p>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 space-y-1">
                    <span className="block text-gray-700 dark:text-gray-300 font-bold">{edu.school}</span>
                    <span className="block">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </main>
    </>
  );
}
