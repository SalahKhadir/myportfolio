"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUp, Mail, FileText, Clock, MapPin, Terminal } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const { systemConfig, ui } = t;
  const [rabatTime, setRabatTime] = useState("");

  const cvUrl = language === "fr" ? "/Salah_KHADIR_CV(fr).pdf" : "/Salah_KHADIR_CV(en).pdf";
  const currentYear = new Date().getFullYear();

  // Live Rabat Time Clock (Africa/Casablanca)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Casablanca",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setRabatTime(timeStr);
      } catch {
        // Fallback
        const now = new Date();
        setRabatTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-800 bg-[#F4F3EF] dark:bg-[#0c0c0c] transition-colors relative z-20">
      {/* Top Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-gray-200 dark:border-neutral-800/80">
          {/* Brand & Mission Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <Link href="/" className="hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/mylogo/horizontallogoLightBG.png"
                alt="Salah Khadir Logo"
                width={400}
                height={200}
                className="dark:hidden h-8 sm:h-9 w-auto"
              />
              <Image
                src="/assets/mylogo/horizontallogoDarkBG.png"
                alt="Salah Khadir Logo"
                width={400}
                height={200}
                className="hidden dark:block h-8 sm:h-9 w-auto"
              />
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              {ui.footer.mission}
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{systemConfig.status}</span>
            </div>

            {/* Live Rabat Clock & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-accent" />
                <span>{systemConfig.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-accent" />
                <span>{ui.footer.rabatUtc}: {rabatTime || "--:--:--"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-black dark:text-white font-bold">
              {ui.footer.navigation}
            </h4>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
              <li>
                <Link
                  href="/architectures"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="text-accent/40 group-hover:text-accent font-bold">01.</span>
                  {ui.navbar.engineeredSystems}
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="text-accent/40 group-hover:text-accent font-bold">02.</span>
                  {ui.navbar.capabilities}
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="text-accent/40 group-hover:text-accent font-bold">03.</span>
                  {ui.navbar.trackRecord}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="text-accent/40 group-hover:text-accent font-bold">04.</span>
                  {ui.navbar.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <span className="text-accent/40 group-hover:text-accent font-bold">05.</span>
                  {ui.navbar.getInTouch}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Channels Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-black dark:text-white font-bold">
              {ui.footer.channelsAndResources}
            </h4>
            <div className="flex flex-col space-y-3 font-mono text-xs">
              <a
                href={systemConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <SiGithub size={15} className="group-hover:text-accent transition-colors" />
                <span>github.com/SalahKhadir</span>
                <span className="text-gray-400 text-[10px]">↗</span>
              </a>

              <a
                href={systemConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <FaLinkedin size={15} className="group-hover:text-accent transition-colors" />
                <span>linkedin.com/in/salah-khadir</span>
                <span className="text-gray-400 text-[10px]">↗</span>
              </a>

              <a
                href={`mailto:${systemConfig.email}`}
                className="inline-flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
              >
                <Mail size={15} className="group-hover:text-accent transition-colors" />
                <span>{systemConfig.email}</span>
                <span className="text-gray-400 text-[10px]">↗</span>
              </a>

              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-accent font-bold hover:underline transition-colors mt-2"
              >
                <FileText size={15} />
                <span>
                  {ui.footer.downloadResume}
                </span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>

            {/* Terminal Shortcut Hint */}
            <div className="pt-2 text-[11px] font-mono text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <Terminal size={13} className="text-accent" />
              <span>
                {ui.footer.pressKey}{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-[10px] font-bold border border-gray-300 dark:border-neutral-700">
                  Ctrl / ⌘ + K
                </kbd>{" "}
                {ui.footer.forCopilot}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <span>© {currentYear} Salah Khadir.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              {ui.footer.allRightsReserved}
            </span>
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-gray-400">
              {systemConfig.system}
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors group p-1"
              aria-label="Back to top"
            >
              <span>{ui.footer.backToTop}</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
