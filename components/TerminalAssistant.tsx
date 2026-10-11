"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Terminal, X, Send, Command } from "lucide-react";
import ReactMarkdown from "react-markdown";
import NeofetchTerminal from "./NeofetchTerminal";
import { useLanguage } from "./LanguageContext";

interface Message {
  role: "user" | "ai";
  content: string;
  animate?: boolean;
}

const TypewriterMarkdown = ({ content, animate }: { content: string; animate?: boolean }) => {
  const [displayedContent, setDisplayedContent] = useState(animate ? "" : content);

  useEffect(() => {
    if (!animate) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedContent(content.slice(0, i));
      i++;
      if (i > content.length) {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [content, animate]);

  return <ReactMarkdown>{animate ? displayedContent : content}</ReactMarkdown>;
};

export default function TerminalAssistant() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showNeofetch, setShowNeofetch] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage = t.ui.terminal.initialMessage;
  const activeMessages = useMemo(
    () => (messages.length === 0 ? [{ role: "ai" as const, content: initialMessage }] : messages),
    [messages, initialMessage]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeMessages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const baseMessages = messages.length === 0
      ? [{ role: "ai" as const, content: initialMessage }]
      : messages;

    if (text.trim().toLowerCase() === "terminal") {
      setShowNeofetch(true);
      setMessages([
        ...baseMessages,
        { role: "user", content: text },
        { role: "ai", content: t.ui.terminal.openingBash, animate: true },
      ]);
      setInput("");
      return;
    }

    setMessages([...baseMessages, { role: "user", content: text }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { role: "ai", content: data.reply, animate: true }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: data.error || t.ui.terminal.systemError, animate: true },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: t.ui.terminal.connectionFailed, animate: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <>
      {showNeofetch && <NeofetchTerminal onClose={() => setShowNeofetch(false)} />}
      
      {/* Background Backdrop Blur */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/20 dark:bg-black/35 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 sm:p-4 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg hover:bg-accent dark:hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100 pointer-events-auto"
        }`}
        aria-label={t.ui.terminal.openAriaLabel}
      >
        <Terminal size={20} />
      </button>

      {/* Terminal Drawer */}
      <div
        role="dialog"
        aria-label={t.ui.terminal.title}
        aria-modal="true"
        className={`fixed inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 flex flex-col w-full sm:w-[540px] md:w-[560px] h-[90vh] sm:h-[660px] sm:max-h-[calc(100vh-3.5rem)] rounded-t-3xl sm:rounded-2xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 text-black dark:text-neutral-200 font-mono shadow-2xl overflow-hidden transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile handle indicator */}
        <div className="sm:hidden flex items-center justify-center pt-2.5 pb-1 bg-gray-100 dark:bg-[#1A1A1A]">
          <span className="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
        </div>

        {/* Terminal Header */}
        <div className="relative flex items-center justify-between px-4 sm:px-5 py-3.5 bg-gray-100 dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-gray-800">
          {/* Left: Window Control Dots */}
          <div className="flex items-center gap-1.5 shrink-0 z-10">
            <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
            <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
            <span className="bg-neutral-400 dark:bg-neutral-600 inline-block w-3 h-3 rounded-full"></span>
          </div>

          {/* Center: Title & Subtitle */}
          <div className="absolute inset-x-0 flex flex-col items-center justify-center text-center px-16 pointer-events-none">
            <div className="flex items-center justify-center gap-1.5 pointer-events-auto">
              <span className="text-sm font-bold text-gray-950 dark:text-gray-100 tracking-tight leading-none">
                {t.ui.terminal.title}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0"></span>
            </div>
            <span className="text-[10.5px] text-gray-500 dark:text-gray-400 font-sans font-medium mt-1 leading-tight truncate max-w-full">
              {t.ui.terminal.subtitle}
            </span>
          </div>

          {/* Right: Keybinding & Close Button */}
          <div className="flex items-center gap-2 text-xs text-gray-500 shrink-0 z-10">
            <kbd className="px-2 py-1 bg-white dark:bg-[#2A2A2A] rounded-md hidden sm:flex items-center gap-1 border border-gray-200 dark:border-gray-700">
              <Command size={10} /> K
            </kbd>
            <button onClick={() => setIsOpen(false)} className="hover:text-black dark:hover:text-white transition-colors" aria-label="Close assistant">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-1 ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="text-[11px] font-mono flex items-center gap-1.5 px-1">
                {msg.role === "ai" ? (
                  <span className="text-accent dark:text-[#90caf9] font-bold tracking-wider">
                    SYS &gt;
                  </span>
                ) : (
                  <span className="text-gray-500 dark:text-gray-400 font-semibold tracking-wider">
                    USR &gt;
                  </span>
                )}
              </div>
              <div
                className={`text-sm leading-relaxed max-w-[88%] rounded-2xl px-3.5 py-2.5 transition-all ${
                  msg.role === "user"
                    ? "bg-black text-white dark:bg-white dark:text-black rounded-tr-xs shadow-xs"
                    : "bg-gray-100 dark:bg-[#1A1A1A] text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-800/80 rounded-tl-xs shadow-xs"
                }`}
              >
                {msg.role === "ai" ? (
                  <div className="prose prose-sm prose-invert max-w-none">
                    <TypewriterMarkdown content={msg.content} animate={msg.animate} />
                  </div>
                ) : (
                  <span className="whitespace-pre-wrap">{msg.content}</span>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-accent dark:text-[#90caf9] px-1">
              <span className="animate-pulse block w-2 h-4 bg-current"></span>
              <span className="text-xs text-gray-500">{t.ui.terminal.processing}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Inquiry Topics Grid (Picture Style - All visible without inner scrollbar) */}
        {activeMessages.length < 3 && (
          <div className="px-4 pb-3">
            <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider font-semibold">
              {t.ui.terminal.inquiryTitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                {
                  label: t.ui.terminal.quickPrompts.whoIsSalahLabel,
                  desc: t.ui.terminal.quickPrompts.whoIsSalahDesc,
                  prompt: t.ui.terminal.quickPrompts.whoIsSalahPrompt,
                },
                {
                  label: t.ui.terminal.quickPrompts.stackLabel,
                  desc: t.ui.terminal.quickPrompts.stackDesc,
                  prompt: t.ui.terminal.quickPrompts.stackPrompt,
                },
                {
                  label: t.ui.terminal.quickPrompts.certificationsLabel,
                  desc: t.ui.terminal.quickPrompts.certificationsDesc,
                  prompt: t.ui.terminal.quickPrompts.certificationsPrompt,
                },
                {
                  label: t.ui.terminal.quickPrompts.availabilityLabel,
                  desc: t.ui.terminal.quickPrompts.availabilityDesc,
                  prompt: t.ui.terminal.quickPrompts.availabilityPrompt,
                },
                {
                  label: t.ui.terminal.quickPrompts.tickethubLabel,
                  desc: t.ui.terminal.quickPrompts.tickethubDesc,
                  prompt: t.ui.terminal.quickPrompts.tickethubPrompt,
                },
                {
                  label: t.ui.terminal.quickPrompts.experienceLabel,
                  desc: t.ui.terminal.quickPrompts.experienceDesc,
                  prompt: t.ui.terminal.quickPrompts.experiencePrompt,
                },
              ].map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleQuickPrompt(item.prompt)}
                  disabled={isLoading}
                  className="text-left p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-900/80 hover:bg-gray-100 dark:hover:bg-zinc-800/90 border border-gray-200 dark:border-zinc-800 hover:border-accent/40 dark:hover:border-accent/40 transition-all group cursor-pointer disabled:opacity-50"
                >
                  <span className="text-xs font-bold text-gray-900 dark:text-gray-100 group-hover:text-accent transition-colors block leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 block mt-1 leading-tight font-sans">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Terminal Input */}
        <div className="p-4 bg-gray-50 dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-gray-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2"
          >
            <span className="text-accent font-bold">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.ui.terminal.inputPlaceholder}
              className="flex-1 bg-transparent border-none outline-none text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck="false"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="text-gray-500 hover:text-accent dark:hover:text-accent disabled:opacity-50 transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
