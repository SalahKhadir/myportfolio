"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F8F7F4]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-alt/10">
      <div className="w-full px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:scale-105 transition-transform duration-300 flex items-center">
          <Image src="/assets/mylogo/WhiteBG.png" alt="Logo" width={200} height={200} className="dark:hidden h-20 w-auto" priority />
          <Image src="/assets/mylogo/BlackBG.png" alt="Logo" width={200} height={200} className="hidden dark:block h-20 w-auto" priority />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest">
          <Link href="/architectures" className="group transition-colors hover:text-accent">
            <span className="text-accent/40 group-hover:text-accent font-bold mr-2">01.</span> 
            Engineered Systems
          </Link>
          <Link href="/experience" className="group transition-colors hover:text-accent">
            <span className="text-accent/40 group-hover:text-accent font-bold mr-2">02.</span> 
            Track Record
          </Link>
          <Link href="/about" className="group transition-colors hover:text-accent">
            <span className="text-accent/40 group-hover:text-accent font-bold mr-2">03.</span> 
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#F8F7F4] dark:bg-[#0a0a0a] border-b border-gray-alt/10 p-6 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest">
          <Link href="/architectures" onClick={() => setIsOpen(false)}>
            <span className="text-accent/40 font-bold mr-2">01.</span> Engineered Systems
          </Link>
          <Link href="/experience" onClick={() => setIsOpen(false)}>
            <span className="text-accent/40 font-bold mr-2">02.</span> Track Record
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <span className="text-accent/40 font-bold mr-2">03.</span> About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-accent">
            Get In Touch →
          </Link>
        </div>
      )}
    </nav>
  );
}
