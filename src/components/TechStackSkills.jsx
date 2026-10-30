import React, { useState } from 'react';
import { Terminal, Cpu, Wrench, BookOpen, Sparkles, CheckCircle2, Compass, Flame } from 'lucide-react';

/**
 * Official SVG Icons for Tech Badges
 */
const TechIcons = {
  // Languages
  cpp: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.394 6.784a1.865 1.865 0 0 0-.918-.752L13.197.808a2.316 2.316 0 0 0-2.394 0L2.524 6.032a1.865 1.865 0 0 0-.918.752c-.378.53-.578 1.16-.574 1.8v10.832c-.004.64.196 1.27.574 1.8.25.352.57.625.918.752l8.279 5.224a2.316 2.316 0 0 0 2.394 0l8.279-5.224c.348-.127.668-.4.918-.752.378-.53.578-1.16.574-1.8V8.584c.004-.64-.196-1.27-.574-1.8zm-9.87 9.176c-2.33 0-3.95-1.74-3.95-3.96 0-2.23 1.62-3.96 3.95-3.96 1.54 0 2.76.77 3.39 1.95l-1.63.95c-.34-.63-.98-1.02-1.76-1.02-1.29 0-2.14.98-2.14 2.08s.85 2.08 2.14 2.08c.78 0 1.42-.39 1.76-1.02l1.63.95c-.63 1.18-1.85 1.95-3.39 1.95zm5.55-3.13h-1.04v1.04h-.83v-1.04h-1.04v-.83h1.04v-1.04h.83v1.04h1.04v.83zm3.32 0h-1.04v1.04h-.83v-1.04h-1.04v-.83h1.04v-1.04h.83v1.04h1.04v.83z" />
    </svg>
  ),
  python: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.808v.825H3.83S0 5.76 0 11.904c0 6.14 3.34 5.94 3.34 5.94h1.994v-2.793s-.11-3.34 3.28-3.34h5.632s3.172.05 3.172-3.07V3.07S17.973 0 11.914 0zM8.7 1.838a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm3.386 22.162c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75H11.99v-.825h8.183s3.83.47 3.83-5.674c0-6.14-3.34-5.94-3.34-5.94h-1.994v2.793s.11 3.34-3.28 3.34H9.747s-3.172-.05-3.172 3.07v5.568s-.555 3.07 5.504 3.07zm3.214-1.838a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0-2.1z" />
    </svg>
  ),
  javascript: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.797-1.025-.112-.19-.138-.42-.112-.647.086-.777.924-.897 1.407-.811.458.077.872.336 1.079.742.699-.457 1.104-.725 1.545-1.01-.363-.57-.751-.959-1.321-1.235-.742-.363-1.632-.432-2.503-.302-1.01.147-1.908.76-2.227 1.735-.552 1.631.389 3.047 2.158 3.824 1.027.466 1.709.777 1.864 1.347.199.786-.397 1.33-1.571 1.321-.898-.017-1.467-.397-1.907-1.062-.604.38-1.053.665-1.614 1.027.535.95 1.251 1.571 2.218 1.839 1.545.431 3.236.198 4.074-.751.725-.829.837-1.899.667-2.778zM10.364 12.01h2.157v7.241c0 1.657-.026 2.684-.57 3.392-.664.863-1.873 1.096-3.081.829-.717-.156-1.338-.561-1.744-1.157.544-.337.993-.613 1.502-.932.268.414.544.708 1.01.811.458.104.975-.025 1.182-.509.121-.294.138-.769.138-1.416V12.01z" />
    </svg>
  ),
  java: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.851 18.56s-.917.534.667.718c2.244.26 3.482.234 5.92-.26 0 0 .785.496 1.836.93-5.263 2.12-11.836-.3-8.423-1.388zm-.965-3.66s-1.05.65.534.885c2.618.384 4.886.417 8.788-.45 0 0 .584.45 1.368.768-6.42 2.186-14.126.15-10.69-1.203zm8.388-4.473c1.085 1.252-.284 2.454-.284 2.454s3.303-1.72 1.77-3.856c-1.47-2.053-2.67-3.072-5.405-4.573 0 0 2.053 1.57 3.919 5.975zm-6.89-6.457s3.52 2.67 1.17 6.424c-1.886 3.003-.534 4.672 0 6.64-1.485-.75-2.67-2.27-2.336-3.804.434-2.003 2.37-3.07 2.17-5.074-.184-1.87-2.036-3.02-1.004-4.186zm6.273 12.398c-2.436.7-5.122.75-7.558.267-1.335-.266-1.735-.634-1.735-.634s.384.417 1.518.734c3.42 1.001 7.92.768 11.24-.317 0 0-.85-.367-1.85-.717-.584-.2-1.034-.283-1.615-.333z" />
    </svg>
  ),
  typescript: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.39 9.943h3.504v2.091h-3.504v4.545c0 .762.377 1.092 1.18 1.092.65 0 1.16-.076 1.478-.17v1.942c-.524.18-1.393.287-2.316.287-1.22 0-2.148-.37-2.738-1.07-.604-.716-.884-1.757-.884-3.14V12.03h-2.138V9.943h2.138V6.985l2.47-.738v3.696zm-9.043 7.854c.734.423 1.767.754 2.822.754 2.47 0 3.738-1.22 3.738-3.018 0-1.66-1.034-2.585-2.935-3.32-1.397-.547-1.923-.98-1.923-1.66 0-.698.585-1.245 1.585-1.245.924 0 1.698.34 2.19.642l.716-1.905c-.566-.359-1.528-.68-2.81-.68-2.453 0-3.793 1.34-3.793 3.076 0 1.641 1.057 2.622 3.019 3.396 1.358.547 1.83.98 1.83 1.622 0 .736-.622 1.302-1.773 1.302-.98 0-1.943-.377-2.566-.755l-.717 1.87z" />
    </svg>
  ),
  cLang: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.96 0C5.353 0 0 5.355 0 11.962 0 18.57 5.353 23.924 11.96 23.924c5.097 0 9.47-3.18 11.233-7.697l-4.133-1.724c-1.12 2.87-3.882 4.887-7.1 4.887-4.134 0-7.487-3.353-7.487-7.428s3.353-7.428 7.487-7.428c3.218 0 5.98 2.017 7.1 4.887l4.133-1.724C21.43 3.18 17.057 0 11.96 0z" />
    </svg>
  ),

  // Frameworks & Tools
  react: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 9.062a2.938 2.938 0 1 0 0 5.876 2.938 2.938 0 0 0 0-5.876zm0-7.874c-4.437 0-8.832 2.073-11.442 5.568 2.61 3.495 7.005 5.568 11.442 5.568 4.437 0 8.832-2.073 11.442-5.568-2.61-3.495-7.005-5.568-11.442-5.568zm0 14.562c-4.437 0-8.832 2.073-11.442 5.568 2.61 3.495 7.005 5.568 11.442 5.568 4.437 0 8.832-2.073 11.442-5.568-2.61-3.495-7.005-5.568-11.442-5.568z" />
    </svg>
  ),
  tailwind: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  nodejs: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.95c-.3 0-.6.15-.75.45l-9.9 17.1c-.3.45-.15 1.05.3 1.35.15.15.45.15.6.15h19.5c.6 0 1.05-.45 1.05-1.05 0-.15-.15-.45-.3-.6L12.75 2.4c-.15-.3-.45-.45-.75-.45zm0 4.2l7.8 13.5H4.2L12 6.15z" />
    </svg>
  ),
  git: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l3.05 3.053c.642-.222 1.385-.08 1.9.438.746.746.746 1.956 0 2.702-.746.746-1.956.746-2.702 0-.518-.517-.66-1.259-.44-1.9l-2.85-2.85v7.24c.215.1.419.24.596.417.746.746.746 1.956 0 2.702-.746.746-1.956.746-2.702 0-.746-.746-.746-1.956 0-2.702.21-.21.455-.353.717-.441v-7.25c-.26-.089-.505-.231-.717-.44-.523-.523-.662-1.274-.435-1.92l-2.73-2.73-6.52 6.52c-.604.604-.604 1.581 0 2.185l10.48 10.478c.604.604 1.582.604 2.187 0l10.478-10.478c.605-.604.605-1.582 0-2.186z" />
    </svg>
  ),
  nextjs: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.58L10.3 7.84H8.4v8.32h1.68v-6.38l6.32 8.42c.44-.19.86-.4 1.26-.62h.16zm.42-2.74h-1.68V7.84h1.68v7z" />
    </svg>
  ),
  vite: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.513 3.633L12.587 23.332a.7.7 0 0 1-1.218.008L.484 3.69a.7.7 0 0 1 .59-1.037l10.82.02a.7.7 0 0 1 .602.347l2.84 4.887a.7.7 0 0 0 1.206-.002l1.62-2.793a.7.7 0 0 1 .603-.347l4.15-.008a.7.7 0 0 1 .598 1.053z" />
    </svg>
  ),
  express: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.571l-4.227-6.571 4.227-6.571h-3.371l-2.543 4.286-2.543-4.286h-3.371l4.227 6.571-4.227 6.571h3.371l2.543-4.286 2.543 4.286zM6.571 18.571v-13.143h-6.571v2.571h3.714v2.714h-3.714v2.571h3.714v2.714h-3.714v2.571z" />
    </svg>
  ),
  mongodb: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0s-5.64 5.34-5.64 12c0 4.418 2.686 8.4 5.64 12 2.954-3.6 5.64-7.582 5.64-12C17.64 5.34 12 0 12 0zm.45 22.8c-.27.27-.63.27-.9 0-2.34-2.88-4.59-6.3-4.59-10.8 0-4.95 3.6-9.27 4.95-10.8.18-.18.45-.18.63 0 1.35 1.53 4.95 5.85 4.95 10.8 0 4.5-2.25 7.92-4.59 10.8-.18.18-.36.18-.45 0z" />
    </svg>
  ),

  // Core CS Concepts
  dsa: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
      <line x1="7.5" y1="8.5" x2="10.5" y2="15.5" />
      <line x1="16.5" y1="8.5" x2="13.5" y2="15.5" />
    </svg>
  ),
  oop: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="8" height="8" rx="2" />
      <rect x="14" y="3" width="8" height="8" rx="2" />
      <rect x="8" y="15" width="8" height="8" rx="2" />
      <line x1="6" y1="11" x2="10" y2="15" />
      <line x1="18" y1="11" x2="14" y2="15" />
    </svg>
  ),
  dbms: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  os: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
    </svg>
  ),
  cn: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="6" height="6" rx="1" />
      <rect x="16" y="2" width="6" height="6" rx="1" />
      <rect x="9" y="16" width="6" height="6" rx="1" />
      <line x1="5" y1="8" x2="5" y2="12" />
      <line x1="19" y1="8" x2="19" y2="12" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  ),
  aiMl: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 0-4 4c0 1.3.6 2.4 1.5 3.2L8 14h8l-1.5-4.8c.9-.8 1.5-1.9 1.5-3.2a4 4 0 0 0-4-4z" />
      <path d="M8 14v4a4 4 0 0 0 8 0v-4" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
};

