import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();
  const { services, ui } = t;
  return (
    <div className="grid max-w-7xl mx-auto w-full lg:grid-cols-3 border border-gray-alt/10 rounded-2xl overflow-hidden">
      {services.map((service, idx) => (
        <div 
          key={service.index} 
          className={`service-item group relative p-8 md:p-12 transition-colors duration-500 hover:bg-gray-50 dark:hover:bg-white/5 border-gray-alt/10 flex flex-col justify-between ${idx < 2 ? 'lg:border-r' : ''} ${idx > 0 ? 'border-t lg:border-t-0' : ''}`}
        >
          {/* Hover line indicator */}
          <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full"></div>
          
          <div>
            <span className="text-accent font-mono text-sm mb-6 block transform transition-transform duration-500 group-hover:-translate-y-1">
              {service.index}.
            </span>
            
            <h3 className="text-2xl font-bold dark:text-white mb-4 group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
              {service.description}
            </p>
          </div>

          <div className="mt-auto pt-4">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-bold hover:text-black dark:hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
            >
              <span>{ui.services.exploreCapability}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
