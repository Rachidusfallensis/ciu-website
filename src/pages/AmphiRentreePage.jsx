import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, Target, Brain, Mic, Award, Network } from 'lucide-react';
import { useState } from 'react';

export default function AmphiRentreePage() {
    return (
        <main className="pt-20 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/amphi.jpeg"
                        alt="Amphi de rentrée"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >


                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
                            <span className="block mb-2">Amphi de</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                                Rentrée
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            L'excellence au service de la Tarbiya !
                        </p>


                    </motion.div>
                </div>
            </section>

            {/* Video Section Title */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100 bg-slate-900">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/PwA1Zy8C7nY"
                            title="Bande Annonce Amphi de rentrée"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Context Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Text Content */}
                        <div className="lg:w-3/5">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-primary-600 text-xs font-bold uppercase tracking-wider mb-8">
                                    <Brain className="w-4 h-4" />
                                    Contexte & Vision
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">
                                    Répondre à l'Appel de la <span className="text-primary-600">Responsabilité</span>
                                </h2>

                                <div className="prose prose-lg text-slate-600 leading-relaxed text-justify">
                                    <p className="mb-6">
                                        Dans son discours du 23 février 2025, le Capitaine Mame Cheikh Ahmed Tidiane SY adresse une critique véridique et sans équivoque au système éducatif sénégalais et africain qu’il décrit comme « <span className="font-semibold text-slate-800">un système qui, face à trois échecs, refuse d'adapter ses approches et risque de pénaliser toute une population</span> ».
                                    </p>
                                    <p className="mb-6">
                                        Saisi d’une telle invitation au cœur de son axe d’intervention, le Comité Inter-Universitaire prend la mesure de la gravité de l’heure et de la responsabilité historique qui incombe à la jeunesse moustarchidine universitaire. Il entend ainsi traduire ces enseignements en actes concrets, afin de semer chez les générations actuelles et futures cette graine exigeante de la recherche, de la connaissance et du discernement.
                                    </p>
                                    <p>
                                        C’est dans cette optique, qu’il est projeté d’organiser un Amphi de rentrée spéciale dédiée non seulement à l’orientation académique des nouveaux bacheliers moustarchides, mais surtout à un éveil critique face aux impasses du système éducatif actuel.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Visual / Highlight */}
                        <div className="lg:w-2/5 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-primary-600 rounded-[2.5rem] transform rotate-3 blur-2xl opacity-20" />
                            <div className="relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                                <Award className="w-16 h-16 text-yellow-500 mb-6" />
                                <blockquote className="text-xl font-medium text-slate-900 italic mb-6 leading-relaxed">
                                    "Nous sommes à la croisée des chemins, où la transition des démocraties vers les technocraties doit définitivement s’installer."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                                        CIU
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Capitaine Mame Cheikh</div>
                                        <div className="text-sm text-slate-500">Ahmed Tidiane SY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Objectifs</h2>
                            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                                Inspirer, orienter et conscientiser la jeunesse estudiantine pour bâtir l'avenir.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Conscientisation", desc: "Comprendre les enjeux éducatifs et la responsabilité civique.", icon: Brain, color: "from-blue-500 to-cyan-400", bg: "bg-blue-50" },
                            { title: "Motivation", desc: "S'investir pleinement dans l'excellence académique.", icon: Target, color: "from-red-500 to-rose-400", bg: "bg-red-50" },
                            { title: "Inspiration", desc: "Découvrir des modèles de réussite inspirants.", icon: Award, color: "from-yellow-400 to-amber-500", bg: "bg-yellow-50" },
                            { title: "Orientation", desc: "Bénéficier d'un partage d'expérience concret.", icon: MapPin, color: "from-emerald-500 to-green-400", bg: "bg-emerald-50" }
                        ].map((obj, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${obj.color} flex items-center justify-center text-white shadow-lg mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                                    <obj.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{obj.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{obj.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Themes Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">Au Programme</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Thématiques Clés</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl group-hover:scale-110 transition-transform duration-500">01</div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center mb-8">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Face aux urgences de l’heure</h3>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Pluridisciplinarité et excellence, deux exigences à concilier pour répondre aux défis contemporains.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl group-hover:scale-110 transition-transform duration-500">02</div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-primary-500/20 text-primary-400 flex items-center justify-center mb-8">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Posture du Moustarchid Étudiant</h3>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Entre épanouissement spirituel et participation citoyenne : trouver l'équilibre pour un impact durable.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Networking & Guests */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-primary-600 text-xs font-bold uppercase tracking-wider mb-6">
                                <Mic className="w-4 h-4" />
                                Parole aux Invités
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                                Partage d'expérience & <span className="text-primary-600">Networking</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Cet amphi de rentrée se veut un espace de rencontre entre des universitaires accomplis, des technocrates aguerris et une jeunesse d’intellectuelles. Y seront invités de véritables modèles de réussite dont les parcours serviront de références.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                La rencontre se conclura par un temps dédié à la mise en relation pour favoriser la création de liens intellectuels, académiques et professionnels durables.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Échanges directs avec des experts",
                                    "Identification de pistes de mentorat",
                                    "Dialogue intergénérationnel constructif"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-yellow-400 rounded-3xl transform rotate-3 blur-sm opacity-20" />
                            <img
                                src="/colloque-optimized/gallery/ceremonie-ouverture/18_gallery.jpg"
                                alt="Networking étudiant"
                                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
