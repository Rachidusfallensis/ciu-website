import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Download } from 'lucide-react';
import { useState, useEffect } from 'react';


export default function HeroSection({ colloqueSubtitles }) {
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSubtitleIndex((prev) => (prev + 1) % colloqueSubtitles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [colloqueSubtitles]);

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/colloque-optimized/gallery/ceremonie-ouverture/21_gallery.jpg"
                    alt="Cérémonie d'ouverture"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-32 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
                        Colloque <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 block sm:inline">Interuniversitaire</span>
                    </h1>

                    <div className="h-24 md:h-20 mb-8 relative flex items-center justify-center overflow-hidden max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSubtitleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute px-4 w-full"
                            >
                                <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                                    {colloqueSubtitles[currentSubtitleIndex]}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
                        {[
                            { icon: Calendar, text: "21-23 Février 2025" },
                            { icon: MapPin, text: "UIDT Thiès" },
                            { icon: Users, text: "120+ Participants" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                                <item.icon className="w-5 h-5 text-yellow-400" />
                                <span className="font-medium text-sm md:text-base">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center justify-center shadow-xl shadow-yellow-400/20 hover:scale-105">
                            <Download className="mr-2 h-5 w-5" />
                            Actes du Colloque
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
