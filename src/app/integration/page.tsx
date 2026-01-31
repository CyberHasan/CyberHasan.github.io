import React from 'react';
import { Database, ShieldCheck, Activity, ArrowRight } from 'lucide-react';

export default function IntegrationSync() {
    return (
        <main className="min-h-screen bg-[#010409] text-white p-12 font-sans selection:bg-[#00D2FF] selection:text-[#010409]">
            {/* HUD HEADER */}
            <header className="mb-24 border-b border-white/10 pb-12 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-[0.4em] mb-4">
                        Industrial Sync <span className="text-[#FFD700]">v1.0</span>
                    </h1>
                    <p className="text-white/40 uppercase tracking-widest text-sm">Mainframe Connectivity: INSPIRON TECH Infrastructure</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-[#00D2FF] font-bold uppercase tracking-[0.3em]">Status: Authorized</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Secure Node: MD ABU HASAN</p>
                </div>
            </header>

            {/* METRIC GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <div className="bg-white/5 border-l-2 border-[#00D2FF] p-8">
                    <Activity size={24} className="text-[#00D2FF] mb-4" />
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Sync Latency</p>
                    <p className="text-3xl font-black">0.042ms</p>
                </div>
                <div className="bg-white/5 border-l-2 border-[#FFD700] p-8">
                    <Database size={24} className="text-[#FFD700] mb-4" />
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Data Throughput</p>
                    <p className="text-3xl font-black">1.2 TB/s</p>
                </div>
                <div className="bg-white/5 border-l-2 border-white/20 p-8">
                    <ShieldCheck size={24} className="text-white/20 mb-4" />
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Protocol Status</p>
                    <p className="text-3xl font-black">ENFORCED</p>
                </div>
            </div>

            {/* ACTION PORTAL */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-sm text-center">
                <h2 className="text-2xl font-bold uppercase tracking-[0.2em] mb-6">Access Industrial Gate</h2>
                <p className="text-white/40 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
                    Establishing secure tunnel to Manager.io Cloud and AquaSmart IoT Telemetry sectors. Authentication required for deep-sector variance audit.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="https://inspiron.tech" className="bg-[#FFD700] text-[#010409] px-10 py-4 font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all flex items-center gap-2">
                        Enter Gate <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </main>
    );
}
