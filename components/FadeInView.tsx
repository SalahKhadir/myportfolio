"use client";

import { ReactNode } from "react";
import AnimatedContent from "./AnimatedContent";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  ease?: string;
  wipe?: "none" | "up" | "down" | "left" | "right" | "center";
}

export default function FadeInView({
  children,
  className = "",
  delay = 0,
  distance = 60,
  duration = 0.9,
  ease = "power3.out",
  wipe = "none",
}: FadeInViewProps) {
  return (
    <AnimatedContent
      distance={distance}
      direction="vertical"
      duration={duration}
      ease={ease}
      delay={delay}
      wipe={wipe}
      threshold={0.12}
      className={className}
    >
      {children}
    </AnimatedContent>
  );
}

