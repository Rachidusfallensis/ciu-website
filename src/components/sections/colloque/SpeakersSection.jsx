import { motion } from 'framer-motion';


export default function SpeakersSection({ speakers }) {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        <span className="text-primary-600">Invités</span> & Intervenants
                    </h2>
                    <p className="text-lg text-slate-600">Des personnalités engagées pour le savoir.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {speakers.map((speaker, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group text-center"
                        >
                            <div className="relative mb-6 inline-block">
                                <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform opacity-30 blur-sm" />
                                <div className="relative w-48 h-56 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                                    <img
                                        src={speaker.photo}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight px-4">{speaker.name}</h3>
                            <p className="text-sm text-primary-600 font-bold uppercase tracking-wider">{speaker.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
