import Link from "next/link";
import Image from "next/image";

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
  return (
    <article className="project-item group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Media Mockup Column */}
      <div className={`lg:col-span-7 relative ${isEven ? "lg:order-2" : ""}`}>
        {/* Offset rotated backdrop container */}
        <div className={`absolute -inset-4 bg-gray-100 dark:bg-white/5 rounded-2xl transition-transform duration-500 group-hover:rotate-0 ${isEven ? "rotate-1" : "-rotate-1"}`}></div>
        
        {/* Browser-style window */}
        <div className="relative overflow-hidden rounded-xl border border-gray-alt/10 shadow-2xl bg-[#F8F7F4] dark:bg-black transition-transform duration-500 hover:scale-[1.01] aspect-[16/10]">
          {/* Window header */}
          <div className="h-8 border-b border-gray-alt/10 bg-gray-50 dark:bg-black/50 flex items-center px-4 gap-2 z-30 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          
          {/* Image placeholder or actual image (Using a div with gradient as placeholder if image fails) */}
          <div className="absolute inset-0 top-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#0a0a0a]">
            <Image src={image} fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" alt={title} />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-gray-400 opacity-20 text-sm p-8 text-center -z-10">
              [ SYSTEM SCHEMATIC: {title} ]
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
            View System Specs →
          </Link>
        </div>
      </div>
    </article>
  );
}
