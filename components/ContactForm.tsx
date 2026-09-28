'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Globe, Calendar, MessageCircle } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export default function ContactForm() {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "UTC",
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        setTime(formatter.format(new Date()));
      } catch (e) {
        setTime("Loading...");
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('SUBMITTING');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      'access_key',
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'
    );
    formData.append('subject', 'New Portfolio Inquiry - salahkhadir.codes');
    formData.append('from_name', 'Portfolio Contact Hub');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('SUCCESS');
        form.reset();
        setTimeout(() => setStatus('IDLE'), 3000);
      } else {
        setStatus('ERROR');
        setErrorMessage(result.message || 'Transmission failed.');
        setTimeout(() => setStatus('IDLE'), 3000);
      }
    } catch {
      setStatus('ERROR');
      setErrorMessage('Network timeout. Please email directly.');
      setTimeout(() => setStatus('IDLE'), 3000);
    }
  }

  return (
    <div className="w-full py-20 md:py-28 relative z-10">
      <div className="w-full px-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3 text-center">Phase 01: Connection</p>
        <h2 className="font-accent text-6xl md:text-8xl lg:text-9xl text-black dark:text-white uppercase tracking-tight text-center">Get In Touch</h2>
        <p className="mt-4 mb-16 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light text-base md:text-lg text-center leading-relaxed">Ready to discuss an engineering challenge or a 2027 PFE opportunity? Send a message directly or connect via the channels below.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-5xl mx-auto px-4 font-sans">
      
      {/* Left Column - Send a Message */}
      <div className="lg:col-span-7 bg-white dark:bg-[#111111] border border-gray-alt/10 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Send a Message</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
          />
          <input 
            required
            name="name"
            type="text"
            placeholder="Name"
            className="w-full bg-black/5 dark:bg-[#1c1c1c] border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-accent dark:focus:border-accent transition-colors"
          />
          <input 
            required
            name="email"
            type="email"
            placeholder="Email"
            className="w-full bg-black/5 dark:bg-[#1c1c1c] border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-accent dark:focus:border-accent transition-colors"
          />
          <textarea 
            required
            name="message"
            rows={5}
            placeholder="Message"
            className="w-full bg-black/5 dark:bg-[#1c1c1c] border border-transparent dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-accent dark:focus:border-accent transition-colors resize-none"
          />
          
          {status === 'ERROR' && (
            <div className="text-rose-500 font-mono text-xs uppercase tracking-widest mt-2">
              ✖ {errorMessage}
            </div>
          )}
          {status === 'SUCCESS' && (
            <div className="text-emerald-500 font-mono text-xs uppercase tracking-widest mt-2">
              ✔ MESSAGE DELIVERED
            </div>
          )}

          <div className="mt-2">
            <button 
              type="submit"
              disabled={status === 'SUBMITTING'}
              className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "IDLE" && "Submit Inquiry"}
              {status === "SUBMITTING" && "Sending..."}
              {status === "SUCCESS" && "Sent!"}
              {status === "ERROR" && "Retry"}
            </button>
          </div>
        </form>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Contact Details Card */}
        <div className="bg-white dark:bg-[#111111] border border-gray-alt/10 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-black dark:text-white mb-6">Contact Details</h2>
          
          <div className="flex flex-col gap-6">
            {/* Email Row */}
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:salah.khadir@outlook.com" className="text-black dark:text-white hover:text-accent dark:hover:text-accent hover:underline transition-colors font-medium">
                salah.khadir@outlook.com
              </a>
            </div>

            {/* Location Row */}
            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-accent" />
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Morocco (GMT)</p>
                <p className="text-black dark:text-white font-medium">
                  {time || "Loading..."}
                </p>
              </div>
            </div>

            {/* Status Row */}
            <div className="flex items-start gap-4">
              <Calendar className="w-5 h-5 text-accent mt-1" />
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Current Status</p>
                <span className="bg-green-100 dark:bg-green-950/60 border border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-400 text-xs px-3 py-1 rounded-full font-medium inline-block mt-1">
                  Available for PFE (Feb 2027)
                </span>
              </div>
            </div>
          </div>

          <a 
            href="https://wa.me/212677346626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/5 dark:bg-[#1c1c1c] border border-transparent dark:border-white/10 text-black dark:text-white px-5 py-2.5 rounded-xl hover:border-black/20 dark:hover:border-white/30 transition-all mt-6 text-sm font-medium w-fit"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Connect Card */}
        <div className="bg-white dark:bg-[#111111] border border-gray-alt/10 dark:border-white/10 rounded-2xl p-8 shadow-2xl flex-grow">
          <h2 className="text-xl font-bold text-black dark:text-white mb-3">Connect</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-light leading-relaxed">
            Follow my work or send me a message on social platforms.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-black dark:text-white text-sm font-medium">
            <a href="https://github.com/SalahKhadir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent dark:hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/salah-khadir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent dark:hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="mailto:salah.khadir@outlook.com" className="flex items-center gap-2 hover:text-accent dark:hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
