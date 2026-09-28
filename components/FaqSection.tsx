"use client";

import { faqs } from "@/resources/content";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto w-full space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div 
            key={idx} 
            className="group border border-gray-alt/10 rounded-xl dark:bg-white/5 transition-colors duration-300 hover:border-accent/30 overflow-hidden"
          >
            <button 
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-accent' : 'dark:text-white'}`}>
                {faq.question}
              </span>
              <ChevronDown 
                size={24} 
                className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}
              />
            </button>
            
            <div 
              className={`px-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed" 
                dangerouslySetInnerHTML={{
                  // Automatically wrap specific keywords for emphasis if desired, or just output text
                  __html: faq.answer.replace(/(Shift-Left|Backend Development|DevOps Automation)/g, '<strong class="text-accent">$1</strong>')
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
