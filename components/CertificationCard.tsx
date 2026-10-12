"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

interface CertificationCardProps {
  cert: {
    title: string;
    code: string;
    issuer: string;
    type: string;
  };
  issuerLabel: string;
}

export default function CertificationCard({
  cert,
  issuerLabel,
}: CertificationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const foilRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !foilRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (frameRef.current !== null) return;

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      if (!foilRef.current) return;
      foilRef.current.style.opacity = "1";
      foilRef.current.style.background = `radial-gradient(400px circle at ${x}% ${y}%, rgba(144, 202, 249, 0.18), rgba(216, 180, 254, 0.12) 35%, rgba(110, 231, 183, 0.10) 60%, transparent 80%)`;
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (foilRef.current) {
      foilRef.current.style.opacity = "0";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-gray-alt/20 bg-gray-50/60 dark:bg-white/[0.03] p-8 transition-colors duration-500 hover:border-accent/60 shadow-sm hover:shadow-xl dark:hover:shadow-accent/5 group will-change-transform"
    >
      {/* Dynamic Holographic Foil Shimmer (zero React re-renders) */}
      <div
        ref={foilRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-0 will-change-[opacity]"
      />

      {/* Iridescent Foil Diagonal Sheen Sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"
      />

      {/* Header Badges */}
      <div className="relative z-10 flex justify-between items-start mb-5">
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
          {cert.type}
        </span>
        <span className="font-mono text-[10px] bg-accent text-white px-2.5 py-1 rounded-md font-bold uppercase tracking-widest shadow-sm">
          {cert.code}
        </span>
      </div>

      {/* Title & Issuer */}
      <h3 className="relative z-10 text-xl font-bold dark:text-white mb-2 group-hover:text-accent transition-colors duration-300">
        {cert.title}
      </h3>
      <p className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-gray-500">
        {issuerLabel}{" "}
        <span className="text-gray-800 dark:text-gray-200 font-semibold">{cert.issuer}</span>
      </p>
    </motion.div>
  );
}
