"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import SocialIconButtons from "./SocialIconButtons";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { t, language } = useLanguage();
  const { systemConfig, profile, ui } = t;
  const cvUrl = language === "fr" ? "/Salah_KHADIR_CV(fr).pdf" : "/Salah_KHADIR_CV(en).pdf";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number | null = null;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (!isVisible && animationFrameId !== null) {
          window.cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible || animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null;

        // Update CSS variables for spotlight without React re-renders
        if (containerRef.current) {
          containerRef.current.style.setProperty("--cursor-x", `${e.clientX}px`);
          containerRef.current.style.setProperty("--cursor-y", `${e.clientY}px`);
        }

        // Smooth parallax on portrait cut-out
        if (portraitRef.current) {
          const normX = (e.clientX / window.innerWidth - 0.5) * 2;
          const normY = (e.clientY / window.innerHeight - 0.5) * 2;
          portraitRef.current.style.transform = `translate3d(${normX * -20}px, ${normY * -20}px, 0) rotateY(${normX * -3}deg) rotateX(${normY * 3}deg)`;
        }
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      setIsHovering(false);
      if (portraitRef.current) {
        portraitRef.current.style.transform = "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      observer.disconnect();
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-20 bg-[radial-gradient(#e8e8e8_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:30px_30px]"
      style={{ perspective: "1000px" }}
    >
      {/* Interactive Cursor Spotlight Glow on Dot-Grid (GPU-accelerated, zero React re-renders) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 will-change-[opacity]"
        style={{
          opacity: isHovering ? 1 : 0,
          background: "radial-gradient(550px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(var(--accent-rgb, 144, 202, 249), 0.12), transparent 75%)",
        }}
      />

      {/* Radar Ping Wave from Status Badge Anchor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-10 z-0 hidden lg:block"
      >
        <span className="absolute w-32 h-32 -left-14 -top-14 rounded-full border border-accent/20 animate-ping opacity-30" style={{ animationDuration: "3s" }} />
        <span className="absolute w-48 h-48 -left-22 -top-22 rounded-full border border-accent/10 animate-ping opacity-20" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>
      
      {/* Left Metadata Tag (Bottom-Left) */}
      <div 
        className="absolute bottom-10 left-8 hidden lg:block font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em] leading-relaxed z-30 select-none animate-fadeIn"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {ui.hero.statusLabel} <span className="text-gray-600 dark:text-gray-300">{systemConfig.status}</span>
        </div>
        <div>{ui.hero.focusLabel} <span className="text-gray-600 dark:text-gray-300">{systemConfig.focus}</span></div>
        <div>{ui.hero.stackLabel} <span className="text-gray-600 dark:text-gray-300">{systemConfig.stack}</span></div>
      </div>

      {/* Floating Vertical Social Icon Dock (Desktop Right) */}
      <div 
        className="absolute right-6 xl:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-30 select-none"
      >
        <span className="w-px h-12 bg-gradient-to-b from-transparent to-gray-300 dark:to-neutral-800" />
        <SocialIconButtons />
        <span className="w-px h-12 bg-gradient-to-t from-transparent to-gray-300 dark:to-neutral-800" />
      </div>

      {/* Right Metadata Tag (Bottom-Right) */}
      <div 
        className="absolute bottom-10 right-8 hidden lg:block font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em] leading-relaxed text-right z-30 select-none animate-fadeIn"
      >
        <div>{ui.hero.locationLabel} <span className="text-gray-600 dark:text-gray-300">{systemConfig.location}</span></div>
        <div>{ui.hero.systemLabel} <span className="text-gray-600 dark:text-gray-300">{systemConfig.system}</span></div>
        <div>{ui.hero.refLabel} <span className="text-gray-600 dark:text-gray-300">{systemConfig.ref}</span></div>
      </div>

      {/* Main Centered Stage */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:h-[85vh] md:min-h-[640px] pt-24 md:pt-0">

        {/* 1. Portrait Cut-out Layer */}
        <div 
          className="relative md:absolute order-1 md:order-none bottom-0 md:-left-8 lg:-left-14 xl:-left-68 z-0 md:z-20 pointer-events-none select-none w-full max-w-[300px] sm:max-w-[360px] md:max-w-none md:w-[440px] lg:w-[500px] xl:w-[750px] mx-auto flex items-end justify-center -mb-10 md:mb-0"
        >
          <div 
            ref={portraitRef} 
            className="relative w-full h-auto flex items-end will-change-transform transition-transform duration-75 ease-out"
          >
            <Image
              src="/assets/Salah_Khadir.webp"
              alt={profile.name}
              width={660}
              height={900}
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 500px, 750px"
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl mix-blend-multiply dark:mix-blend-lighten opacity-93 brightness-100 contrast-110 [mask-image:linear-gradient(to_top,transparent_0%,black_20%)] md:[mask-image:linear-gradient(to_top,transparent_0%,black_15%)]"
              priority
              fetchPriority="high"
            />
          </div>
        </div>

        {/* 2. Typography Block */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 order-2 md:order-none pb-20 md:pb-0"
        >
          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl font-sans tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {ui.hero.greeting}{" "}
            <span className="relative inline-block px-2.5 py-0.5 bg-accent text-white font-bold before:absolute before:-inset-1 before:bg-accent before:-skew-y-3 before:-z-10 mx-2">
              {profile.name}
            </span>{" "}
            {ui.hero.andIAmA}
          </motion.p>

          {/* Main Display Headline */}
          <motion.h1 variants={itemVariants} className="font-accent mt-4 text-[clamp(44px,11vw,185px)] md:text-[clamp(64px,12.5vw,185px)] leading-[0.88] tracking-tight uppercase text-black dark:text-white whitespace-normal md:whitespace-nowrap select-none">
            {profile.titlePrimary}
            <br />
            {profile.titleSecondary}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="mt-6 text-gray-500 dark:text-gray-400 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {profile.subtitle}
          </motion.p>

          {/* Action CTA */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full">
            <Link
              href="/architectures"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {ui.hero.viewArchitectures}
            </Link>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {ui.hero.resumeCv}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {ui.hero.getInTouch}
            </Link>
          </motion.div>

          {/* Social Icons for Mobile / Small Screens */}
          <motion.div variants={itemVariants} className="mt-8 lg:hidden flex justify-center">
            <SocialIconButtons />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
