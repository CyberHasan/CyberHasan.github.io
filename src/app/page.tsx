
/**
 * COMMANDER HUD - PHASE 5: SOVEREIGN PORTFOLIO
 * High-Velocity Personal Authority Node
 * 0.1% Visual Tolerance
 */

import React from 'react';
import { Target, Zap, Terminal } from 'lucide-react';

export default function CommanderHUD() {
  return (
    <main className="min-h-screen bg-deep-navy-black text-institutional-white relative overflow-hidden flex flex-col items-center justify-center p-6">

      {/* KINETIC GRID BACKGROUND */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

      {/* COMMANDER HUD CONTAINER */}
      <div className="relative z-10 max-w-6xl w-full text-center">

        {/* IDENTITY DECK */}
        <div className="mb-16 animate-fade-in-up flex flex-col items-center">

          {/* AXIS-LOCKED SVG (321.346 COORDINATES) */}
          <div className="w-32 h-32 mb-8 text-electric-cyan glow-cyan animate-spin-slow">
            <svg viewBox="0 0 358.846 350.3" className="w-full h-full">
              <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="currentColor"></path>
              <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="currentColor"></path>
              <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"></circle>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 bg-action-gold/5 border border-action-gold/30 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-action-gold mb-8 glow-gold backdrop-blur-sm">
            Sovereign Command Active
          </div>

          <h1 className="font-institutional text-[12vw] lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            MD ABU <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">HASAN</span>
          </h1>

          <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Institutional Systems Architect. Founder of <span className="text-electric-cyan font-bold">INSPIRON TECH</span>. Installing control in 100+ Crore enterprises.
          </p>
        </div>

        {/* SECTOR GRID NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {/* LINK 1: REVENUE GATEWAY */}
          <a href="https://inspiron.tech" target="_blank" className="group bg-white/5 border border-white/10 hover:border-electric-cyan/50 p-10 rounded-3xl transition-all duration-500 hover:bg-electric-cyan/5 flex flex-col items-center justify-center text-center hover:-translate-y-2">
            <div className="w-16 h-16 bg-electric-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-electric-cyan group-hover:scale-110 transition-transform duration-500">
              <Target size={32} />
            </div>
            <h3 className="font-black uppercase tracking-widest text-sm mb-2 group-hover:text-electric-cyan transition-colors">Revenue Gateway</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Inspiron.tech Mission Control</p>
          </a>

          {/* LINK 2: INTELLIGENCE CORE */}
          <div className="group bg-white/5 border border-white/10 p-10 rounded-3xl transition-all duration-500 flex flex-col items-center justify-center text-center opacity-60 grayscale cursor-not-allowed">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-gray-500">
              <Terminal size={32} />
            </div>
            <h3 className="font-black uppercase tracking-widest text-sm mb-2 text-gray-500">Intelligence Core</h3>
            <p className="text-xs text-gray-600 uppercase tracking-wider">Clearance Restricted</p>
          </div>

          {/* LINK 3: SOCIAL COMMAND */}
          <a href="https://www.linkedin.com/in/md-abu-hasan" target="_blank" className="group bg-white/5 border border-white/10 hover:border-action-gold/50 p-10 rounded-3xl transition-all duration-500 hover:bg-action-gold/5 flex flex-col items-center justify-center text-center hover:-translate-y-2">
            <div className="w-16 h-16 bg-action-gold/10 rounded-2xl flex items-center justify-center mb-6 text-action-gold group-hover:scale-110 transition-transform duration-500">
              <Zap size={32} />
            </div>
            <h3 className="font-black uppercase tracking-widest text-sm mb-2 group-hover:text-action-gold transition-colors">Social Command</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider">LinkedIn Authority Node</p>
          </a>
        </div>

        {/* STATUS FOOTER */}
        <div className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.3em] animate-pulse">
          System Status: 0.1% Visual Tolerance Verified
        </div>

      </div>
    </main>
  );
}
