"use client";


import { useLanguage } from "./LanguageContext";
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

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {cvTechStackData.map((section, idx) => (
          <div key={idx} className="border border-gray-alt/10 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/30 p-6 rounded-2xl hover:border-accent/30 dark:hover:border-accent/50 transition-colors duration-500 group shadow-sm dark:shadow-none">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6 border-b border-gray-alt/10 dark:border-neutral-800/80 pb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              {section.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {section.items.map((item, i) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-alt/20 dark:border-neutral-800 bg-white dark:bg-neutral-950/60 hover:border-accent/30 dark:hover:border-neutral-600 text-xs font-mono text-gray-700 dark:text-neutral-300 transition-colors cursor-default shadow-sm dark:shadow-none">
                    {IconComponent ? <IconComponent className="w-4 h-4 text-gray-400 dark:text-neutral-400 shrink-0" /> : <div className="w-4 h-4 bg-gray-200 dark:bg-neutral-800 rounded-full shrink-0" />}
                    <span className="tracking-wide">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
