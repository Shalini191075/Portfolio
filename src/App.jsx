import React from 'react';
import CursorFollower from './components/CursorFollower';
import MatrixDotCanvas from './components/MatrixDotCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import EducationJourney from './components/EducationJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Interactive Cursor Follower Easter Egg */}
      <CursorFollower />

      {/* Dynamic Animated Matrix Dot Grid Canvas */}
      <MatrixDotCanvas />

      {/* Floating Frosted-Glass Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero Intro Screen */}
        <Hero />

        {/* 2. Featured Projects 3-Column Showcase with 3D Tilt */}
        <FeaturedProjects />

        {/* 3. Tech Stack & Skills with Tooltip Comfort Levels */}
        <TechStackSkills />

        {/* 4. Education & Campus Journey with Illuminated Timeline & Badges */}
        <EducationJourney />

        {/* 5. About Me Section */}
        <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-emerald-500/15">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-lime-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
          </div>
          <div className="bg-[#131922]/70 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-4">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a Computer Science Engineering student at <strong className="text-emerald-300">K S Institute of Technology (KSIT)</strong> with a deep enthusiasm for engineering elegant, user-centric web applications and applying artificial intelligence to real-world problems.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              From architecting emergency triage kiosks to community financial literacy applications, I thrive at the intersection of technical rigor, accessible design, and continuous learning. When not coding, you'll find me exploring emerging AI workflows, participating in hackathons, and collaborating with fellow student developers.
            </p>
          </div>
        </section>

        {/* 6. Interactive Contact Section */}
        <Contact />
      </main>

      {/* 7. Clean Production Footer */}
      <Footer />
    </div>
  );
}
