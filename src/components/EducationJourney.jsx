import React from 'react';
import { GraduationCap, Award, Trophy, Zap, Users, ScrollText, Calendar, Building, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * EducationJourney Component
 * Engaging 'Education & Campus Journey' section featuring:
 * - Illuminated vertical emerald timeline with glowing nodal dots
 * - 3 Milestones (SIH selection, Emergency healthcare project, B.E. CS @ KSIT)
 * - Compact 2x2 grid of accomplishment badges with hover highlights
 */
export default function EducationJourney() {
  const milestones = [
    {
      year: '2026 // Present',
      badge: 'National Hackathon Selection',
      badgeColor: 'text-lime-300 border-lime-500/30 bg-lime-950/30',
      title: 'Selected for Smart India Hackathon (SIH)',
      subtitle: 'Internal College Competition Winner @ KSIT',
      description:
        'Got selected for the prestigious Smart India Hackathon (SIH) from the internal college competition at K S Institute of Technology. Led problem-solving brainstorming and pitch delivery to advance forward.',
      highlight: 'Shortlisted for National Level',
      icon: <Trophy className="w-4 h-4 text-lime-400" />,
      active: true,
    },
    {
      year: '2026 // Ongoing',
      badge: 'Major Innovation Project',
      badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/30',
      title: 'Building Emergency Healthcare Patient Tracker',
      subtitle: 'Hospitality & Clinical Emergency Records',
      description:
        'Building a project focused on emergency patient triage — helping hospitals and clinics track patient histories, past records, and critical vitals seamlessly to facilitate instant intervention during golden-hour emergencies.',
      highlight: 'ABHA-linked & Multilingual Voice Input',
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      active: true,
    },
    {
      year: '2023 — 2027',
      badge: 'Degree Pursuit',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30',
      title: 'B.E. in Computer Science & Engineering',
      subtitle: 'K S Institute of Technology, Bangalore',
      description:
        'Currently in 2nd Year CSE. Immersed in Data Structures, Object-Oriented Design, Operating Systems, and modern web application development. Consistently involved in campus hackathons and student tech circles.',
      highlight: 'Bangalore, Karnataka, India',
      icon: <GraduationCap className="w-4 h-4 text-emerald-300" />,
      active: false,
    },
  ];

  const accomplishments = [
    {
      icon: <Trophy className="w-5 h-5 text-lime-400" />,
      title: '1st Place / SIH Nominee',
      category: 'Hackathons',
      description: 'Selected from internal KSIT hackathon evaluation for Smart India Hackathon nomination.',
      accent: 'group-hover:border-lime-400/60 shadow-lime-950/20',
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: '150+ LeetCode Solved',
      category: 'Problem Solving',
      description: 'Strengthened algorithmic intuition across Arrays, Trees, Recursion, and Dynamic Programming in C++.',
      accent: 'group-hover:border-emerald-400/60 shadow-emerald-950/20',
    },
    {
      icon: <Users className="w-5 h-5 text-lime-300" />,
      title: 'Tech Club Organizer',
      category: 'Leadership & Community',
      description: 'Active contributor in KSIT student developer clubs, peer mentoring, and hackathon team coordination.',
      accent: 'group-hover:border-lime-400/60 shadow-lime-950/20',
    },
    {
      icon: <ScrollText className="w-5 h-5 text-emerald-300" />,
      title: 'Full-Stack Certified',
      category: 'Certifications',
      description: 'Completed hands-on certifications in modern React, Tailwind CSS, REST APIs, and backend architectures.',
      accent: 'group-hover:border-emerald-400/60 shadow-emerald-950/20',
    },
  ];

  return (
    <section id="campus-life" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md">
          <GraduationCap className="w-3.5 h-3.5 text-lime-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
            College &amp; Campus Journey
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education &amp;{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Milestones
          </span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Highlighting academic progress at K S Institute of Technology, hackathon competitions, and student community initiatives.
        </p>
      </div>

      {/* Main Grid: Left Timeline (7 cols) + Right 2x2 Achievements (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Illuminated Milestone Timeline */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-emerald-500/15">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">Academic &amp; Project Timeline</h3>
            </div>
            <span className="text-xs font-mono text-emerald-400/80">2023 — Present</span>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-8 sm:pl-10 space-y-8 sm:space-y-10">
            {/* The Illuminated Vertical Line */}
            <div className="absolute left-[13px] sm:left-[17px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-lime-400 via-emerald-400 to-emerald-500/20 shadow-[0_0_10px_#10b981]" />

            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Nodal Dot */}
                <div className="absolute -left-[30px] sm:-left-[34px] top-1.5 flex items-center justify-center">
                  <span className="relative flex h-5 w-5">
                    {item.active && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                    )}
                    <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-[#0d1117] border-2 border-emerald-400 group-hover:border-lime-400 shadow-[0_0_12px_#10b981] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    </span>
                  </span>
                </div>

                {/* Milestone Card */}
                <div className="rounded-2xl bg-[#131922]/85 backdrop-blur-xl border border-emerald-500/20 group-hover:border-emerald-500/40 p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.18)] group-hover:-translate-y-1">
                  {/* Top Bar: Date & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/25">
                      {item.year}
                    </span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-xs font-mono text-lime-400/90 font-medium mt-0.5">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>

                  {/* Highlight pill */}
                  <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      <span>{item.highlight}</span>
                    </span>
                    <span className="text-slate-500 group-hover:text-emerald-400 transition-colors">
                      KSIT // CSE
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 2x2 Grid of Accomplishment Callouts */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-emerald-500/15">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-lime-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">Accomplishment Badges</h3>
            </div>
            <span className="text-xs font-mono text-lime-400/80">Key Highlights</span>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {accomplishments.map((badge, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl bg-[#131922]/85 backdrop-blur-xl border border-emerald-500/20 p-5 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(16,185,129,0.2)] ${badge.accent}`}
              >
                {/* Hairline top glow */}
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent group-hover:via-lime-400/50 transition-all duration-300" />

                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-lime-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                      {badge.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/15">
                      {badge.category}
                    </span>
                  </div>

                  {/* Badge Title */}
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {badge.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {badge.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-3 mt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-emerald-400/80">
                  <span>Verified</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            ))}
          </div>

          {/* Extra University Info Card */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#131922]/80 to-[#0d1117] border border-emerald-500/25 p-5 flex items-center gap-4 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Building className="w-5 h-5 text-lime-400" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">K S Institute of Technology (KSIT)</h5>
              <p className="text-xs text-slate-400 mt-0.5">
                Affiliated with VTU, Approved by AICTE // Kanakapura Road, Bengaluru
              </p>
              <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                <span>Class of 2027 // Active Student</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

