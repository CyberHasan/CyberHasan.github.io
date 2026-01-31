import React from 'react';
import { Target, Zap, Terminal, ExternalLink } from 'lucide-react';

export default function CommanderHUD() {
  return (
    <main className="min-h-screen bg-[#010409] text-white relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#00D2FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-7xl w-full text-center">
        {/* VAULTMASK_FINAL SVG UNIT */}
        <div className="w-44 h-44 mx-auto mb-12 text-[#00D2FF] drop-shadow-[0_0_25px_rgba(0,210,255,0.4)]">
          <svg viewBox="0 0 358.846 350.3" className="w-full h-full">
            <defs>
              <mask id="VaultMask_Final" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
                <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"></path>
                <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="none" stroke="#000" strokeWidth="24px" strokeLinecap="round" strokeLinejoin="round"></path>
              </mask>
            </defs>
            <g mask="url(#VaultMask_Final)">
              <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="currentColor"></path>
            </g>
            <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"></circle>
          </svg>
        </div>

        {/* 12REM MONOLITH */}
        <h1 className="text-[5rem] md:text-[12rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
          MD ABU <span className="text-white">HASAN</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/40 max-w-4xl mx-auto leading-relaxed font-light tracking-[0.2em] uppercase mb-16">
          Institutional Systems Architect <span className="text-[#00D2FF]">/</span> Founder of <span className="text-white font-bold">INSPIRON TECH</span>
        </p>

        {/* SECTOR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a href="https://inspiron.tech" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#00D2FF] transition-all group relative">
            <Target className="text-[#00D2FF] mb-4 mx-auto" size={28} />
            <h3 className="font-bold uppercase tracking-widest text-xs text-white/60 group-hover:text-white">Revenue Gateway</h3>
            <ExternalLink className="absolute top-2 right-2 opacity-20" size={14} />
          </a>
          <a href="/guidelines" className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/40 transition-all group">
            <Terminal className="text-white/40 mb-4 mx-auto group-hover:text-white" size={28} />
            <h3 className="font-bold uppercase tracking-widest text-xs text-white/60 group-hover:text-white">Brand Doctrine</h3>
          </a>
          <a href="https://www.linkedin.com/in/cyberhasan/" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#FFD700] transition-all group relative overflow-hidden">
            <Zap className="text-[#FFD700] mb-4 mx-auto" size={28} />
            <h3 className="font-bold uppercase tracking-widest text-xs text-white/60 group-hover:text-white">Social Command</h3>
          </a>
        </div>
      </div>
    </main>
  );
}
