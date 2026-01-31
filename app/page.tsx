import { ShieldCheck, Zap, Database, Terminal, ExternalLink, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-tactical selection:text-navy">

      {/* 1. HERO SECTOR */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 border-b border-white/10 overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 text-tactical mb-6">
            <span className="h-2 w-2 bg-tactical rounded-full animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em]">System Status: Operational</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
            Precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical to-white/50">Engineer.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl border-l-2 border-tactical pl-8 mb-12 transform hover:translate-x-2 transition-transform duration-300">
            Architect of Business Logic. Fusing <span className="text-white font-bold">IT Infrastructure</span>, <span className="text-white font-bold">Accounting</span>, and <span className="text-white font-bold">Full-Stack Development</span> to eliminate operational inefficiency.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <Link
              href="https://wa.me/8801719300849"
              className="group bg-tactical text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center gap-3"
            >
              <Zap size={18} className="fill-current" />
              Initialize Protocol
            </Link>
            <Link
              href="#projects"
              className="group border border-white/20 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-tactical hover:text-tactical transition-colors flex items-center justify-center gap-3 text-gray-400"
            >
              View Mission Log
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Axis Animation Mockup */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full opacity-20 animate-[spin_60s_linear_infinite] hidden lg:block pointer-events-none">
          <div className="absolute inset-4 border border-tactical/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-white/10 rounded-full" />
        </div>
      </section>

      {/* 2. CAPABILITIES MATRIX */}
      <section className="py-32 px-6 md:px-20 bg-black/20" id="capabilities">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-black uppercase tracking-widest text-white">4-Domain Mastery</h2>
            <span className="font-mono text-tactical text-xs">0.05%_GLOBAL_RANK</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Domain 1: IT */}
            <div className="p-8 border border-white/10 bg-white/5 hover:border-tactical/50 transition-colors group">
              <Database size={32} className="text-gray-500 mb-6 group-hover:text-tactical transition-colors" />
              <h3 className="text-lg font-bold text-white uppercase mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-tactical" /> VMware Virtualization</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-tactical" /> Cloud Security</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-tactical" /> Disaster Recovery</li>
              </ul>
            </div>

            {/* Domain 2: Accounting */}
            <div className="p-8 border border-white/10 bg-white/5 hover:border-gold/50 transition-colors group">
              <ShieldCheck size={32} className="text-gray-500 mb-6 group-hover:text-gold transition-colors" />
              <h3 className="text-lg font-bold text-white uppercase mb-4">Accounting Logic</h3>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-gold" /> Manager.io Expert</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-gold" /> NBR/VAT Compliance</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-gold" /> Audit-Ready Systems</li>
              </ul>
            </div>

            {/* Domain 3: Dev */}
            <div className="p-8 border border-white/10 bg-white/5 hover:border-tactical/50 transition-colors group">
              <Terminal size={32} className="text-gray-500 mb-6 group-hover:text-tactical transition-colors" />
              <h3 className="text-lg font-bold text-white uppercase mb-4">Development</h3>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-tactical" /> Next.js 14 / React</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-tactical" /> Tailwind Systems</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-tactical" /> Automated Workflows</li>
              </ul>
            </div>

            {/* Domain 4: Strategy */}
            <div className="p-8 border border-white/10 bg-white/5 hover:border-white/50 transition-colors group">
              <Zap size={32} className="text-gray-500 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold text-white uppercase mb-4">Strategy</h3>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-white" /> Business Automation</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-white" /> Digital Transformation</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="mt-1 text-white" /> Scalability Arch.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION LOG */}
      <section className="py-32 px-6 md:px-20" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-black uppercase tracking-widest text-gray-500">Mission Log</h2>
            <span className="font-mono text-gray-500 text-xs text-right">DEPLOYED_OPERATIONS</span>
          </div>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="group relative border border-white/5 bg-white/[0.02] p-8 md:p-12 hover:bg-white/[0.05] transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-xs text-tactical">ACTIVE</div>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">INSPIRON TECH V2</h3>
                  <p className="text-gray-400 max-w-xl">
                    Complete re-engineering of the institutional brand platform. Implementing 0.1% error tolerance logic into the customer acquisition flow.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-2 py-1 bg-tactical/10 text-tactical text-[10px] font-bold uppercase tracking-wider">Next.js</span>
                    <span className="px-2 py-1 bg-tactical/10 text-tactical text-[10px] font-bold uppercase tracking-wider">Manager.io API</span>
                  </div>
                </div>
                <Link href="https://inspiron.tech" className="shrink-0 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-tactical transition-colors">
                  View Deployment <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative border border-white/5 bg-white/[0.02] p-8 md:p-12 hover:bg-white/[0.05] transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-xs text-gold">COMPLETED</div>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">STEP GROUP AUDIT</h3>
                  <p className="text-gray-400 max-w-xl">
                    Consolidated multi-entity financial reporting system. Reduced financial close time from 15 days to 4 hours.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-2 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider">Forensic Audit</span>
                    <span className="px-2 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider">System Arch</span>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-gray-500">INTERNAL_ONLY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMM LINK */}
      <section className="py-32 px-6 md:px-20 text-center border-t border-white/10" id="contact">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-8 tracking-tighter">Ready to Execute?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Deployment of precision logic requires direct communication. Initialize the protocol below.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="mailto:hasan.cybersage@gmail.com"
            className="bg-white text-navy px-10 py-5 font-bold uppercase tracking-widest hover:bg-tactical hover:text-navy transition-colors flex items-center justify-center gap-3"
          >
            <Mail size={18} />
            Send Directive
          </Link>
          <Link
            href="https://github.com/CyberHasan"
            className="border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest hover:border-white hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-3"
          >
            <Terminal size={18} />
            GitHub Profile
          </Link>
        </div>

        <footer className="mt-32 text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">
          © 2026 MD ABU HASAN | OP-NEURAL-BRIDGE | SYSTEM_ACTIVE
        </footer>
      </section>
    </main>
  );
}
