import React from 'react';
import { ArrowRight, Download, Sparkles, MapPin, GraduationCap, Code, Cpu, ExternalLink, ShieldCheck } from 'lucide-react';

/**
 * Hero Component
 * Opening Hero Intro Screen for Shalini S's Student Developer Portfolio.
 * Cyber-Emerald / Dark Mode theme (#0d1117 + #10b981 + #a3e635).
 */
export default function Hero() {
  const techPills = [
    { label: 'React.js', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' },
    { label: 'Tailwind CSS', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/20' },
    { label: 'Python & AI', color: 'text-lime-400 border-lime-500/30 bg-lime-950/20' },
    { label: 'Next.js', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/20' },
    { label: 'Node & APIs', color: 'text-lime-300 border-lime-500/30 bg-lime-950/20' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow accents (No blue - pure Emerald and Lime) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-600/15 via-lime-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center sm:text-left relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Content (Left 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            
            {/* Status Badge: Animated blinking radar pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.18)] hover:border-lime-400/50 transition-all duration-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              </span>
              <span className="text-xs sm:text-sm font-mono font-medium text-emerald-300 tracking-wide">
                Student Developer <span className="text-lime-400 font-bold">//</span> Open for Internships
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Hey, I am{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                Shalini S
              </span>
              <br className="hidden sm:inline" />
              <span className="text-slate-100 block sm:inline mt-1 sm:mt-0 font-extrabold">
                {' '}— Building the Future of Tech.
              </span>
            </h1>

            {/* Student Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              <span className="text-emerald-300 font-semibold">2nd Year Computer Science Student</span> at{' '}
              <span className="text-white font-medium underline decoration-emerald-500/40 underline-offset-4">
                K S institute of technology
              </span>{' '}
              passionate about{' '}
              <span className="text-lime-300 font-medium bg-lime-950/30 px-2 py-0.5 rounded border border-lime-500/20">
                web development
              </span>
              ,{' '}
              <span className="text-emerald-300 font-medium bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20">
                AI
              </span>
              , and building real-world projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              {/* Primary Glowing Emerald Button with lift on hover */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#0d1117] bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#0d1117] group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              {/* Secondary Outline Button with lift on hover */}
              <a
                href="#resume"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-emerald-300 hover:text-white bg-[#0d1117]/80 hover:bg-emerald-950/40 border-2 border-emerald-500/35 hover:border-lime-400 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Download className="w-4 h-4 text-lime-400 group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-200" />
                <span>Download Resume / CV</span>
              </a>
            </div>

            {/* Tech Stack Chips Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-emerald-400" />
                <span>stack:</span>
              </span>
              {techPills.map((pill, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-mono px-2.5 py-1 rounded-md border backdrop-blur-sm transition-all duration-200 hover:scale-105 ${pill.color}`}
                >
                  {pill.label}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Cyber Terminal / Student Profile Card (Right 5 cols on desktop) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative neon border frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-lime-500/20 blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Terminal / Code Card */}
              <div className="relative rounded-2xl bg-[#131922]/90 border border-emerald-500/30 backdrop-blur-xl p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
                
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span>shalini@ksit-terminal: ~</span>
                  </div>
                </div>

                {/* Terminal Body with Live Cyber Details */}
                <div className="mt-4 space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-lime-400 font-bold">$</span>
                    <span className="text-emerald-300">whoami</span>
                  </div>
                  <div className="pl-4 text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-emerald-500/30">
                    <p className="text-white font-medium">Shalini S</p>
                    <p className="text-slate-400 text-xs">CS Engineering Student (2023 - 2027)</p>
                    <p className="text-emerald-400 text-xs mt-1">@ K S Institute of Technology</p>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <span className="text-lime-400 font-bold">$</span>
                    <span className="text-emerald-300">cat goals.json</span>
                  </div>
                  <div className="pl-4 bg-[#0d1117]/80 rounded-lg p-3 border border-emerald-500/20 text-xs space-y-1">
                    <div className="text-slate-400">{"{"}</div>
                    <div className="pl-3 text-slate-300">
                      <span className="text-lime-300">"status"</span>: <span className="text-emerald-300">"Seeking Internships"</span>,
                    </div>
                    <div className="pl-3 text-slate-300">
                      <span className="text-lime-300">"interests"</span>: <span className="text-emerald-300">["Fullstack", "Generative AI", "Scalable Systems"]</span>,
                    </div>
                    <div className="pl-3 text-slate-300">
                      <span className="text-lime-300">"passion"</span>: <span className="text-emerald-300">"Building real-world software"</span>
                    </div>
                    <div className="text-slate-400">{"}"}</div>
                  </div>

                  {/* Highlights / Badges in Terminal */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                      <span>Ready for Impact</span>
                    </span>
                    <span className="font-mono text-emerald-400/90 animate-pulse">
                      ● Active session
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Cyber Pill */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#0d1117]/90 border border-lime-400/40 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-[0_0_15px_rgba(163,230,53,0.2)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-lime-400" />
                <span className="text-xs font-mono font-medium text-lime-300">
                  Ready to collaborate!
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

