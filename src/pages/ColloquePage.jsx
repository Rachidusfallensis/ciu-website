import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, GraduationCap, Award, FileText, Download, Share2, ChevronRight, Star, Target, BookOpen, Mic, CheckCircle, Search, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '../utils/cn';
import ColloqueGallery from '../components/ColloqueGallery';
import ScrollToTop from '../components/ScrollToTop';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const programData = [
    {
        day: "Vendredi",
        fullDate: "21 Février",
        sessions: [
            { time: "16h00-17h00", title: "Mise en place & Accueil", type: "setup" },
            { time: "17h00-18h00", title: "Discours de bienvenue", type: "speech" },
            { time: "18h00-18h30", title: "Ouverture officielle", type: "ceremony" },
            { time: "19h30-20h30", title: "Conférence inaugurale: Face aux défis de l'heure", type: "conference" },
            { time: "20h30-21h00", title: "Discours du Capitaine", type: "keynote" }
        ]
    },
    {
        day: "Samedi",
        fullDate: "22 Février",
        sessions: [
            { time: "9h00-10h30", title: "Panel 1: Gouvernance inclusive", type: "panel" },
            { time: "10h45-12h15", title: "Panel 2: Transformation numérique", type: "panel" },
            { time: "12h30-14h00", title: "Communications scientifiques", type: "presentation" },
            { time: "15h30-17h00", title: "Panel 3: Convergence formation-emploi", type: "panel" },
            { time: "17h15-18h30", title: "Concours de projets", type: "competition" }
        ]
    },
    {
        day: "Dimanche",
        fullDate: "23 Février",
        sessions: [
            { time: "9h00-12h30", title: "4 Ateliers thématiques", type: "workshop" },
            { time: "12h45-15h00", title: "Cérémonie de clôture", type: "ceremony" }
        ]
    }
];

const speakers = [
    {
        name: "Mame Cheikh Ahmed Tidiane SY",
        role: "Invité d'honneur",
        type: "keynote",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/capitaine_gallery.jpg"
    },
    {
        name: "Professeur Djiby DIAKHATÉ",
        role: "Conférencier - Sociologue",
        type: "keynote",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/djiby_diakhate_gallery.jpg"
    },
    {
        name: "M. Babacar DIOP",
        role: "Maire Thiès-Ouest",
        type: "authority",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/babacar_diop_maire_gallery.jpg"
    },
    {
        name: "Dr Mamadou DJITTÉ",
        role: "Maire Thiès-Est",
        type: "authority",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/dr_mamadou_djite_maire_gallery.jpg"
    },
    {
        name: "Responsables DMWM",
        role: "Autorités Religieuses",
        type: "authority",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/responsables_dmwm_gallery.jpg"
    }
];

const projects = [
    { author: "Coumba THIAW", title: "Production de plantes aromatiques", position: "1er Prix", color: "text-amber-500 bg-amber-50 border-amber-200" },
    { author: "Harouna DIA", title: "Conception de séchoirs solaires", position: "2ème Prix", color: "text-slate-500 bg-slate-100 border-slate-200" },
    { author: "Mamadou NDIAYE", title: "Espace maraîcher intelligent", position: "3ème Prix", color: "text-orange-700 bg-orange-50 border-orange-200" }
];

const colloqueSubtitles = [
    "Synergie Pluridisciplinaire, Horizons Multiples...",
    "Comment Bâtir un Avenir Meilleur ?"
];

export default function ColloquePage() {
    const heroRef = useRef(null);
    const presentationRef = useRef(null);
    const programRef = useRef(null);
    const speakersRef = useRef(null);
    const statsRef = useRef(null);
    const communicationsRef = useRef(null);

    const [selectedDay, setSelectedDay] = useState(0);
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSubtitleIndex((prev) => (prev + 1) % colloqueSubtitles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
    const isPresentationInView = useInView(presentationRef, { once: true, amount: 0.2 });
    const isSpeakersInView = useInView(speakersRef, { once: true, amount: 0.2 });

    const getSessionIcon = (type) => {
        switch (type) {
            case 'keynote': return Mic;
            case 'conference': return Users;
            case 'panel': return BookOpen;
            case 'workshop': return Target;
            case 'ceremony': return Award;
            case 'presentation': return FileText;
            case 'competition': return Star;
            default: return Clock;
        }
    };

    const currentProgram = programData[selectedDay];

    return (
        <main className="pt-20 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
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
                        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block px-6 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 font-semibold mb-8 backdrop-blur-md shadow-lg"
                        >
                            Première Édition • 2025
                        </motion.div>

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

            {/* Presentation - Premium Style */}
            <section ref={presentationRef} className="section-padding bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isPresentationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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
                            animate={isPresentationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-yellow-400 rounded-[2.5rem] transform rotate-3 blur-sm opacity-20" />
                            <img
                                src="/colloque-optimized/gallery/ceremonie-cloture/15_gallery.jpg"
                                alt="Cérémonie de Clôture"
                                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover border-4 border-white"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
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

            {/* Program Section - Tabbed Interface */}
            <section ref={programRef} className="section-padding bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">
                            <span className="text-primary-600">Programme</span> Détaillé
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Trois journées intenses rythmées par des conférences, ateliers et moments de partage.
                        </p>
                    </div>

                    {/* Day Selector */}
                    <div className="flex justify-center mb-12 bg-white p-2 rounded-full shadow-sm border border-slate-200 inline-flex mx-auto">
                        {programData.map((day, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedDay(idx)}
                                className={cn(
                                    "px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base relative overflow-hidden",
                                    selectedDay === idx
                                        ? "text-white shadow-md"
                                        : "text-slate-500 hover:text-slate-900"
                                )}
                            >
                                {selectedDay === idx && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-slate-900"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex flex-col items-center leading-tight">
                                    <span>{day.day}</span>
                                    <span className={cn("text-xs font-normal opacity-80", selectedDay === idx ? "text-slate-200" : "text-slate-400")}>{day.fullDate}</span>
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Timeline Content */}
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

                        <motion.div
                            key={selectedDay}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {currentProgram.sessions.map((session, idx) => {
                                const Icon = getSessionIcon(session.type);
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative pl-0 md:pl-20 group"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-[30px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-primary-600 shadow-md z-10 hidden md:block group-hover:scale-125 transition-transform" />

                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-100 transition-all flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left">
                                            <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-2">
                                                    {session.time}
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                                                    {session.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Speakers - Premium Cards */}
            <section ref={speakersRef} className="section-padding bg-white">
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

            {/* Stats Section - Dark Premium */}
            <section ref={statsRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
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

            {/* Projects & Communications */}
            <section ref={communicationsRef} className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="w-8 h-8 text-yellow-500" />
                                <h3 className="text-3xl font-bold text-slate-900">Projets Primés</h3>
                            </div>
                            <div className="space-y-4">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-center gap-4">
                                        <div className={cn("px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap border", proj.color)}>
                                            {proj.position}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary-600 transition-colors">{proj.title}</h4>
                                            <p className="text-sm text-slate-500 mt-1 font-medium">{proj.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <FileText className="w-8 h-8 text-primary-600" />
                                <h3 className="text-3xl font-bold text-slate-900">Communications</h3>
                            </div>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Découvrez les travaux de recherche présentés lors du colloque. Les résumés sont disponibles en téléchargement.
                                </p>
                                <button className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm border border-slate-200">
                                    <Search className="mr-2 h-5 w-5" />
                                    Explorer les travaux
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <ColloqueGallery />

            <ScrollToTop />
        </main>
    );
}
