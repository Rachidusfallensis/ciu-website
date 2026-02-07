import { motion } from 'framer-motion';
import { Star, CheckCircle, Award } from 'lucide-react';


export default function PresentationSection() {
    return (
        <section className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Background Decor (Matching Gallery) */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl -ml-20 -mb-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header Matching Gallery Style */}
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
                                À Propos du <br /> <span className="text-primary-600">Colloque</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Le Comité Interuniversitaire a initié ce colloque pour créer un espace de dialogue unique entre l'élite universitaire et les professionnels. Notre ambition est de transcender les barrières disciplinaires.
                            </p>
                        </div>

                        {/* Premium Cards Grid for Key Points */}
                        <div className="grid grid-cols-1 gap-5">
                            {[
                                {
                                    text: "Favoriser les échanges interdisciplinaires",
                                    desc: "Unir les savoirs pour une vision globale.",
                                    icon: Star,
                                    gradient: "from-blue-500 to-indigo-600"
                                },
                                {
                                    text: "Promouvoir l'excellence académique",
                                    desc: "Viser le plus haut niveau de rigueur.",
                                    icon: Award,
                                    gradient: "from-yellow-500 to-amber-600"
                                },
                                {
                                    text: "Construire des ponts théorie-pratique",
                                    desc: "Appliquer la connaissance au réel.",
                                    icon: CheckCircle,
                                    gradient: "from-green-500 to-emerald-600"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                                >
                                    <div className="flex items-start gap-5 relative z-10">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">{item.text}</h4>
                                            <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
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
                        {/* Image Frame - Cleaner Style */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/colloque-optimized/gallery/ceremonie-cloture/15_gallery.jpg"
                                alt="Cérémonie de Clôture"
                                className="w-full h-full object-cover min-h-[500px]"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Floating Stats Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-50 hidden md:flex items-center gap-4 z-20 animate-float">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                                <Award className="w-7 h-7 text-green-600" />
                            </div>
                            <div>
                                <div className="text-3xl font-black text-slate-900">96%</div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfaction</div>
                            </div>
                        </div>
                        {/* Decorative Blur behind image */}
                        <div className="absolute -inset-4 bg-primary-600/20 blur-3xl -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
