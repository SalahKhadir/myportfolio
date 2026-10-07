"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, X, Send, Command } from "lucide-react";
import ReactMarkdown from "react-markdown";
import NeofetchTerminal from "./NeofetchTerminal";

interface Message {
  role: "user" | "ai";
  content: string;
  animate?: boolean;
}

const TypewriterMarkdown = ({ content, animate }: { content: string; animate?: boolean }) => {
  const [displayedContent, setDisplayedContent] = useState(animate ? "" : content);

  useEffect(() => {
    if (!animate) {
      setDisplayedContent(content);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedContent(content.slice(0, i));
      i++;
      if (i > content.length) {
        clearInterval(interval);
      }
    }, 15); // Adjust typing speed here

    return () => clearInterval(interval);
  }, [content, animate]);

  return <ReactMarkdown>{displayedContent}</ReactMarkdown>;
};

export default function TerminalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNeofetch, setShowNeofetch] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Welcome to Salah Khadir's OS. Type a message or click a quick prompt." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    if (text.trim().toLowerCase() === "terminal") {
      setShowNeofetch(true);
      setMessages((prev) => [
        ...prev,
        { role: "user", content: text },
        { role: "ai", content: "Opening full bash environment...", animate: true },
      ]);
      setInput("");
      return;
    }

    setMessages((prev) => [...prev, { role: "user", content: text }]);
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
          { role: "ai", content: data.error || "System error. Please try again.", animate: true },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Connection failed. Terminal offline.", animate: true },
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
      
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 sm:p-4 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg hover:bg-accent dark:hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={20} /> : <Terminal size={20} />}
      </button>

      {/* Terminal Drawer */}
      <div
        className={`fixed bottom-0 right-0 z-40 w-full sm:w-[450px] sm:bottom-24 sm:right-6 sm:rounded-xl shadow-2xl transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-10 opacity-0 pointer-events-none"
        } bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 text-black dark:text-green-500 font-mono flex flex-col overflow-hidden max-h-[80vh] sm:max-h-[600px] h-[500px]`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
              <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
              <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-300 font-bold uppercase tracking-wider">
              Terminal
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-2 py-1 bg-white dark:bg-[#2A2A2A] rounded-md hidden sm:flex items-center gap-1 border border-gray-200 dark:border-gray-700">
              <Command size={10} /> K
            </kbd>
            <button onClick={() => setIsOpen(false)} className="hover:text-black dark:hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="text-xs text-gray-500 uppercase flex items-center gap-2">
                {msg.role === "ai" ? (
                  <span className="text-accent dark:text-[#90caf9] font-bold">SYS &gt;</span>
                ) : (
                  <span className="text-green-500 font-bold">USR &gt;</span>
                )}
              </div>
              <div className="text-sm whitespace-pre-wrap leading-relaxed">
                {msg.role === "ai" ? (
                  <div className="text-gray-700 dark:text-gray-300 prose prose-sm prose-invert max-w-none">
                    <TypewriterMarkdown content={msg.content} animate={msg.animate} />
                  </div>
                ) : (
                  <span className="text-black dark:text-white">{msg.content}</span>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-accent dark:text-[#90caf9]">
              <span className="animate-pulse block w-2 h-4 bg-current"></span>
              <span className="text-xs text-gray-500">Processing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        {messages.length < 3 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            <button
              onClick={() => handleQuickPrompt("Tell me about Salah's DevOps background")}
              className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              DevOps
            </button>
            <button
              onClick={() => handleQuickPrompt("Is Salah available for a 2027 PFE?")}
              className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Availability
            </button>
            <button
              onClick={() => handleQuickPrompt("What architecture does TicketHub use?")}
              className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              TicketHub
            </button>
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
            <span className="text-green-500 font-bold">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command..."
              className="flex-1 bg-transparent border-none outline-none text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0"
              autoComplete="off"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="text-gray-500 hover:text-white disabled:opacity-50 transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
