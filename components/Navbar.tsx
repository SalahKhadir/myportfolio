"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="w-full px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:scale-105 transition-transform duration-300 flex items-center">
          <Image src="/assets/mylogo/WhiteBG.png" alt="Logo" width={200} height={200} className="dark:hidden h-20 w-auto mt-6" priority />
          <Image src="/assets/mylogo/BlackBG.png" alt="Logo" width={200} height={200} className="hidden dark:block h-20 w-auto mt-6" priority />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest">
          <Link href="/architectures" className="group transition-colors hover:text-accent">
            <span className="text-accent/40 group-hover:text-accent font-bold mr-2">01.</span> 
            Engineered Systems
          </Link>
          <Link href="/capabilities" className="group transition-colors hover:text-accent">
            <span className="text-accent/40 group-hover:text-accent font-bold mr-2">02.</span> 
            Capabilities
          </Link>
          <Link href="/experience" className="group transition-colors hover:text-accent">
            <span className="text-accent/40 group-hover:text-accent font-bold mr-2">03.</span> 
            Track Record
          </Link>
          <Link href="/about" className="group transition-colors hover:text-accent">
            <span className="text-accent/40 group-hover:text-accent font-bold mr-2">04.</span> 
            About
          </Link>
          
          <Link href="/contact" className="button group ml-4">
            <span className="button-content uppercase tracking-widest text-[10px] font-bold">Get In Touch</span>
          </Link>
          
          <div className="ml-3 border-l border-gray-alt/20 pl-3">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button className="p-2 text-black dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-t border-gray-alt/10 dark:border-neutral-800 p-8 flex flex-col gap-8 font-mono text-sm uppercase tracking-widest z-40 overflow-y-auto">
          <Link href="/architectures" onClick={() => setIsOpen(false)} className="flex items-center text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors">
            <span className="text-accent/60 font-bold mr-4">01.</span> Engineered Systems
          </Link>
          <Link href="/capabilities" onClick={() => setIsOpen(false)} className="flex items-center text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors">
            <span className="text-accent/60 font-bold mr-4">02.</span> Capabilities
          </Link>
          <Link href="/experience" onClick={() => setIsOpen(false)} className="flex items-center text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors">
            <span className="text-accent/60 font-bold mr-4">03.</span> Track Record
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="flex items-center text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors">
            <span className="text-accent/60 font-bold mr-4">04.</span> About
          </Link>
          
          <div className="h-px w-full bg-gray-alt/10 dark:bg-neutral-800 my-2" />

          <a 
            href="/Salah_KHADIR_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>Resume / CV</span>
            <span className="text-lg">↗</span>
          </a>
          
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="w-full py-4 mt-auto bg-black text-white dark:bg-white dark:text-black font-bold text-xs uppercase tracking-widest rounded-md text-center hover:bg-gray-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
