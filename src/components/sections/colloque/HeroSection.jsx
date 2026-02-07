import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function HeroSection({ colloqueSubtitles }) {
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSubtitleIndex((prev) => (prev + 1) % colloqueSubtitles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [colloqueSubtitles]);

    const scrollToProgram = () => {
        const programSection = document.getElementById('programme-detaille');
        if (programSection) {
            programSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/colloque-optimized/gallery/ceremonie-ouverture/21_gallery.jpg"
                    alt="Cérémonie d'ouverture"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-32 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >


                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight flex flex-col md:block items-center justify-center gap-4">
                        <span className="block md:inline">Colloque</span>{' '}
                        <span className="relative inline-block px-6 py-2">
                            <span className="absolute inset-0 bg-yellow-400 -skew-x-6 rounded-xl shadow-lg shadow-yellow-400/20 transform md:rotate-2 opacity-90" />
                            <span className="relative z-10 text-slate-900">Interuniversitaire</span>
                        </span>
                    </h1>

                    <div className="h-24 md:h-20 mb-12 relative flex items-center justify-center overflow-hidden max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSubtitleIndex}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5 }}
                                className="absolute px-4 w-full"
                            >
                                <p className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed">
                                    {colloqueSubtitles[currentSubtitleIndex]}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
                        {[
                            { icon: Calendar, text: "21-23 Février 2025", label: "Date" },
                            { icon: MapPin, text: "UIDT Thiès", label: "Lieu" },
                            { icon: Users, text: "120+ Participants", label: "Communauté" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-white/10 text-yellow-400 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg md:text-xl">{item.text}</span>
                                    <span className="text-xs text-white/60 uppercase tracking-widest">{item.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/resources')}
                            className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center justify-center shadow-lg shadow-yellow-400/20"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Actes du Colloque
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToProgram}
                            className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-md border border-white/20"
                        >
                            Découvrir le Programme
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
