import React from 'react';
import { Target, Zap, Terminal, ExternalLink } from 'lucide-react';
import { RefinedLogo } from '../components/Branding/RefinedLogo';

export default function CommanderHUD() {
  return (
    <main className="min-h-screen bg-[#010409] text-white relative overflow-hidden flex flex-col items-center justify-center p-6 font-institutional">
      {/* Blueprint Grid - Fixed at 40px Axis */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#00D2FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-[100vw] w-full text-center px-4">
        {/* VAULTMASK_FINAL: GEOMETRIC AXIS 321.346 */}
        <div className="mx-auto mb-12 flex justify-center drop-shadow-[0_0_25px_rgba(0,210,255,0.4)]">
          <RefinedLogo size={144} />
        </div>

        {/* THE GENERAL'S CLAMPED MONOLITH */}
        <h1 className="text-white font-black uppercase tracking-tighter leading-[0.8] mb-8 select-none whitespace-nowrap overflow-visible"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 12rem)' }}>
          MD ABU <span className="text-white/90">HASAN</span>
        </h1>

        <p className="text-sm md:text-2xl text-white/40 max-w-4xl mx-auto leading-relaxed font-light tracking-[0.2em] uppercase mb-16">
          Institutional Systems Architect <span className="text-[#00D2FF]">/</span> Founder of <span className="text-white font-bold">INSPIRON TECH</span>
        </p>

        {/* SECTOR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a href="/integration" className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#00D2FF] transition-all group relative">
            <Target className="text-[#00D2FF] mb-4 mx-auto" size={28} />
            <h3 className="font-bold uppercase tracking-widest text-xs">Revenue Gateway</h3>
            <ExternalLink className="absolute top-2 right-2 opacity-20" size={14} />
          </a>
          <a href="/guidelines" className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/40 transition-all">
            <Terminal className="text-white/40 mb-4 mx-auto" size={28} />
            <h3 className="font-bold uppercase tracking-widest text-xs">Brand Doctrine</h3>
          </a>
          <a href="https://www.linkedin.com/in/cyberhasan/" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#FFD700] transition-all group relative">
            <Zap className="text-[#FFD700] mb-4 mx-auto" size={28} />
            <h3 className="font-bold uppercase tracking-widest text-xs text-white/60">Social Command</h3>
          </a>
        </div>
      </div>
    </main>
  );
}
