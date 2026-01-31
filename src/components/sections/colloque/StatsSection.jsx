import React from 'react';

export default function StatsSection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                    {[
                        { num: "121", label: "Participants" },
                        { num: "7", label: "Universités" },
                        { num: "4", label: "Ateliers" },
                        { num: "3", label: "Prix décernés" }
                    ].map((stat, idx) => (
                        <div key={idx} className="px-4">
                            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-primary-400 mb-2">
                                {stat.num}
                            </div>
                            <div className="text-slate-400 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
