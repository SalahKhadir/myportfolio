"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInView({ children, className = "", delay = 0 }: FadeInViewProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1], 
        delay 
      }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.section>
  );
}
