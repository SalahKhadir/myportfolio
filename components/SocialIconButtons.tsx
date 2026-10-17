"use client";

import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import "./SocialIconButtons.css";

function SocialIcon({ name }: { name: "github" | "linkedin" | "email" }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"
        />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.9c-2.78.62-3.36-1.2-3.36-1.2-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.89v2.8c0 .28.18.6.69.5A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function VerticalSocialButtonBorder({
  side = "",
  brand = "var(--accent)",
}: {
  side?: "top" | "bottom" | "";
  brand?: string;
}) {
  const rawId = useId();
  const gradientId = "border-" + rawId.replaceAll(":", "");
  const fillGradientId = gradientId + "-fill";

  const path =
    side === "top"
      ? "M2.14 10.6A17.5 17.5 0 0 1 33.86 10.6"
      : "M2.14 25.4A17.5 17.5 0 0 0 33.86 25.4";
  const fillCenterY = side === "top" ? "0" : "36";

  return (
    <svg
      className="social-button-border"
      data-side={side || undefined}
      viewBox="0 0 36 36"
      aria-hidden="true"
      style={{ color: brand }}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1={side === "top" ? "0" : "0"}
          y1={side === "top" ? "0" : "36"}
          x2={side === "top" ? "36" : "36"}
          y2={side === "top" ? "18" : "18"}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset=".28" stopColor="currentColor" stopOpacity=".2" />
          <stop offset=".5" stopColor="currentColor" stopOpacity=".95" />
          <stop offset=".72" stopColor="currentColor" stopOpacity=".2" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id={fillGradientId}
          cx="18"
          cy={fillCenterY}
          r="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor" stopOpacity=".18" />
          <stop offset=".42" stopColor="currentColor" stopOpacity=".08" />
          <stop offset=".82" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle
        className="social-button-fill-edge"
        cx="18"
        cy="18"
        r="17"
        fill={"url(#" + fillGradientId + ")"}
      />
      <circle className="social-button-border-base" cx="18" cy="18" r="17.5" />
      <path
        className="social-button-border-edge"
        d={path}
        stroke={"url(#" + gradientId + ")"}
      />
    </svg>
  );
}

export default function SocialIconButtons({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const { systemConfig, ui } = t;
  const [activeIndex, setActiveIndex] = useState(-1);

  const socials = [
    {
      label: ui.hero.socialLinks?.github ?? "GitHub",
      href: systemConfig.github,
      icon: "github" as const,
      isExternal: true,
    },
    {
      label: ui.hero.socialLinks?.linkedin ?? "LinkedIn",
      href: systemConfig.linkedin,
      icon: "linkedin" as const,
      isExternal: true,
    },
    {
      label: ui.hero.socialLinks?.email ?? "Email",
      href: `mailto:${systemConfig.email}`,
      icon: "email" as const,
      isExternal: false,
    },
  ];

  return (
    <div
      className={`social-icon-buttons-vertical ${className}`.trim()}
      aria-label="Social links"
      onMouseLeave={() => setActiveIndex(-1)}
    >
      {socials.map((social, index) => {
        const adjacentSide: "top" | "bottom" | "" =
          activeIndex < 0 || Math.abs(index - activeIndex) !== 1
            ? ""
            : index < activeIndex
            ? "bottom"
            : "top";

        return (
          <a
            key={social.href}
            className="social-icon-button"
            href={social.href}
            target={social.isExternal ? "_blank" : undefined}
            rel={social.isExternal ? "noreferrer noopener" : undefined}
            title={social.label}
            aria-label={social.label}
            data-adjacent-side={adjacentSide || undefined}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(-1)}
          >
            <VerticalSocialButtonBorder side={adjacentSide} brand="var(--accent)" />
            <span className="social-icon-button-swap">
              <SocialIcon name={social.icon} />
            </span>
            <span className="social-icon-button-swap social-icon-button-arrow">
              <ArrowUpRight size={17} strokeWidth={2} />
            </span>
          </a>
        );
      })}
    </div>
  );
}
