"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS">("IDLE");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTING");
    setTimeout(() => {
      setStatus("SUCCESS");
      setTimeout(() => setStatus("IDLE"), 3000);
    }, 1500);
  };

  return (
    <div className="relative bg-[#F8F7F4] dark:bg-white/5 p-8 md:p-12 rounded-2xl border border-gray-alt/10 shadow-2xl overflow-hidden max-w-2xl mx-auto w-full">
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(247,40,134,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10">
        <span className="font-mono text-[10px] text-accent uppercase tracking-widest block mb-4">
          Phase 01: Connection // INITIALIZE DISCOVERY
        </span>
        
        <form onSubmit={handleSubmit} className="space-y-8 mt-8">
          <div className="space-y-6">
            <div>
              <input 
                type="text" 
                required
                placeholder="YOUR NAME / SYSTEM ID"
                className="w-full bg-transparent border-b border-gray-alt/30 py-3 outline-none focus:border-accent transition-colors dark:text-white font-light text-lg placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono text-sm"
              />
            </div>
            
            <div>
              <input 
                type="email" 
                required
                placeholder="RETURN ADDRESS / EMAIL"
                className="w-full bg-transparent border-b border-gray-alt/30 py-3 outline-none focus:border-accent transition-colors dark:text-white font-light text-lg placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono text-sm"
              />
            </div>
            
            <div>
              <textarea 
                required
                rows={4}
                placeholder="DEPLOY MESSAGE PAYLOAD..."
                className="w-full bg-transparent border-b border-gray-alt/30 py-3 outline-none focus:border-accent transition-colors dark:text-white font-light text-lg placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono text-sm resize-none"
              ></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status !== "IDLE"}
            className="button group w-full mt-8"
          >
            <span className="button-content uppercase tracking-[0.2em] text-xs">
              {status === "IDLE" && "Deploy Inquiry"}
              {status === "SUBMITTING" && "Initializing..."}
              {status === "SUCCESS" && "Deployment Complete"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
