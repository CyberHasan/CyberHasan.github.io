export default function IntegrationGate() {
    return (
        <div className="min-h-screen bg-[#010409] text-white flex items-center justify-center p-6">
            <div className="text-center space-y-6 max-w-2xl">
                <h2 className="text-4xl font-black uppercase tracking-widest">Revenue Gateway</h2>
                <div className="h-1 w-24 bg-[#FFD700] mx-auto"></div>
                <p className="text-white/40 leading-relaxed uppercase tracking-widest text-xs">
                    Syncing with INSPIRON TECH Infrastructure...
                </p>
                <div className="pt-8 flex justify-center gap-4">
                    <a href="https://inspiron.tech" className="bg-[#FFD700] text-[#010409] px-8 py-3 font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                        Access Portal
                    </a>
                </div>
            </div>
        </div>
    );
}
