import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle2, HeartHandshake, Stethoscope, BookOpen } from 'lucide-react';

/**
 * ProjectCard Component
 * Implements interactive 3D perspective tilt, mouse-following dynamic shine/glare,
 * smooth translateY(-6px) elevation, and emerald edge glow.
 */
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [shineStyle, setShineStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D perspective tilt angles (max ~8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.1s ease-out',
    });

    // Sleek dynamic shine highlight following the cursor
    setShineStyle({
      opacity: 1,
      background: `radial-gradient(circle 260px at ${x}px ${y}px, rgba(16, 185, 129, 0.18), rgba(163, 230, 53, 0.08) 35%, transparent 75%)`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
    setShineStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`group relative rounded-2xl bg-[#131922]/85 backdrop-blur-xl border border-emerald-500/20 p-6 flex flex-col justify-between transition-shadow duration-300 transform-gpu overflow-hidden ${
        isHovered
          ? 'shadow-[0_15px_35px_-5px_rgba(16,185,129,0.28)] border-emerald-500/45'
          : 'shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* Sleek dynamic cursor-following shine effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={shineStyle}
      />

      {/* Decorative top accent hairline */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent group-hover:via-lime-400/60 transition-all duration-500"></div>

      <div>
        {/* Card Header: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-lime-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:border-lime-400/50 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              {project.icon}
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/90 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
              {project.subCategory}
            </span>
          </div>

          <span className="text-xs font-mono text-slate-500 group-hover:text-emerald-400 transition-colors">
            {project.id}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between gap-2">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-lime-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </h3>

        {/* Subtitle / Tagline */}
        {project.tagline && (
          <p className="text-xs font-mono text-lime-400/90 font-medium mt-1">
            {project.tagline}
          </p>
        )}

        {/* Project Description */}
        <p className="text-slate-300 text-sm leading-relaxed mt-3.5 text-left">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tech.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0d1117]/80 text-emerald-300 border border-emerald-500/20 group-hover:border-emerald-500/35 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: Live Demo and GitHub Code */}
      <div className="pt-6 mt-6 border-t border-emerald-500/15 flex items-center gap-3">
        <a
          href={project.demoUrl}
          className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0d1117] bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_22px_rgba(16,185,129,0.55)] transition-all duration-200 active:scale-95"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>

        <a
          href={project.githubUrl}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#0d1117]/90 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-lime-400/60 transition-all duration-200 active:scale-95"
        >
          <Github className="w-3.5 h-3.5 text-lime-400" />
          <span>GitHub Code</span>
        </a>
      </div>
    </div>
  );
}

/**
 * FeaturedProjects Component
 * Features filter pill row ('All', 'Web Apps', 'AI / ML', 'Mini-Projects')
 * and a 3-column responsive grid of interactive 3D tilt cards.
 */
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projects = [
    {
      id: '// 01',
      title: 'Patient case taking Application',
      tagline: 'MediKiosk // AI Clinical Triage System',
      icon: <Stethoscope className="w-5 h-5" />,
      subCategory: 'AI / Healthcare',
      categories: ['All', 'AI / ML', 'Web Apps'],
      description:
        'MediKiosk is an AI-powered, multilingual kiosk that lets patients describe their symptoms by voice or touch and scan old medical documents before they see the doctor. It turns all of that into a structured, ABHA-linked clinical history summary that the doctor can review and edit in seconds, with red-flag symptoms flagged for priority triage.',
      tech: ['Voice AI', 'Multilingual LLM', 'ABHA API', 'Python', 'React', 'OCR'],
      demoUrl: '#demo-medikiosk',
      githubUrl: '#github-medikiosk',
    },
    {
      id: '// 02',
      title: 'ArthaMithra',
      tagline: 'Community Financial Empowerment App',
      icon: <HeartHandshake className="w-5 h-5" />,
      subCategory: 'Social Impact / Fintech',
      categories: ['All', 'Web Apps', 'AI / ML'],
      description:
        'ArthaMitra is a Kannada-friendly mobile/web app for the urban slum community of Raagigudda (Vivekananda Colony), helping families track irregular daily income, expenses and savings goals. It also matches each household to the government schemes it qualifies for and shows the documents needed to apply, with short financial-literacy lessons and voice input for low-literacy users.',
      tech: ['React', 'Tailwind CSS', 'Kannada NLP', 'Voice Input', 'Node.js', 'Gov API'],
      demoUrl: '#demo-arthamithra',
      githubUrl: '#github-arthamithra',
    },
    {
      id: '// 03',
      title: 'CampusShare: Student Notes Marketplace',
      tagline: 'Peer-to-Peer Academic Knowledge Exchange',
      icon: <BookOpen className="w-5 h-5" />,
      subCategory: 'Campus Tool / Web App',
      categories: ['All', 'Web Apps', 'Mini-Projects'],
      description:
        'A collaborative peer-to-peer academic platform for KSIT students to exchange verified lecture notes, lab manuals, and previous years’ question papers. Features intelligent course categorization, preview rendering, and a student karma rating system to reward top contributors.',
      tech: ['Tailwind CSS', 'Node.js', 'Express', 'React', 'MongoDB', 'Cloudinary'],
      demoUrl: '#demo-campusshare',
      githubUrl: '#github-campusshare',
    },
  ];

  // Filter projects smoothly
  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
            Portfolio Showcase
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Projects
          </span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Real-world applications engineered with purpose — blending AI intelligence, community accessibility, and modern responsive web architectures.
        </p>
      </div>

      {/* Filter Pill Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                isActive
                  ? 'bg-emerald-500 text-[#0d1117] font-bold shadow-[0_0_20px_rgba(16,185,129,0.45)] border border-emerald-400 scale-105'
                  : 'bg-[#131922]/70 text-slate-300 hover:text-white hover:bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/40'
              }`}
            >
              {tab}
              {isActive && (
                <span className="inline-block ml-1.5 text-[10px] bg-[#0d1117] text-lime-400 px-1.5 py-0.2 rounded-full font-bold">
                  {tab === 'All' ? projects.length : projects.filter(p => p.categories.includes(tab)).length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 3-Column Grid with Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom Showcase Note */}
      <div className="mt-14 text-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-lime-300 transition-colors p-2 rounded-lg hover:bg-emerald-950/30 border border-transparent hover:border-emerald-500/30"
        >
          <Github className="w-4 h-4" />
          <span>Explore more repositories on GitHub &rarr;</span>
        </a>
      </div>
    </section>
  );
}

