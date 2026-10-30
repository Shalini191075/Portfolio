import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

/**
 * Footer Component
 * Clean, modern Cyber-Emerald footer with back-to-top button
 * and student designation line: 'Designed & Engineered by Shalini S • Class of 2029'.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-emerald-500/20 py-10 px-4 sm:px-6 lg:px-8 bg-[#070a0e]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Brand / Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-white tracking-wide">
            Shalini S <span className="text-emerald-400 font-mono text-xs">// Portfolio</span>
          </span>
        </div>

        {/* Centered Required Line */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-300 tracking-wide">
            Designed &amp; Engineered by <strong className="text-emerald-400 font-semibold">Shalini S</strong> • Class of 2029
          </p>
          <p className="text-[11px] font-mono text-emerald-500/60 mt-1">
            Cyber-Emerald Edition • Bengaluru, India
          </p>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-emerald-300 hover:text-white bg-emerald-950/40 border border-emerald-500/30 hover:border-lime-400 transition-all hover:-translate-y-0.5"
        >
          <span>top()</span>
          <ArrowUp className="w-3.5 h-3.5 text-lime-400" />
        </button>

      </div>
    </footer>
  );
}