/**
 * SkillPill Component
 * Interactive badge with official icon, hover scaling (scale-105),
 * emerald border glow, and floating precision tooltip indicating comfort level.
 */
function SkillPill({ skill }) {
  // Comfort level styling configs
  const levelConfig = {
    'Proficient': {
      colorText: 'text-emerald-300',
      dotColor: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
      borderHover: 'hover:border-emerald-400/80 hover:shadow-[0_0_18px_rgba(16,185,129,0.38)]',
      tooltipTag: '🟢 Proficient',
    },
    'Familiar': {
      colorText: 'text-lime-300',
      dotColor: 'bg-lime-400 shadow-[0_0_8px_#a3e635]',
      borderHover: 'hover:border-lime-400/80 hover:shadow-[0_0_18px_rgba(163,230,53,0.32)]',
      tooltipTag: '🟡 Familiar',
    },
    'Currently Learning': {
      colorText: 'text-cyan-300',
      dotColor: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse',
      borderHover: 'hover:border-cyan-400/80 hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]',
      tooltipTag: '🔵 Currently Learning',
    },
  };

  const currentLevel = levelConfig[skill.level] || levelConfig['Familiar'];

  return (
    <div className="relative group/pill inline-flex">
      {/* Skill Badge */}
      <div
        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#0d1117]/85 backdrop-blur-md border border-emerald-500/20 text-slate-200 transition-all duration-200 cursor-pointer transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${currentLevel.borderHover}`}
      >
        {/* Official Tech Icon */}
        <span className="w-4 h-4 flex items-center justify-center text-emerald-400 group-hover/pill:text-lime-300 transition-colors">
          {skill.icon}
        </span>

        {/* Skill Name */}
        <span className="text-xs sm:text-sm font-medium tracking-tight group-hover/pill:text-white transition-colors">
          {skill.name}
        </span>

        {/* Level Dot Indicator */}
        <span className={`w-1.5 h-1.5 rounded-full ${currentLevel.dotColor}`} />
      </div>

      {/* Interactive Tooltip on Hover */}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pill:flex flex-col items-center z-30 transition-all duration-200 animate-fadeIn">
        <div className="px-3 py-1 rounded-lg bg-[#070a0e] border border-emerald-500/40 shadow-[0_6px_20px_rgba(0,0,0,0.85)] text-[11px] font-mono whitespace-nowrap flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${currentLevel.dotColor}`} />
          <span className="text-slate-300 font-medium">{skill.level}</span>
        </div>
        {/* Pointer Arrow */}
        <div className="w-2 h-2 bg-[#070a0e] border-r border-b border-emerald-500/40 transform rotate-45 -mt-1" />
      </div>
    </div>
  );
}

