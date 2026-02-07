import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../../../utils/assets';

export default function NewStudentsCTA() {
    return (
        <section className="section-padding relative overflow-hidden bg-slate-900 text-white">
            {/* Background with abstract shapes */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-[100px] -mr-40 -mt-40 mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-600/30 rounded-full blur-[100px] -ml-40 -mb-40 mix-blend-screen" />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >


                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                            <span className="block mb-2">Nouveau</span>
                            <motion.span
                                className="inline-block relative px-4 py-1"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            >
                                <motion.span
                                    className="absolute inset-0 bg-primary-600/80 -skew-x-6 rounded-lg backdrop-blur-sm"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                />
                                <span className="relative z-10 text-white drop-shadow-sm">
                                    Bachelier ?
                                </span>
                            </motion.span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Ne reste pas seul face aux défis de l'université.
                            Le CIU t'accompagne dès ton orientation jusqu'à ton insertion professionnelle.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Orientation et inscription administrative",
                                "Logement dans nos Daarous Mourchid",
                                "Parrainage et accompagnement",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                                    <span className="text-lg text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/nouveaux-bacheliers"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-900/50 hover:shadow-primary-600/30 hover:-translate-y-1"
                            >
                                Rejoindre le CIU via le formulaire
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Image card effect */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm aspect-square md:aspect-auto md:h-[600px]">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90 z-10" />

                            <img
                                src={getAssetPath("/amphi.jpeg")}
                                alt="Étudiants du CIU en amphi"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Stat Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 text-slate-900">
                                        <GraduationCap className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Amphi de Rentrée</h4>
                                        <p className="text-slate-300 text-sm">
                                            Rejoins plus de 1500 étudiants pour démarrer l'année sous le signe de l'excellence.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
