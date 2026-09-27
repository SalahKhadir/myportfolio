"use client";

import { systemConfig } from "@/resources/content";

export default function StatusBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-[#111111] text-[#F8F7F4] flex items-center justify-between px-4 sm:px-6 lg:px-8 font-mono text-xs z-50 overflow-hidden">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          STATUS: {systemConfig.status}
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-4 text-muted">
        <span>LOC: {systemConfig.location}</span>
        <span>SYS.V: 1.0.0</span>
      </div>
    </div>
  );
}
