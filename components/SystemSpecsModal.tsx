"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Bot,
  ArrowRight,
  CheckCircle2,
  Lock,
  RefreshCw,
  HardDrive
} from "lucide-react";
import { ArchitectureNode, SystemSpecData } from "@/resources/architectureSpecs";

interface SystemSpecsModalProps {
  spec: SystemSpecData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SystemSpecsModal({ spec, isOpen, onClose }: SystemSpecsModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null);
  const [activeTab, setActiveTab] = useState<"topology" | "latency" | "security" | "resilience">("topology");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset or initialize default selection when modal opens
  useEffect(() => {
    if (spec && spec.nodes.length > 0) {
      setSelectedNode(spec.nodes[0]);
      setActiveTab("topology");
    }
  }, [spec]);

  // Handle escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const getLayerIcon = (layer: ArchitectureNode["layer"]) => {
    switch (layer) {
      case "client":
        return <Globe size={18} className="text-cyan-400" />;
      case "gateway":
        return <ShieldCheck size={18} className="text-emerald-400" />;
      case "compute":
        return <Cpu size={18} className="text-blue-400" />;
      case "ai":
        return <Bot size={18} className="text-purple-400" />;
      case "data":
        return <Database size={18} className="text-amber-400" />;
      case "storage":
        return <HardDrive size={18} className="text-rose-400" />;
      default:
        return <Server size={18} className="text-gray-400" />;
    }
  };

  const getLayerColor = (layer: ArchitectureNode["layer"]) => {
    switch (layer) {
      case "client":
        return "border-cyan-500/40 bg-cyan-500/10 text-cyan-400";
      case "gateway":
        return "border-emerald-500/40 bg-emerald-500/10 text-emerald-400";
      case "compute":
        return "border-blue-500/40 bg-blue-500/10 text-blue-400";
      case "ai":
        return "border-purple-500/40 bg-purple-500/10 text-purple-400";
      case "data":
        return "border-amber-500/40 bg-amber-500/10 text-amber-400";
      case "storage":
        return "border-rose-500/40 bg-rose-500/10 text-rose-400";
      default:
        return "border-gray-500/40 bg-gray-500/10 text-gray-400";
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && spec && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-6xl h-[92vh] max-h-[92vh] flex flex-col min-h-0 bg-[#F8F7F4] dark:bg-[#0c0c0e] border border-gray-300 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
          {/* Top Terminal Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-black/60 shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-mono text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {spec.title}
                  </h3>
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-xs">/</span>
                  <span className="font-mono text-[11px] text-accent dark:text-cyan-300 uppercase tracking-widest">
                    SYSTEM TOPOLOGY & SPECS
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                  {spec.type}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close system specs modal"
              className="p-1.5 rounded-lg text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 px-6 pt-3 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 overflow-x-auto text-xs font-mono shrink-0">
            <button
              onClick={() => setActiveTab("topology")}
              className={`px-4 py-2.5 rounded-t-lg font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === "topology"
                  ? "border-accent text-accent dark:text-cyan-300 bg-white dark:bg-[#0c0c0e]"
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <Layers size={14} />
              Interactive Node Graph
            </button>
            <button
              onClick={() => setActiveTab("latency")}
              className={`px-4 py-2.5 rounded-t-lg font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === "latency"
                  ? "border-accent text-accent dark:text-cyan-300 bg-white dark:bg-[#0c0c0e]"
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <Activity size={14} />
              Latency Targets
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-4 py-2.5 rounded-t-lg font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === "security"
                  ? "border-accent text-accent dark:text-cyan-300 bg-white dark:bg-[#0c0c0e]"
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <Lock size={14} />
              Security Protocols
            </button>
            <button
              onClick={() => setActiveTab("resilience")}
              className={`px-4 py-2.5 rounded-t-lg font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === "resilience"
                  ? "border-accent text-accent dark:text-cyan-300 bg-white dark:bg-[#0c0c0e]"
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <Zap size={14} />
              Resilience & Failover
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Architecture Summary Banner */}
            <div className="p-4 rounded-xl border border-accent/20 bg-accent/5 dark:bg-accent/10 flex items-start gap-3">
              <span className="p-1 rounded bg-accent/20 text-accent dark:text-cyan-300 mt-0.5">
                <CheckCircle2 size={16} />
              </span>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent dark:text-cyan-300 block mb-1">
                  Architecture Overview
                </span>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  {spec.architectureSummary}
                </p>
              </div>
            </div>

            {/* TAB 1: TOPOLOGY GRAPH */}
            {activeTab === "topology" && (
              <div className="space-y-6">
                {/* Visual Pipeline Flow Sequence */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block mb-3">
                    Execution Dataflow Pipeline
                  </span>
                  <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-black/50">
                    {spec.flow.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 font-mono text-[11px] text-gray-800 dark:text-gray-200">
                          {step}
                        </span>
                        {idx < spec.flow.length - 1 && (
                          <ArrowRight size={14} className="text-accent shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Node Grid & Detail Inspector */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Interactive Node Cards */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block">
                      Select Architecture Node to Inspect
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {spec.nodes.map((node) => {
                        const isSelected = selectedNode?.id === node.id;
                        return (
                          <button
                            key={node.id}
                            onClick={() => setSelectedNode(node)}
                            className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-36 ${
                              isSelected
                                ? "border-accent bg-accent/10 dark:bg-accent/15 shadow-[0_0_15px_rgba(var(--accent-rgb,144,202,249),0.3)] ring-1 ring-accent"
                                : "border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 hover:border-gray-400 dark:hover:border-white/30"
                            }`}
                          >
                            <div className="flex items-start justify-between w-full">
                              <div className="flex items-center gap-2">
                                <span className={`p-1.5 rounded-lg border ${getLayerColor(node.layer)}`}>
                                  {getLayerIcon(node.layer)}
                                </span>
                                <div>
                                  <h4 className="font-mono text-xs font-bold text-gray-900 dark:text-white">
                                    {node.name}
                                  </h4>
                                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                                    {node.layer}
                                  </span>
                                </div>
                              </div>
                              <span className="font-mono text-[10px] text-accent dark:text-cyan-300 font-bold bg-accent/10 px-1.5 py-0.5 rounded">
                                {node.latencyTarget}
                              </span>
                            </div>

                            <div className="mt-auto">
                              <span className="font-mono text-[11px] text-gray-600 dark:text-gray-300 line-clamp-1 block">
                                {node.tech}
                              </span>
                              <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 block truncate">
                                {node.protocol}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Node Detail Inspector Panel */}
                  <div className="lg:col-span-5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block mb-3">
                      Node Specification Inspector
                    </span>
                    {selectedNode ? (
                      <div className="p-5 rounded-2xl border border-accent/30 bg-white dark:bg-black/70 shadow-lg space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
                          <div className="flex items-center gap-2.5">
                            <span className={`p-2 rounded-lg border ${getLayerColor(selectedNode.layer)}`}>
                              {getLayerIcon(selectedNode.layer)}
                            </span>
                            <div>
                              <h4 className="font-mono text-sm font-bold text-gray-900 dark:text-white">
                                {selectedNode.name}
                              </h4>
                              <span className="font-mono text-[10px] uppercase tracking-wider text-accent dark:text-cyan-300">
                                Layer: {selectedNode.layer}
                              </span>
                            </div>
                          </div>
                          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-bold border border-accent/20">
                            {selectedNode.latencyTarget}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1">
                            Primary Technology
                          </span>
                          <span className="text-xs font-mono font-semibold text-gray-800 dark:text-gray-200">
                            {selectedNode.tech}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1">
                            Transport Protocol
                          </span>
                          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block border border-emerald-500/20">
                            {selectedNode.protocol}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-1">
                            Architectural Responsibility
                          </span>
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            {selectedNode.role}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 rounded-2xl border border-dashed border-gray-300 dark:border-white/10 text-center text-gray-400 font-mono text-xs">
                        Click on any node to view detailed engineering parameters.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LATENCY TARGETS */}
            {activeTab === "latency" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-cyan-500 mb-3 font-mono text-xs font-bold uppercase tracking-wider">
                    <Activity size={16} />
                    P95 API Response Target
                  </div>
                  <p className="text-sm font-mono font-bold text-gray-900 dark:text-white mb-2">
                    {spec.specs.latency.p95Target}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                    Evaluated under simulated concurrent load tests to prevent thread pool exhaustion and head-of-line blocking.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-blue-500 mb-3 font-mono text-xs font-bold uppercase tracking-wider">
                    <Globe size={16} />
                    Edge TTFB Delivery
                  </div>
                  <p className="text-sm font-mono font-bold text-gray-900 dark:text-white mb-2">
                    {spec.specs.latency.dnsTtfb}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                    Main document initial render time minimizing Cumulative Layout Shift and Largest Contentful Paint penalties.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-emerald-500 mb-3 font-mono text-xs font-bold uppercase tracking-wider">
                    <Zap size={16} />
                    Internal Execution Hop
                  </div>
                  <p className="text-sm font-mono font-bold text-gray-900 dark:text-white mb-2">
                    {spec.specs.latency.internalRpc}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                    Zero-overhead loopback and container bridge network round-trip time between gateway and data layer.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: SECURITY PROTOCOLS */}
            {activeTab === "security" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Lock size={15} />
                    Authentication & Session Model
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.security.authStrategy}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck size={15} />
                    Transport Security
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.security.transport}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Database size={15} />
                    Data Protection & Cryptography
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.security.dataProtection}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Cpu size={15} />
                    Threat & Abuse Mitigation
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.security.threatMitigation}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 4: RESILIENCE STRATEGIES */}
            {activeTab === "resilience" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-amber-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Cpu size={15} />
                    Concurrency & Worker Model
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.resilience.concurrency}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-amber-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <RefreshCw size={15} />
                    Automated Failover & Healing
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.resilience.failover}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-amber-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <HardDrive size={15} />
                    Caching Hierarchy
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.resilience.caching}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
                  <div className="flex items-center gap-2 text-amber-500 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Activity size={15} />
                    Backpressure & Throttling
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                    {spec.specs.resilience.backpressure}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 text-xs font-mono text-gray-500 shrink-0">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              STATUS: ARCHITECTURE AUDITED & BENCHMARKED
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );

}

