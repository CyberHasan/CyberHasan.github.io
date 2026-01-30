
/**
 * COMMANDER HUD - PHASE 5: SOVEREIGN PORTFOLIO
 * High-Velocity Personal Authority Node
 * 0.1% Visual Tolerance
 */

import React from 'react';
import { Shield, Target, ExternalLink, Zap, Terminal } from 'lucide-react';

export default function CommanderHUD() {
  return (
    <main className="min-h-screen bg-deep-navy-black text-institutional-white relative overflow-hidden flex flex-col items-center justify-center p-6">

      {/* KINETIC GRID BACKGROUND */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

      {/* COMMANDER HUD CONTAINER */}
      <div className="relative z-10 max-w-5xl w-full text-center">

        {/* IDENTITY DECK */}
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-action-gold/10 border border-action-gold/30 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-action-gold mb-8 glow-gold">
            <Shield size={12} />
            Sovereign Command Active
          </div>

          <h1 className="font-institutional text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            MD ABU <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">HASAN</span>
          </h1>

          <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Institutional Systems Architect. Founder of <span className="text-electric-cyan font-bold">INSPIRON TECH</span>. Installing control in 100+ Crore enterprises.
          </p>
        </div>

        {/* SECTOR GRID NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {/* LINK 1: REVENUE GATEWAY */}
          <a href="https://inspiron.tech" target="_blank" className="group bg-white/5 border border-white/10 hover:border-electric-cyan/50 p-8 rounded-2xl transition-all duration-300 hover:bg-electric-cyan/5 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-electric-cyan/10 rounded-full flex items-center justify-center mb-4 text-electric-cyan group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-2 group-hover:text-electric-cyan transition-colors">Revenue Gateway</h3>
            <p className="text-xs text-gray-500">Inspiron.tech Mission Control</p>
          </a>

          {/* LINK 2: INTELLIGENCE CORE */}
          <div className="group bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center opacity-70 cursor-not-allowed">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-gray-500">
              <Terminal size={24} />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-2 text-gray-500">Intelligence Core</h3>
            <p className="text-xs text-gray-600">Restricted Access</p>
          </div>

          {/* LINK 3: SOCIAL COMMAND */}
          <a href="https://www.linkedin.com/in/md-abu-hasan" target="_blank" className="group bg-white/5 border border-white/10 hover:border-action-gold/50 p-8 rounded-2xl transition-all duration-300 hover:bg-action-gold/5 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-action-gold/10 rounded-full flex items-center justify-center mb-4 text-action-gold group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-2 group-hover:text-action-gold transition-colors">Social Command</h3>
            <p className="text-xs text-gray-500">LinkedIn Authority Node</p>
          </a>
        </div>

        {/* STATUS FOOTER */}
        <div className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em] animate-pulse">
          System Status: 0.1% Visual Tolerance Verified
        </div>

      </div>
    </main>
  );
}
