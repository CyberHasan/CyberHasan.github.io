import React from 'react';
import { FileText, Briefcase, ArrowRight, ExternalLink } from 'lucide-react';

export default function RevenueGateway() {
    const contracts = [
        {
            client: 'Argus Properties & Marketing',
            country: 'Pakistan 🇵🇰',
            scope: 'Manager.io Full System Build — COA, Divisions, Projects, Agent Ledgers + Migration (~500 entries)',
            value: '$500',
            status: 'AGREED',
            statusColor: '#00D2FF',
            date: '2026-02-25',
        },
    ];

    return (
        <main className="min-h-screen bg-[#010409] text-white p-12 font-sans selection:bg-[#00D2FF] selection:text-[#010409]">
            {/* HUD HEADER */}
            <header className="mb-24 border-b border-white/10 pb-12 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-[0.4em] mb-4">
                        Revenue Gateway <span className="text-[#FFD700]">v1.0</span>
                    </h1>
                    <p className="text-white/40 uppercase tracking-widest text-sm">Active Contracts — INSPIRON TECH</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-[#00D2FF] font-bold uppercase tracking-[0.3em]">Operator: MD ABU HASAN</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Upwork + Direct</p>
                </div>
            </header>

            {/* ACTIVE CONTRACTS */}
            <section className="mb-20">
                <h2 className="text-xs font-bold text-[#00D2FF] uppercase tracking-[0.4em] mb-12">Active Contracts</h2>
                <div className="space-y-6">
                    {contracts.map((contract, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-all">
                            <div className="flex gap-6 items-start">
                                <Briefcase size={20} className="text-[#FFD700] mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">{contract.client}</p>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">{contract.country} — {contract.date}</p>
                                    <p className="text-sm text-white/60 max-w-xl leading-relaxed">{contract.scope}</p>
                                </div>
                            </div>
                            <div className="text-right shrink-0">
                                <p className="text-3xl font-black mb-2">{contract.value}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: contract.statusColor }}>{contract.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* UPWORK GATEWAY */}
            <section className="bg-white/5 border border-white/10 p-12 text-center">
                <FileText size={28} className="text-[#FFD700] mb-4 mx-auto" />
                <h2 className="text-2xl font-bold uppercase tracking-[0.2em] mb-4">Upwork Profile</h2>
                <p className="text-white/40 max-w-lg mx-auto mb-6 text-sm leading-relaxed">
                    Manager.io ERP setup, migration, custom themes and reporting — serving businesses across Pakistan, UAE, and worldwide.
                </p>
                <p className="text-[10px] text-[#00D2FF] font-bold uppercase tracking-widest mb-10">
                    Freelancer Plus · 100 Connects / Month · Direct Contracts: <span className="text-[#FFD700]">0% Service Fee</span>
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="https://www.upwork.com/freelancers/~011085e2a7cde3f437"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FFD700] text-[#010409] px-10 py-4 font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all flex items-center gap-2"
                    >
                        Upwork Profile <ExternalLink size={14} />
                    </a>
                    <a
                        href="https://www.upwork.com/ab/flservices/contracts/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#00D2FF]/30 text-[#00D2FF] px-10 py-4 font-bold text-xs uppercase tracking-widest hover:border-[#00D2FF]/60 transition-all flex items-center gap-2"
                    >
                        Direct Contract <ArrowRight size={14} />
                    </a>
                    <a
                        href="https://inspiron.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/20 text-white/60 px-10 py-4 font-bold text-xs uppercase tracking-widest hover:border-white/40 transition-all flex items-center gap-2"
                    >
                        Inspiron Tech <ArrowRight size={14} />
                    </a>
                </div>
            </section>
        </main>
    );
}
