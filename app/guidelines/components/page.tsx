"use client";

import React from 'react';
import { Target, Zap, Activity, ShieldCheck, Database, ArrowRight } from 'lucide-react';

export default function ComponentsLibrary() {
    return (
        <main className="min-h-screen bg-deep-navy-black text-institutional-white p-12 font-institutional selection:bg-electric-cyan selection:text-deep-navy-black">
            {/* HUD HEADER */}
            <header className="mb-24 border-b border-white/10 pb-12 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-[0.5em] mb-4">
                        Tactical Components <span className="text-action-gold">v1.0</span>
                    </h1>
                    <p className="text-white/40 uppercase tracking-widest text-sm">Component Repository | INSPIRON TECH Infrastructure</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-electric-cyan font-bold uppercase tracking-[0.3em]">Status: Operational</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Auth: MD ABU HASAN</p>
                </div>
            </header>

            {/* 01. COMMAND BUTTONS */}
            <section className="mb-32">
                <h2 className="text-xs font-bold text-electric-cyan uppercase tracking-[0.4em] mb-12">01. Command Buttons (Kinetic Triggers)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* PRIMARY: ACTION GOLD */}
                    <div className="space-y-6">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Primary / Action Gold</p>
                        <button className="w-full bg-action-gold text-deep-navy-black font-black uppercase tracking-widest py-4 px-8 flex items-center justify-center gap-3 active:scale-95 transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] group">
                            Start Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* SECONDARY: ELECTRIC CYAN */}
                    <div className="space-y-6">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Secondary / Outline</p>
                        <button className="w-full border border-electric-cyan text-electric-cyan font-bold uppercase tracking-widest py-4 px-8 active:scale-95 transition-all hover:bg-electric-cyan/10">
                            Technical Spec
                        </button>
                    </div>

                    {/* GHOST: INSTITUTIONAL */}
                    <div className="space-y-6">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Ghost / Minimal</p>
                        <button className="w-full text-white/60 font-medium uppercase tracking-[0.3em] py-4 px-8 hover:text-white transition-colors flex items-center justify-center gap-2">
                            <Database size={16} /> Data Node
                        </button>
                    </div>
                </div>
            </section>

            {/* 02. TACTICAL INPUTS */}
            <section className="mb-32">
                <h2 className="text-xs font-bold text-electric-cyan uppercase tracking-[0.4em] mb-12">02. Tactical Inputs (Data Entry)</h2>
                <div className="max-w-2xl space-y-12">
                    <div className="space-y-4">
                        <label className="text-[10px] text-white/40 uppercase tracking-widest block">System Input / Industrial</label>
                        <input
                            type="text"
                            placeholder="ENTER COMMAND OR NODE ID..."
                            className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm text-institutional-white focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-white/10"
                        />
                    </div>
                </div>
            </section>

            {/* 03. DASHBOARD WIDGETS (REVENUE NODES) */}
            <section className="mb-32">
                <h2 className="text-xs font-bold text-electric-cyan uppercase tracking-[0.4em] mb-12">03. Dashboard Widgets (Metric Nodes)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* VARIANCE NODE */}
                    <div className="bg-white/5 border-l-2 border-electric-cyan p-6 space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">Data Variance</p>
                            <Activity size={14} className="text-electric-cyan" />
                        </div>
                        <p className="text-3xl font-black">0.08%</p>
                        <p className="text-[10px] text-green-500 uppercase font-bold tracking-tighter">Protocol Pass</p>
                    </div>

                    {/* REVENUE NODE */}
                    <div className="bg-white/5 border-l-2 border-action-gold p-6 space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">Revenue Recovery</p>
                            <Zap size={14} className="text-action-gold" />
                        </div>
                        <p className="text-3xl font-black">৳25.4L</p>
                        <p className="text-[10px] text-action-gold uppercase font-bold tracking-tighter">Molecular Level</p>
                    </div>

                    {/* COMPLIANCE NODE */}
                    <div className="bg-white/5 border-l-2 border-white/20 p-6 space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">Audit Status</p>
                            <ShieldCheck size={14} className="text-white/40" />
                        </div>
                        <p className="text-3xl font-black uppercase">Alpha</p>
                        <p className="text-[10px] text-white/20 uppercase font-bold tracking-tighter">AEO Ready</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="mt-40 pt-12 border-t border-white/10 text-center opacity-20">
                <p className="text-[10px] uppercase tracking-[0.8em]">Built for Industrial Command by MD ABU HASAN</p>
            </footer>
        </main>
    );
}
