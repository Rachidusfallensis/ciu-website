import { motion } from 'framer-motion';


export default function SpeakersSection({ speakers }) {
    return (

        <section className="section-padding bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 -ml-32 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
    
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Invités</span> & Intervenants
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">Des personnalités engagées pour le partage du savoir.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
                    {speakers.map((speaker, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group text-center"
                        >
                            <div className="relative mb-8 inline-block">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-primary-500 rounded-[2.5rem] rotate-6 group-hover:rotate-12 group-hover:scale-105 transition-all duration-500 opacity-20 blur-md" />
                                <div className="absolute -inset-1 bg-white rounded-[2.5rem] opacity-50 blur-sm" />

                                <div className="relative w-48 h-56 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group-hover:border-primary-100 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={speaker.photo}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Decorative dot */}
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg z-20 group-hover:scale-125 transition-transform duration-300">
                                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                                </div>
                            </div>

                            <h3 className="font-bold text-slate-900 text-lg mb-2 leading-tight px-2 group-hover:text-primary-700 transition-colors">{speaker.name}</h3>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest border-t border-slate-100 pt-3 inline-block px-4">{speaker.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
