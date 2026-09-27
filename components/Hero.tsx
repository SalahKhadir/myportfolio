import Link from "next/link";
import Image from "next/image";
import { profile, systemConfig } from "@/resources/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(#e8e8e8_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px] pt-24 pb-16">
      
      {/* Absolute technical overlay tags */}
      <div className="absolute inset-0 max-w-[90rem] mx-auto w-full px-6 pointer-events-none">
        
        {/* Bottom-Left */}
        <div className="absolute bottom-12 left-6 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-2">
            Status: <span className="text-gray-600 dark:text-gray-300">{systemConfig.status}</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></span>
          </div>
          <div>Focus: <span className="text-gray-600 dark:text-gray-300">{systemConfig.focus}</span></div>
          <div>Stack: <span className="text-gray-600 dark:text-gray-300">{systemConfig.stack}</span></div>
        </div>

        {/* Bottom-Right */}
        <div className="absolute bottom-12 right-6 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em] text-right">
          <div>Location: <span className="text-gray-600 dark:text-gray-300">{systemConfig.location}</span></div>
          <div>System: <span className="text-gray-600 dark:text-gray-300">{systemConfig.system}</span></div>
          <div>Ref: <span className="text-gray-600 dark:text-gray-300">{systemConfig.ref}</span></div>
        </div>

      </div>

      <div className="hero-content relative z-10 w-full max-w-[90rem] mx-auto md:absolute md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] px-6 flex flex-col items-center">
        
        {/* The Image */}
        <div className="parallax-wrapper absolute bottom-0 left-1/2 -translate-x-[50%] md:-bottom-32 md:left-[-5%] md:-translate-x-0 w-[95%] md:w-[800px] lg:w-[1000px] pointer-events-none z-20 mix-blend-normal md:dark:mix-blend-lighten md:mix-blend-hard-light">
          <div className="relative">
            <Image 
              src="/assets/Picture.png" 
              alt="Salah Khadir" 
              width={800} 
              height={1200} 
              className="w-full h-auto object-contain object-bottom md:object-left-bottom [mask-image:linear-gradient(to_top,transparent_0%,black_15%)]"
              priority 
            />
          </div>
        </div>

        {/* The Text */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <p className="hero-text text-gray-600 dark:text-gray-300 text-center text-lg lg:text-2xl z-30">
            Hi, my name is{" "}
            <span className="before:bg-accent relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 dark:before:skew-y-3 mx-2">
              <span className="relative block text-white font-bold px-1">{profile.name}</span>
            </span>{" "}
            and I&apos;m a
          </p>

          <h1 className="hero-title font-accent mt-4 text-[clamp(50px,10vw,160px)] leading-[0.9] text-center text-black dark:text-white uppercase tracking-tight whitespace-nowrap z-10">
            {profile.titlePrimary}<br/>{profile.titleSecondary}
          </h1>

          <p className="hero-subtitle mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-2xl text-center leading-relaxed [text-shadow:_0_1px_8px_rgba(255,255,255,0.8)] dark:[text-shadow:_0_1px_8px_rgba(0,0,0,0.8)] z-30">
            {profile.subtitle}
          </p>
        </div>

        <div className="relative z-30 mt-12 flex justify-center w-full">
          <Link href="/architectures" className="btn-link group [text-shadow:_0_1px_8px_rgba(255,255,255,0.8)] dark:[text-shadow:_0_1px_8px_rgba(0,0,0,0.8)] bg-white/50 dark:bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
            View Architectures →
          </Link>
          <Link href="/contact" className="btn-link group hidden sm:flex ml-8 [text-shadow:_0_1px_8px_rgba(255,255,255,0.8)] dark:[text-shadow:_0_1px_8px_rgba(0,0,0,0.8)] bg-white/50 dark:bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
            Initialize Discovery →
          </Link>
        </div>
      </div>
    </section>
  );
}
