import { motion } from 'framer-motion';
import { Star, CheckCircle, Award } from 'lucide-react';


export default function PresentationSection() {
    return (
        <section className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-primary-600 text-xs font-bold uppercase tracking-wider mb-8">
                            À Propos du Colloque
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight tracking-tight">
                            <span className="relative inline-block mr-3">
                                <span className="absolute inset-x-0 bottom-2 h-4 bg-yellow-200 -rotate-2 -z-10 opacity-60 rounded-sm"></span>
                                Un Carrefour
                            </span>
                            d'Excellence
                        </h2>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                            Le Comité Interuniversitaire a initié ce colloque pour créer un espace de dialogue unique entre l'élite universitaire et les professionnels. Notre ambition est de transcender les barrières disciplinaires.
                        </p>

                        <div className="space-y-4">
                            {[
                                { text: "Favoriser les échanges interdisciplinaires", color: "bg-blue-50 text-blue-600" },
                                { text: "Promouvoir l'excellence académique", color: "bg-yellow-50 text-yellow-600" },
                                { text: "Construire des ponts théorie-pratique", color: "bg-green-50 text-green-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-5 p-5 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-100 hover:translate-x-1 transition-all group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800 text-lg">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-yellow-400 rounded-[2.5rem] transform rotate-3 blur-2xl opacity-20" />
                        <img
                            src="/colloque-optimized/gallery/ceremonie-cloture/15_gallery.jpg"
                            alt="Cérémonie de Clôture"
                            className="relative rounded-[2.5rem] shadow-2xl w-full object-cover border-[6px] border-white h-[600px] z-10"
                        />

                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2rem] shadow-2xl max-w-xs border border-slate-50 hidden md:block z-20 animate-float">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900">96%</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase">Satisfaction</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600">Des participants recommandent cet événement.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
