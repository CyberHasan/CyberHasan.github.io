"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function BrandGuideline() {
    return (
        <main className="min-h-screen bg-deep-navy-black text-institutional-white p-12 font-institutional">
            {/* HUD HEADER */}
            <header className="mb-24 border-b border-white/10 pb-12">
                <h1 className="text-4xl font-black uppercase tracking-[0.5em] mb-4">
                    Sovereign Brand Doctrine <span className="text-action-gold">v2026.1</span>
                </h1>
                <p className="text-white/40 uppercase tracking-widest text-sm">Principal Architect: MD ABU HASAN | Protocol 0.1%</p>
            </header>

            {/* SECTION 1: THE GEOMETRIC ROOT */}
            <section className="mb-32">
                <h2 className="text-xs font-bold text-electric-cyan uppercase tracking-[0.4em] mb-12">01. Geometric Root (Axis Lock 321.346)</h2>
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="w-64 h-64 text-electric-cyan drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                        <svg viewBox="0 0 358.846 350.3" className="w-full h-full">
                            <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="currentColor"></path>
                            <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"></circle>
                        </svg>
                    </div>
                    <div className="max-w-xl">
                        <h3 className="text-xl font-bold mb-4">The Sovereign Mark</h3>
                        <p className="text-white/50 leading-relaxed text-sm">
                            The geometry is locked at the 321.346 axis. The Action Gold orbit represents the sun—the source of intelligence—while the Cyan infrastructure represents the cold, hard logic of the system.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE KINETIC PALETTE */}
            <section className="mb-32">
                <h2 className="text-xs font-bold text-electric-cyan uppercase tracking-[0.4em] mb-12">02. Kinetic Palette</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Deep Navy Black', hex: '#010409', desc: 'Sovereign Base' },
                        { name: 'Action Gold', hex: '#FFD700', desc: 'Intelligence Pivot' },
                        { name: 'Electric Cyan', hex: '#00D2FF', desc: 'Tactical Telemetry' },
                        { name: 'Institutional White', hex: '#FFFFFF', desc: 'Absolute Clarity' },
                    ].map((color) => (
                        <div key={color.hex} className="group">
                            <div className="h-40 w-full mb-4 transition-transform group-hover:scale-[1.02]" style={{ backgroundColor: color.hex }}></div>
                            <p className="text-xs font-bold uppercase">{color.name}</p>
                            <p className="text-[10px] text-white/40 tracking-widest">{color.hex}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: MONOLITHIC TYPOGRAPHY */}
            <section className="mb-32">
                <h2 className="text-xs font-bold text-electric-cyan uppercase tracking-[0.4em] mb-12">03. Monolithic Typography</h2>
                <div className="space-y-12">
                    <div className="border-l-2 border-action-gold pl-8">
                        <p className="text-[10px] text-action-gold uppercase tracking-widest mb-2">Primary Identifier (12rem)</p>
                        <h1 className="text-8xl md:text-[12rem] font-black uppercase leading-[0.8] tracking-tighter">INSPIRON</h1>
                    </div>
                    <div className="border-l-2 border-white/10 pl-8">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Secondary Header (4rem)</p>
                        <h2 className="text-4xl md:text-6xl font-light uppercase tracking-[0.2em]">Institutional Tech</h2>
                    </div>
                </div>
            </section>

            {/* FOOTER DOCTRINE */}
            <footer className="mt-40 pt-12 border-t border-white/10 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-[1em]">Execution is Everything.</p>
            </footer>
        </main>
    );
}
