import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, Sparkles, MessageSquare, ArrowUpRight, Copy, Check } from 'lucide-react';

/**
 * MagneticLink Component
 * Implements a slick physics magnetic attraction effect on hover.
 */
function MagneticLink({ href, icon, label, subtitle, isExternal = true }) {
  const linkRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    // Magnetic pull dampening factor
    setOffset({ x: dx * 0.22, y: dy * 0.22 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={linkRef}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
      }}
      className="group relative flex items-center justify-between p-4 rounded-2xl bg-[#131922]/90 border border-emerald-500/20 hover:border-lime-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.25)] transition-colors duration-200"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:border-lime-400/60 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
            <span>{label}</span>
          </h4>
          <p className="text-xs font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[260px]">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="w-8 h-8 rounded-lg bg-[#0d1117] border border-emerald-500/20 flex items-center justify-center text-slate-400 group-hover:text-lime-300 group-hover:border-lime-400/50 transition-colors">
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>
  );
}

/**
 * Contact Component
 * Features interactive form with simulated loading feedback ('Message Sent! 🚀')
 * and direct links for GitHub, LinkedIn, and Email with magnetic physics.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    // Simulate slick async submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('shalini.v1910@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.18)]">
          <MessageSquare className="w-3.5 h-3.5 text-lime-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
            Get In Touch
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let’s{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Collaborate &amp; Build
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Open for summer internships, open-source projects, or tech chats. Drop me a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
        
        {/* Left Column: Direct Links & Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-[#131922]/85 backdrop-blur-xl border border-emerald-500/25 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <h3 className="text-lg font-bold text-white mb-2">Connect Directly</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Whether you're exploring internship candidates, sharing hackathon ideas, or discussing web &amp; AI architectures, feel free to reach out across any platform.
            </p>

            {/* Direct Links with Magnetic Physics */}
            <div className="space-y-3.5">
              <MagneticLink
                href="https://github.com/Shalini191075"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
                subtitle="github.com/Shalini191075"
              />

              <MagneticLink
                href="https://www.linkedin.com/in/shalini-s-683486379?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
                subtitle="linkedin.com/in/shalini-s"
              />

              <MagneticLink
                href="mailto:shalini.v1910@gmail.com"
                icon={<Mail className="w-5 h-5" />}
                label="Direct Email"
                subtitle="shalini.v1910@gmail.com"
                isExternal={false}
              />
            </div>

            {/* Quick Copy Email Utility */}
            <div className="mt-6 pt-5 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">shalini.v1910@gmail.com</span>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-lime-400 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-lime-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#131922]/90 backdrop-blur-xl border border-emerald-500/25 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              I usually reply within 24 hours. Looking forward to speaking with you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  YOUR NAME <span className="text-lime-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Rivera"
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/25 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-white placeholder-slate-500 text-sm font-sans transition-all outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  YOUR EMAIL <span className="text-lime-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/25 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-white placeholder-slate-500 text-sm font-sans transition-all outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  YOUR MESSAGE <span className="text-lime-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Shalini, I came across your portfolio and wanted to reach out regarding..."
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1117]/90 border border-emerald-500/25 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-white placeholder-slate-500 text-sm font-sans transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button with Animated Emerald Loading Spinner & Sent Feedback */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                  status === 'success'
                    ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-[#0d1117] shadow-[0_0_30px_rgba(163,230,53,0.5)] cursor-default'
                    : status === 'loading'
                    ? 'bg-emerald-600 text-[#0d1117] cursor-wait opacity-90'
                    : 'bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 text-[#0d1117] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                }`}
              >
                {status === 'loading' && (
                  <>
                    {/* Emerald Loading Spinner */}
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#0d1117]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmitting Message...</span>
                  </>
                )}

                {status === 'success' && (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-[#0d1117]" />
                    <span>Message Sent! 🚀</span>
                  </>
                )}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#0d1117]" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
