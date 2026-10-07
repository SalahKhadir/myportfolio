"use client";

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function NeofetchTerminal({ onClose }: { onClose: () => void }) {
  const [output, setOutput] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; res: React.ReactNode }[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const neofetchText = `
           ;               ,           
         ,;                 '.         
        ;:                   :;        
       ::                     ::       
       ::                     ::       
       ':                     :        
        :.                    :        
     ;' ::                   ::  '     salah@portfolio
    .'  ';                   ;'  '.    ---------------
   ::    :;                 ;:    ::   OS: Fedora Linux x86_64
   ;      :;.             ,;:     ::   Host: Portfolio OS v1.0
   :;      :;:           ,;"      ::   Kernel: 6.8.9-300.fc40.x86_64
   ::.      ':;  ..,.;  ;:'     ,.;:   Uptime: 21 years, 10 months, 5 days
    "'"...   '::,::::: ;:   .;.;""'    Packages: 2405 (rpm), 15 (flatpak)
        '"""....;:::::;,;.;"""         Shell: zsh 5.9
    .:::.....'"':::::::'",...;::::;.   Resolution: 2560x1440
   ;:' '""'"";.,;:::::;.'""""""  ':;   DE: GNOME 46
  ::'         ;::;:::;::..         :;  WM: Mutter
 ::         ,;:::::::::::;:..       :: Theme: Adwaita-Dark [GTK2/3]
 ;'     ,;;:;::::::::::::::;";..    ':.Terminal: gnome-terminal
::     ;:"  ::::::"""'::::::  ":     ::CPU: AMD Ryzen 7 5800X (16) @ 3.800GHz
 :.    ::   ::::::;  :::::::   :     ; GPU: NVIDIA GeForce RTX 3070
  ;    ::   :::::::  :::::::   :    ;  Memory: 16384MiB / 32043MiB
   '   ::   ::::::....:::::'  ,:   '   
    '  ::    :::::::::::::"   ::       
       ::     ':::::::::"'    ::       
       ':       """""""'      ::       
        ::                   ;:        
        ':;                 ;:"        
          ';              ,;'          
            "'           '"            
              '
`;

  useEffect(() => {
    let currentText = "";
    const lines = neofetchText.split('\n');
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        currentText += lines[i] + '\n';
        setOutput(currentText);
        i++;
      } else {
        clearInterval(interval);
        setIsReady(true);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [neofetchText]);

  useEffect(() => {
    if (isReady) {
      inputRef.current?.focus();
    }
  }, [isReady]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim();
    let res: React.ReactNode = "";

    switch (cmd.toLowerCase()) {
      case "whoami":
        res = "salah khadir - Software & DevOps Engineer. I automate things and build scalable systems.";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        onClose();
        return;
      case "cat resume.pdf":
      case "cat resume":
        res = "Opening resume... (If I had a real PDF right now, I'd trigger a download!)";
        window.open("/Salah_KHADIR_CV.pdf", "_blank");
        break;
      case "sudo hire salah":
        res = "Access granted. redirecting to /contact ...";
        setTimeout(() => {
          window.location.href = "/contact";
        }, 1500);
        break;
      case "ls":
        res = "projects/  skills/  resume.pdf  contact.sh";
        break;
      case "help":
        res = "Available commands: whoami, clear, exit, cat resume.pdf, sudo hire salah, ls";
        break;
      default:
        res = `bash: ${cmd}: command not found`;
    }

    setHistory(prev => [...prev, { cmd, res }]);
    setInput("");
  };

  const colorizeNeofetch = (text: string) => {
    return { 
      __html: text
        .replace(/salah@portfolio/g, '<span class="text-green-500 font-bold">salah@portfolio</span>')
        .replace(/---------------/g, '<span class="text-gray-500">---------------</span>')
        .replace(/OS:/g, '<span class="text-blue-400 font-bold">OS:</span>')
        .replace(/Host:/g, '<span class="text-blue-400 font-bold">Host:</span>')
        .replace(/Kernel:/g, '<span class="text-blue-400 font-bold">Kernel:</span>')
        .replace(/Uptime:/g, '<span class="text-blue-400 font-bold">Uptime:</span>')
        .replace(/Packages:/g, '<span class="text-blue-400 font-bold">Packages:</span>')
        .replace(/Shell:/g, '<span class="text-blue-400 font-bold">Shell:</span>')
        .replace(/Resolution:/g, '<span class="text-blue-400 font-bold">Resolution:</span>')
        .replace(/DE:/g, '<span class="text-blue-400 font-bold">DE:</span>')
        .replace(/WM:/g, '<span class="text-blue-400 font-bold">WM:</span>')
        .replace(/Theme:/g, '<span class="text-blue-400 font-bold">Theme:</span>')
        .replace(/Terminal:/g, '<span class="text-blue-400 font-bold">Terminal:</span>')
        .replace(/CPU:/g, '<span class="text-blue-400 font-bold">CPU:</span>')
        .replace(/GPU:/g, '<span class="text-blue-400 font-bold">GPU:</span>')
        .replace(/Memory:/g, '<span class="text-blue-400 font-bold">Memory:</span>')
    };
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300" onClick={() => inputRef.current?.focus()}>
      <div className="bg-[#121212] border border-gray-800 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col transform transition-all scale-100" onClick={(e) => e.stopPropagation()}>
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-gray-800">
          <div className="flex gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></button>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <span className="text-gray-400 text-xs font-mono font-bold tracking-wider">salah@portfolio:~</span>
          <div className="w-10"></div> {/* Spacer to center the title */}
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm overflow-y-auto whitespace-pre-wrap scrollbar-hide h-[450px]" onClick={() => inputRef.current?.focus()}>
          <span className="text-green-500 font-bold">salah@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-500 font-bold">~</span>
          <span className="text-white">$ neofetch</span>
          <br />
          <div className="mt-2 text-gray-300 whitespace-pre" dangerouslySetInnerHTML={colorizeNeofetch(output)}>
          </div>
          
          {/* History */}
          {history.map((entry, idx) => (
            <div key={idx} className="mt-2">
              <div>
                <span className="text-green-500 font-bold">salah@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-500 font-bold">~</span>
                <span className="text-white">$ {entry.cmd}</span>
              </div>
              <div className="text-gray-300 mt-1">{entry.res}</div>
            </div>
          ))}

          {/* Active Input Line */}
          {isReady && (
            <form onSubmit={handleCommand} className="mt-2 flex items-center">
              <span className="text-green-500 font-bold">salah@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-500 font-bold">~</span>
              <span className="text-white mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
