export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 flex flex-col justify-center items-center px-6 relative overflow-hidden select-none">
      {/* Background ambient radial glow */}
      <div className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse" />

      {/* Dotted grid background (matches contact section pattern) */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      {/* Technical Loading Card */}
      <div className="w-full max-w-lg border border-gray-alt/10 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-950/60 p-8 rounded-2xl backdrop-blur-md shadow-2xl relative">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-alt/10 dark:border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-gray-500 dark:text-neutral-400 tracking-widest uppercase">
              SYSTEM // LOADING
            </span>
          </div>
          <span className="font-mono text-xs text-gray-400 dark:text-neutral-600">
            STATUS: ACTIVE
          </span>
        </div>

        {/* Progress visualization */}
        <div className="space-y-6">
          {/* Animated progress bar */}
          <div className="relative h-[2px] w-full bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-accent rounded-full animate-[loading-slide_1.4s_ease-in-out_infinite]" />
          </div>

          {/* Terminal-style log lines */}
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">&gt;</span>
              <span className="text-gray-600 dark:text-neutral-400">
                Initializing system modules
              </span>
              <span className="ml-auto text-gray-400 dark:text-neutral-600 animate-pulse">
                ···
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">&gt;</span>
              <span className="text-gray-600 dark:text-neutral-400">
                Loading interface components
              </span>
              <span className="ml-auto text-gray-400 dark:text-neutral-600 animate-pulse [animation-delay:200ms]">
                ···
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold">&gt;</span>
              <span className="text-gray-600 dark:text-neutral-400">
                Establishing data pipelines
              </span>
              <span className="ml-auto text-gray-400 dark:text-neutral-600 animate-pulse [animation-delay:400ms]">
                ···
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-alt/10 dark:border-neutral-900 flex items-center justify-between">
          <span className="font-mono text-[11px] text-gray-400 dark:text-neutral-600 tracking-wider uppercase">
            Resolving route...
          </span>
          {/* Spinning indicator */}
          <div className="w-4 h-4 border-2 border-gray-300 dark:border-neutral-700 border-t-accent rounded-full animate-spin" />
        </div>
      </div>

      <div className="mt-8 font-mono text-[11px] text-gray-400 dark:text-neutral-600 tracking-wider">
        REF: STREAM_PENDING // SALAHKHADIR.CODES
      </div>

      <style>{`
        @keyframes loading-slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </main>
  );
}
