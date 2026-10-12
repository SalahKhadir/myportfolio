"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { ChevronDown } from "lucide-react";
import { 
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPhp,
  SiSpringboot, SiFastapi, SiDjango, SiLaravel, SiReact, SiNextdotjs, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb, SiMinio,
  SiDocker, SiKubernetes, SiTerraform, SiGitlab, SiGithubactions, SiLinux
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { FiShield } from "react-icons/fi";
import { FaJava } from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  FaJava, SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPhp,
  SiSpringboot, SiFastapi, SiDjango, SiLaravel, SiReact, SiNextdotjs, SiTailwindcss,
  SiPostgresql, SiMysql, GrOracle, SiMongodb, SiMinio,
  SiDocker, SiKubernetes, SiTerraform, SiGitlab, SiGithubactions, SiLinux, FiShield,
  TbDatabase
};

export default function TechnicalArsenal() {
  const { t } = useLanguage();
  const { ui, cvTechStackData } = t;

  // Initialize with all categories expanded by default
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const toggleCategory = (idx: number) => {
    setExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="mt-32 border-t border-gray-alt/10 pt-24">
      <div className="mb-16">
        <p className="font-mono text-accent uppercase tracking-widest text-xs mb-4 font-bold">
          {ui.technicalArsenal.tagline}
        </p>
        <h2 className="text-4xl md:text-5xl font-accent uppercase tracking-tight mb-4">{ui.technicalArsenal.title}</h2>
        <p className="font-mono text-gray-500 uppercase tracking-widest text-sm max-w-2xl">
          {ui.technicalArsenal.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {cvTechStackData.map((section, idx) => {
          const isOpen = expanded[idx] !== false;

          return (
            <div
              key={idx}
              className="border border-gray-alt/10 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/30 p-6 rounded-2xl hover:border-accent/30 dark:hover:border-accent/50 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleCategory(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-accent border-b border-gray-alt/10 dark:border-neutral-800/80 pb-4 text-left cursor-pointer group-hover:text-black dark:group-hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="font-bold text-accent">{section.category}</span>
                  <span className="text-[10px] text-gray-400 font-mono tracking-normal ml-1">
                    ({section.items.length})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronDown
                    size={15}
                    className={`text-gray-400 group-hover:text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>

              {/* Accordion Body with Stagger Scale-Pop Badge Reveal */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`content-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden pt-6"
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {section.items.map((item, i) => {
                        const IconComponent = iconMap[item.icon];
                        return (
                          <motion.div
                            key={i}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8, y: 8 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                },
                              },
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-alt/20 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 hover:border-accent/40 dark:hover:border-accent/40 text-xs font-mono text-gray-700 dark:text-neutral-300 transition-colors cursor-default shadow-sm dark:shadow-none"
                          >
                            {IconComponent ? (
                              <IconComponent className="w-4 h-4 text-gray-400 dark:text-neutral-400 shrink-0" aria-hidden="true" />
                            ) : (
                              <div className="w-4 h-4 bg-gray-200 dark:bg-neutral-800 rounded-full shrink-0" aria-hidden="true" />
                            )}
                            <span className="tracking-wide">{item.name}</span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