/**
 * TechStackSkills Component
 * 3-category layout: Languages, Frameworks & Tools, and Core CS Concepts
 */
export default function TechStackSkills() {
  const categories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      tagline: 'Core Programming & Scripting',
      skills: [
        { name: 'C++', icon: TechIcons.cpp, level: 'Proficient' },
        { name: 'Python', icon: TechIcons.python, level: 'Proficient' },
        { name: 'JavaScript', icon: TechIcons.javascript, level: 'Proficient' },
        { name: 'Java', icon: TechIcons.java, level: 'Familiar' },
        { name: 'TypeScript', icon: TechIcons.typescript, level: 'Familiar' },
        { name: 'C', icon: TechIcons.cLang, level: 'Familiar' },
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Tools',
      icon: <Wrench className="w-5 h-5 text-lime-400" />,
      tagline: 'Frontend, Backend & Developer Tooling',
      skills: [
        { name: 'React', icon: TechIcons.react, level: 'Proficient' },
        { name: 'Tailwind CSS', icon: TechIcons.tailwind, level: 'Proficient' },
        { name: 'Node.js', icon: TechIcons.nodejs, level: 'Familiar' },
        { name: 'Git / GitHub', icon: TechIcons.git, level: 'Proficient' },
        { name: 'Vite', icon: TechIcons.vite, level: 'Proficient' },
        { name: 'Next.js', icon: TechIcons.nextjs, level: 'Currently Learning' },
        { name: 'Express', icon: TechIcons.express, level: 'Familiar' },
        { name: 'MongoDB', icon: TechIcons.mongodb, level: 'Familiar' },
      ],
    },
    {
      id: 'core-cs',
      title: 'Core CS Concepts',
      icon: <BookOpen className="w-5 h-5 text-emerald-300" />,
      tagline: 'Foundations & Engineering Principles',
      skills: [
        { name: 'Data Structures & Algorithms', icon: TechIcons.dsa, level: 'Proficient' },
        { name: 'OOP (C++ / Java)', icon: TechIcons.oop, level: 'Proficient' },
        { name: 'DBMS & SQL', icon: TechIcons.dbms, level: 'Familiar' },
        { name: 'Operating Systems', icon: TechIcons.os, level: 'Familiar' },
        { name: 'Computer Networks', icon: TechIcons.cn, level: 'Familiar' },
        { name: 'AI & ML Basics', icon: TechIcons.aiMl, level: 'Currently Learning' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
            Skills &amp; Capabilities
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Tech Stack &amp;{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Skills
          </span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          A curated toolkit honed through coursework, competitive challenges, and real-world project builds.
        </p>

        {/* Comfort Level Legend */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span>Proficient</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
            <span>Familiar</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
            <span>Currently Learning</span>
          </span>
        </div>
      </div>

      {/* 3 Categorized Glass Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative rounded-2xl bg-[#131922]/80 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
          >
            {/* Top Hairline Glow Accent */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent group-hover:via-lime-400/50 transition-all duration-500" />

            <div>
              {/* Category Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/15 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-lime-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Pill Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <SkillPill key={idx} skill={skill} />
                ))}
              </div>
            </div>

            {/* Bottom Status / Micro-detail */}
            <div className="pt-5 mt-6 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1 text-emerald-500/70">
                <Compass className="w-3 h-3 text-emerald-400" />
                <span>Hover badge for comfort level</span>
              </span>
              <span className="text-slate-500">KSIT // CSE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

