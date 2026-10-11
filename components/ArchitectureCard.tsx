"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { useLanguage } from "./LanguageContext";

interface ArchitectureCardProps {
  index: string;
  category: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  coreFeatures: string[];
  isEven?: boolean;
}

export default function ArchitectureCard({
  index,
  category,
  title,
  description,
  image,
  stack,
  coreFeatures,
  isEven = false,
}: ArchitectureCardProps) {
  const { t } = useLanguage();
  const { ui } = t;

  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <article className="project-item group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Media Mockup Column */}
      <div className={`lg:col-span-7 relative ${isEven ? "lg:order-2" : ""}`} style={{ perspective: "1200px" }}>
        {/* Offset rotated backdrop container */}
        <div className={`absolute -inset-4 bg-gray-100 dark:bg-white/5 rounded-2xl transition-transform duration-500 group-hover:rotate-0 ${isEven ? "rotate-1" : "-rotate-1"}`}></div>
        
        {/* Interactive 3D Browser-style window */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: "preserve-3d",
            transition: tilt.opacity === 0 ? "transform 0.5s ease-out" : "none",
          }}
          className="relative overflow-hidden rounded-xl border border-gray-alt/10 shadow-2xl bg-[#F8F7F4] dark:bg-black aspect-[16/10] will-change-transform"
        >
          {/* Dynamic Glare Light Sheen */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              opacity: tilt.opacity,
              background: `radial-gradient(circle 350px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.18), transparent 70%)`,
            }}
          />

          {/* Window header */}
          <div className="h-8 border-b border-gray-alt/10 bg-gray-50 dark:bg-black/50 flex items-center px-4 gap-2 z-20 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          
          {/* Image placeholder or actual image */}
          <div className="absolute inset-0 top-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#0a0a0a]">
            <Image src={image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" alt={title} />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-gray-400 opacity-20 text-sm p-8 text-center -z-10">
              [ {ui.card.systemSchematic} {title} ]
            </div>
          </div>

          {/* Floating tech stack pills pinned to bottom-left */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
            {stack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-widest rounded-full border border-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info Column */}
      <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : ""}`}>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-sm text-accent font-bold">{index}.</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400">{category}</span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold dark:text-white tracking-tight group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3">
          {coreFeatures.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
              <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-4">
          <Link href="/contact" className="btn-link group">
            {ui.card.viewSystemSpecs}
          </Link>
        </div>
      </div>
    </article>
  );
}
