"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Activity, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface LogEntry {
    id: string;
    timestamp: string;
    source: 'GEMINI' | 'CLAUDE' | 'PERPLEXITY' | 'SYSTEM';
    status: 'PROCESSING' | 'SUCCESS' | 'VARIANCE_DETECTED';
    message: string;
    variance: string;
}

export default function IntelligenceLog() {
    const [logs, setLogs] = useState<LogEntry[]>([
        { id: '1', timestamp: '03:14:02', source: 'GEMINI', status: 'SUCCESS', message: 'Neural Bridge Sync: Production Mainframe', variance: '0.001%' },
        { id: '2', timestamp: '03:14:15', source: 'CLAUDE', status: 'PROCESSING', message: 'Analyzing Manager.io API Payload...', variance: 'N/A' },
        { id: '3', timestamp: '03:14:28', source: 'PERPLEXITY', status: 'SUCCESS', message: 'Market Telemetry: Dhaka Industrial Sector', variance: '0.042%' },
        { id: '4', timestamp: '03:14:45', source: 'SYSTEM', status: 'VARIANCE_DETECTED', message: '0.1% Protocol Breach: AquaSmart Node 7', variance: '0.124%' },
    ]);

    return (
        <main className="min-h-screen bg-deep-navy-black text-institutional-white p-12 font-institutional">
            {/* HUD HEADER */}
            <header className="mb-16 border-b border-white/10 pb-8 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-[0.4em] mb-2">
                        Intelligence Log <span className="text-electric-cyan">v1.0</span>
                    </h1>
                    <p className="text-white/40 uppercase tracking-widest text-[10px]">
                        Sector: Neural Bridge | Source: Intelligence Consolidation System
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <p className="text-[10px] text-white/20 uppercase tracking-widest">Active Models</p>
                        <div className="flex gap-2 mt-1">
                            <span className="h-2 w-2 rounded-full bg-electric-cyan shadow-[0_0_8px_#00D2FF]"></span>
                            <span className="h-2 w-2 rounded-full bg-action-gold shadow-[0_0_8px_#FFD700]"></span>
                            <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#A855F7]"></span>
                        </div>
                    </div>
                </div>
            </header>

            {/* THE LOG CONSOLE */}
            <section className="max-w-6xl mx-auto">
                <div className="bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
                    {/* TERMINAL HEADER */}
                    <div className="bg-white/5 px-6 py-3 flex justify-between items-center border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <Terminal size={14} className="text-electric-cyan" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Live Command Stream</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-mono text-white/30 tracking-tighter">0.1% TOLERANCE: ENFORCED</span>
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        </div>
                    </div>

                    {/* LOG ENTRIES */}
                    <div className="p-0 font-mono text-xs">
                        {logs.map((log) => (
                            <div key={log.id} className="grid grid-cols-12 border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors group">
                                <div className="col-span-1 p-4 text-white/20 border-r border-white/[0.05] text-center">{log.timestamp}</div>
                                <div className="col-span-2 p-4 border-r border-white/[0.05] font-bold">
                                    <span className={`
                    ${log.source === 'GEMINI' ? 'text-electric-cyan' : ''}
                    ${log.source === 'CLAUDE' ? 'text-action-gold' : ''}
                    ${log.source === 'PERPLEXITY' ? 'text-purple-400' : ''}
                    ${log.source === 'SYSTEM' ? 'text-white/60' : ''}
                  `}>
                                        [{log.source}]
                                    </span>
                                </div>
                                <div className="col-span-6 p-4 text-white/80">{log.message}</div>
                                <div className="col-span-2 p-4 border-l border-white/[0.05] flex items-center gap-2">
                                    {log.status === 'SUCCESS' && <CheckCircle2 size={12} className="text-green-500" />}
                                    {log.status === 'PROCESSING' && <Activity size={12} className="text-electric-cyan animate-pulse" />}
                                    {log.status === 'VARIANCE_DETECTED' && <ShieldAlert size={12} className="text-red-500" />}
                                    <span className={`text-[10px] font-bold uppercase ${log.status === 'VARIANCE_DETECTED' ? 'text-red-500' : 'text-white/40'}`}>
                                        {log.status.replace('_', ' ')}
                                    </span>
                                </div>
                                <div className="col-span-1 p-4 text-right font-mono text-white/30 text-[10px] tabular-nums">
                                    {log.variance}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TERMINAL FOOTER */}
                    <div className="bg-deep-navy-black/40 p-4 border-t border-white/10 flex items-center gap-4">
                        <span className="text-electric-cyan font-bold text-sm"> {'>'} </span>
                        <input
                            type="text"
                            placeholder="MANUAL OVERRIDE: ENTER COMMAND..."
                            className="bg-transparent border-none outline-none text-institutional-white w-full placeholder:text-white/5 uppercase tracking-widest text-[10px]"
                        />
                    </div>
                </div>
            </section>

            {/* DOCTRINAL STATS */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
                <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Active Threads</p>
                        <p className="text-2xl font-black">128 <span className="text-xs text-electric-cyan opacity-60">Nodes</span></p>
                    </div>
                    <Cpu size={24} className="text-white/20" />
                </div>
                <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Sync Efficiency</p>
                        <p className="text-2xl font-black">99.9%</p>
                    </div>
                    <Activity size={24} className="text-white/20" />
                </div>
                <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Protocol Integrity</p>
                        <p className="text-2xl font-black text-action-gold">SECURE</p>
                    </div>
                    <ShieldAlert size={24} className="text-action-gold opacity-40" />
                </div>
            </section>
        </main>
    );
}
