import { motion } from 'framer-motion';
import { Star, CheckCircle, Award } from 'lucide-react';


export default function PresentationSection() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wider mb-6">
                            <Star className="w-3 h-3" />
                            À Propos
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            <span className="text-primary-600">Un Carrefour</span> d'Excellence
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Le Comité Interuniversitaire a initié ce colloque pour créer un espace de dialogue unique entre l'élite universitaire et les professionnels. Notre ambition est de transcender les barrières disciplinaires.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Favoriser les échanges interdisciplinaires",
                                "Promouvoir l'excellence académique",
                                "Construire des ponts théorie-pratique"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <span className="font-semibold text-slate-800">{item}</span>
                                </div>
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-yellow-400 rounded-[2.5rem] transform rotate-3 blur-sm opacity-20" />
                        <img
                            src="/colloque-optimized/gallery/ceremonie-cloture/15_gallery.jpg"
                            alt="Cérémonie de Clôture"
                            className="relative rounded-[2.5rem] shadow-2xl w-full object-cover border-4 border-white h-[500px]"
                        />

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-slate-100 hidden md:block z-10">
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
