import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, ExternalLink, Code2 } from 'lucide-react';

/**
 * Navbar Component
 * Floating frosted-glass navbar with Cyber-Emerald styling.
 * Responsive on mobile and desktop with clean navigation links and status indicator.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('About');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`relative rounded-2xl transition-all duration-300 border ${
            isScrolled
              ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.8)] shadow-emerald-950/20 py-2.5 px-4 sm:px-6'
              : 'bg-[#0d1117]/65 backdrop-blur-md border-emerald-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3 px-4 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-500/10 border border-emerald-500/40 group-hover:border-lime-400 transition-colors duration-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                <Code2 className="w-5 h-5 text-emerald-400 group-hover:text-lime-300 transition-colors" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Shalini S
                </span>
                <span className="text-[11px] font-mono tracking-widest text-emerald-400/80 uppercase">
                  portfolio // v2.0
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive
                        ? 'text-white bg-emerald-500/15 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-emerald-500/10 hover:border hover:border-emerald-500/20'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Quick Action Badge / GitHub Link */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-3.5 py-2 rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:border-lime-400 hover:text-white hover:bg-emerald-900/40 transition-all duration-200 shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-lime-400" />
                <span>get_in_touch()</span>
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-lime-400" />
                ) : (
                  <Menu className="w-6 h-6 text-emerald-400" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu with Cyber Emerald frosted styling */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-emerald-500/20 space-y-1.5 animate-fadeIn">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeLink === link.name
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-emerald-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <span className="text-emerald-500/60 font-mono text-xs">/&gt;</span>
                  </div>
                </a>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-emerald-500 text-carbon hover:bg-lime-400 transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                  <span>LET'S CONNECT</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

