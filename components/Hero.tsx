"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { profile, systemConfig } from "@/resources/content";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -30}px, 0) rotateY(${mousePosition.x * -5}deg) rotateX(${mousePosition.y * 5}deg)`,
    transition: "transform 0.1s ease-out",
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-20 bg-[radial-gradient(#e8e8e8_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:30px_30px]"
      style={{ perspective: "1000px" }}
    >
      
      {/* Left Metadata Tag (Bottom-Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-8 hidden lg:block font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em] leading-relaxed z-30 select-none"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Status: <span className="text-gray-600 dark:text-gray-300">{systemConfig.status}</span>
        </div>
        <div>Focus: <span className="text-gray-600 dark:text-gray-300">{systemConfig.focus}</span></div>
        <div>Stack: <span className="text-gray-600 dark:text-gray-300">{systemConfig.stack}</span></div>
      </motion.div>

      {/* Right Metadata Tag (Bottom-Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 right-8 hidden lg:block font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em] leading-relaxed text-right z-30 select-none"
      >
        <div>Location: <span className="text-gray-600 dark:text-gray-300">{systemConfig.location}</span></div>
        <div>System: <span className="text-gray-600 dark:text-gray-300">{systemConfig.system}</span></div>
        <div>Ref: <span className="text-gray-600 dark:text-gray-300">{systemConfig.ref}</span></div>
      </motion.div>

      {/* Main Centered Stage */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:h-[85vh] md:min-h-[640px] pt-24 md:pt-0">

        {/* 1. Portrait Cut-out Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative md:absolute order-1 md:order-none bottom-0 md:-left-8 lg:-left-14 xl:-left-68 z-0 md:z-20 pointer-events-none select-none w-full max-w-[300px] sm:max-w-[360px] md:max-w-none md:w-[440px] lg:w-[500px] xl:w-[750px] mx-auto flex items-end justify-center -mb-10 md:mb-0"
        >
          <div className="relative w-full h-auto flex items-end" style={parallaxStyle}>
            <Image
              src="/assets/Salah.png"
              alt={profile.name}
              width={660}
              height={900}
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl mix-blend-multiply dark:mix-blend-lighten opacity-93 brightness-100 contrast-110 [mask-image:linear-gradient(to_top,transparent_0%,black_20%)] md:[mask-image:linear-gradient(to_top,transparent_0%,black_15%)]"
              priority
            />
          </div>
        </motion.div>

        {/* 2. Typography Block */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 order-2 md:order-none pb-20 md:pb-0"
        >
          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl font-sans tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            Hi, my name is{" "}
            <span className="relative inline-block px-2.5 py-0.5 bg-accent text-white font-bold before:absolute before:-inset-1 before:bg-accent before:-skew-y-3 before:-z-10 mx-2">
              {profile.name}
            </span>{" "}
            and I&apos;m a
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
              VIEW ARCHITECTURES &rarr;
            </Link>
            <a
              href="/Salah_KHADIR_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              RESUME / CV ↗
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              GET IN TOUCH &rarr;
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
