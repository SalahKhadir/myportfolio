import Link from 'next/link';

export const metadata = {
  title: '404 // Route Not Found | Salah Khadir',
  description: 'The requested system route could not be resolved.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 flex flex-col justify-center items-center px-6 relative overflow-hidden select-none">
      {/* Background ambient radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-gray-300/30 dark:bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Technical Status Card */}
      <div className="w-full max-w-lg border border-gray-alt/10 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-950/60 p-8 rounded-2xl backdrop-blur-md shadow-2xl relative">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-alt/10 dark:border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-mono text-xs text-gray-500 dark:text-neutral-400 tracking-widest uppercase">
              EXCEPTION // ERR_ROUTE_NOT_FOUND
            </span>
          </div>
          <span className="font-mono text-xs text-gray-400 dark:text-neutral-600">CODE: 404</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-white font-mono">
            404<span className="text-gray-400 dark:text-neutral-600">.NULL</span>
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400 font-mono leading-relaxed">
            The target URI does not resolve to an active architecture, pipeline, or interface node.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-alt/10 dark:border-neutral-900 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <Link className="w-full sm:w-auto px-5 py-2.5 bg-black hover:bg-gray-800 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 text-xs font-mono font-semibold tracking-wider uppercase rounded-md transition-colors text-center" href="/">
            ← Return to Base
          </Link>
          <div className="flex items-center gap-3 text-xs font-mono text-gray-500 dark:text-neutral-500">
            <Link className="hover:text-black dark:hover:text-neutral-300 transition-colors" href="/architectures">
              Systems
            </Link>
            <span>/</span>
            <Link className="hover:text-black dark:hover:text-neutral-300 transition-colors" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 font-mono text-[11px] text-gray-400 dark:text-neutral-600 tracking-wider">
        REF: HOST_RESOLVER_FAULT // SALAHKHADIR.CODES
      </div>
    </main>
  );
}
