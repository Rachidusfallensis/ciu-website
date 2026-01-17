import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Users, GraduationCap, Award, FileText, Download, Share2, ChevronRight, Star, Target, BookOpen, Mic, Camera, Play, ArrowRight, CheckCircle } from 'lucide-react';
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
            delayChildren: 0.3,
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const programData = [
    {
        day: "Vendredi 21 février",
        date: "2025-02-21",
        sessions: [
            { time: "16h00-17h00", title: "Mise en place", type: "setup" },
            { time: "17h00-18h00", title: "Discours de bienvenue", type: "speech" },
            { time: "18h00-18h30", title: "Ouverture officielle", type: "ceremony" },
            { time: "18h30-19h00", title: "Prestation artistique", type: "cultural" },
            { time: "19h30-20h30", title: "Conférence inaugurale: Face aux défis de l'heure : la pluridisciplinarité, viatique d'une jeunesse éveillée", type: "conference" },
            { time: "20h30-21h00", title: "Discours du Capitaine", type: "keynote" }
        ]
    },
    {
        day: "Samedi 22 février",
        date: "2025-02-22",
        sessions: [
            { time: "9h00-10h30", title: "Panel 1: Gouvernance inclusive et développement durable", type: "panel" },
            { time: "10h45-12h15", title: "Panel 2: L'ère de la transformation numérique", type: "panel" },
            { time: "12h30-14h00", title: "Communications scientifiques", type: "presentation" },
            { time: "15h30-17h00", title: "Panel 3: Convergence formation-emploi", type: "panel" },
            { time: "17h15-18h30", title: "Concours de projets", type: "competition" },
            { time: "18h30-19h30", title: "Visite de stands", type: "exhibition" }
        ]
    },
    {
        day: "Dimanche 23 février",
        date: "2025-02-23",
        sessions: [
            { time: "9h00-12h30", title: "4 Ateliers thématiques", type: "workshop" },
            { time: "12h45-15h00", title: "Cérémonie de clôture et restitutions", type: "ceremony" }
        ]
    }
];

const workshops = [
    {
        theme: "Révolutions technologiques et métiers",
        ateliers: [
            { title: "Le monde médical à l'ère numérique", description: "Exploration des innovations technologiques dans le secteur de la santé" },
            { title: "Transformation numérique dans les sociétés commerciales", description: "Impact du digital sur les modèles d'affaires" }
        ]
    },
    {
        theme: "Valeurs humaines et développement durable",
        ateliers: [
            { title: "Quel système éducatif pour une jeunesse mûre et pure ?", description: "Réflexion sur l'éducation et les valeurs" },
            { title: "Jeunesse et responsabilité dans la promotion de la paix", description: "Rôle des jeunes dans la construction de la paix" }
        ]
    }
];

const speakers = [
    {
        name: "Mame Cheikh Ahmed Tidiane SY CAPITAINE",
        role: "Invité d'honneur",
        type: "keynote",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/capitaine_gallery.jpg"
    },
    {
        name: "Professeur Djiby DIAKHATÉ",
        role: "Conférencier inaugural - Sociologue",
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
        role: "Autorités du Dahiratoul Moustarchidina Wal Moustarchidaty",
        type: "authority",
        photo: "/colloque-optimized/gallery/ceremonie-ouverture/responsables_dmwm_gallery.jpg"
    }
];

const communications = [
    { author: "Mme Mbathio SOGUE", title: "Effet du système optimisé à Guiera senegalensis", type: "research" },
    { author: "Dr Anta Mbaye SALL", title: "Prise en charge des traumatismes balistiques", type: "medical" },
    { author: "Mr Cheikh LO", title: "L'accès à la justice comme vecteur de transformation sociale", type: "legal" },
    { author: "Mme Ndeye Arame Diop SECK", title: "Systèmes d'alertes précoces sur la surveillance des pesticides", type: "environmental" }
];

const projects = [
    { author: "Coumba THIAW", title: "Production de plantes aromatiques et transformation de la mélisse", position: "1er Prix" },
    { author: "Harouna DIA", title: "Conception de séchoirs solaires", position: "2ème Prix" },
    { author: "Mamadou NDIAYE", title: "Projet de mise en place d'un espace maraîcher", position: "3ème Prix" }
];

const statistics = {
    total: 121,
    participants: 96,
    invites: 25,
    gender: { hommes: 61, femmes: 39 },
    status: { etudiants: 83, professionnels: 17 },
    niveau: { master: 55, licence: 39, doctorat: 6 },
    universites: {
        UCAD: 28,
        UIDT: 20,
        UGB: 17,
        UADB: 16,
        Autres: 19
    },
    specialites: {
        "Sciences et Technologies": 43,
        "Sciences Sociales et Humaines": 17,
        "Sciences de la Santé": 17,
        "Sciences Économiques et Gestion": 15,
        "Sciences Juridiques": 9
    }
};

export default function ColloquePage() {
    const heroRef = useRef(null);
    const presentationRef = useRef(null);
    const objectivesRef = useRef(null);
    const programRef = useRef(null);
    const workshopsRef = useRef(null);
    const speakersRef = useRef(null);
    const statsRef = useRef(null);
    const communicationsRef = useRef(null);
    const galleryRef = useRef(null);

    const [selectedDay, setSelectedDay] = useState(0);

    const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
    const isPresentationInView = useInView(presentationRef, { once: true, amount: 0.2 });
    const isObjectivesInView = useInView(objectivesRef, { once: true, amount: 0.2 });
    const isProgramInView = useInView(programRef, { once: true, amount: 0.2 });
    const isWorkshopsInView = useInView(workshopsRef, { once: true, amount: 0.2 });
    const isSpeakersInView = useInView(speakersRef, { once: true, amount: 0.2 });
    const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
    const isCommunicationsInView = useInView(communicationsRef, { once: true, amount: 0.2 });
    const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.2 });

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

    const getSessionColor = (type) => {
        switch (type) {
            case 'keynote': return 'from-yellow-500 to-orange-500';
            case 'conference': return 'from-blue-500 to-indigo-500';
            case 'panel': return 'from-green-500 to-teal-500';
            case 'workshop': return 'from-purple-500 to-pink-500';
            case 'ceremony': return 'from-red-500 to-rose-500';
            case 'presentation': return 'from-indigo-500 to-purple-500';
            case 'competition': return 'from-yellow-500 to-red-500';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const currentProgram = programData[selectedDay];

    return (
        <main className="pt-20 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/colloque-optimized/gallery/ceremonie-ouverture/21_gallery.jpg"
                        alt="Cérémonie d'ouverture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 font-medium mb-6 backdrop-blur-sm">
                            2ème Édition
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Colloque <span className="text-yellow-400">Interuniversitaire</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            Synergie Pluridisciplinaire, Horizons Multiples :<br />
                            Comment Bâtir un Avenir Meilleur
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <button className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center justify-center">
                                <Download className="mr-2 h-5 w-5" />
                                Actes du Colloque
                            </button>
                            <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center backdrop-blur-sm">
                                <Share2 className="mr-2 h-5 w-5" />
                                Partager
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                            {[
                                { icon: Calendar, title: "21-23 Février 2025", desc: "3 jours d'échanges" },
                                { icon: MapPin, title: "UIDT Thiès", desc: "Auditorium Principal" },
                                { icon: Users, title: "121 Participants", desc: "7 Universités" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <item.icon className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.title}</div>
                                        <div className="text-sm text-slate-300">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Presentation */}
            <section ref={presentationRef} className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isPresentationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-2 text-primary-600 font-bold mb-4">
                                <div className="w-8 h-1 bg-primary-600 rounded-full" />
                                <span>À PROPOS</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Un Carrefour d'Excellence</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Le Comité Interuniversitaire a initié ce colloque pour créer un espace de dialogue unique entre l'élite universitaire et les professionnels. Notre ambition est de transcender les barrières disciplinaires pour apporter des réponses concrètes aux défis de notre société.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Favoriser les échanges interdisciplinaires",
                                    "Promouvoir l'excellence académique",
                                    "Construire des ponts théorie-pratique"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-3xl font-black text-primary-600 mb-1">96%</div>
                                    <div className="text-sm font-medium text-slate-600">Satisfaction</div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <div className="text-3xl font-black text-primary-600 mb-1">5+</div>
                                    <div className="text-sm font-medium text-slate-600">Disciplines</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isPresentationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-yellow-400 rounded-[2rem] transform rotate-3 opacity-20" />
                            <img
                                src="/colloque-optimized/gallery/ceremonie-cloture/15_gallery.jpg"
                                alt="Cérémonie de Clôture"
                                className="relative rounded-[2rem] shadow-2xl w-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program */}
            <section ref={programRef} className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Programme Détaillé</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Trois journées intenses rythmées par des conférences, ateliers et moments de partage.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12 space-x-2 md:space-x-4">
                        {programData.map((day, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedDay(idx)}
                                className={cn(
                                    "px-6 py-3 rounded-full font-bold transition-all text-sm md:text-base",
                                    selectedDay === idx
                                        ? "bg-slate-900 text-white shadow-lg scale-105"
                                        : "bg-white text-slate-600 hover:bg-slate-100"
                                )}
                            >
                                {day.day}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid gap-4 max-w-4xl mx-auto"
                    >
                        {currentProgram.sessions.map((session, idx) => {
                            const Icon = getSessionIcon(session.type);
                            return (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-600">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-2">
                                            {session.time}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900">{session.title}</h3>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Speakers */}
            <section ref={speakersRef} className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Invités & Intervenants</h2>
                        <p className="text-lg text-slate-600">Des personnalités engagées pour le savoir</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {speakers.map((speaker, idx) => (
                            <div key={idx} className="group text-center">
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute inset-0 bg-yellow-400 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform opacity-20" />
                                    <img
                                        src={speaker.photo || "/api/placeholder/150/150"}
                                        alt={speaker.name}
                                        className="relative w-40 h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform bg-slate-200"
                                    />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">{speaker.name}</h3>
                                <p className="text-sm text-primary-600 font-medium">{speaker.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section ref={statsRef} className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -ml-48 -mb-48" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { num: "121", label: "Participants" },
                            { num: "7", label: "Universités" },
                            { num: "4", label: "Ateliers" },
                            { num: "3", label: "Prix décernés" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-primary-500 mb-2">
                                    {stat.num}
                                </div>
                                <div className="text-slate-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects & Comms */}
            <section ref={communicationsRef} className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <Award className="w-6 h-6 text-yellow-500 mr-3" />
                                Projets Primés
                            </h3>
                            <div className="space-y-4">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                                        <div className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                                            {proj.position}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{proj.title}</h4>
                                            <p className="text-sm text-slate-500 mt-1">{proj.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <FileText className="w-6 h-6 text-primary-500 mr-3" />
                                Communications
                            </h3>
                            <div className="space-y-4">
                                {communications.map((comm, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                        <h4 className="font-bold text-slate-900">{comm.title}</h4>
                                        <p className="text-sm text-slate-500 mt-1 flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
                                            {comm.author}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section ref={galleryRef} className="py-0">
                <ColloqueGallery />
            </section>

            <ScrollToTop />
        </main>
    );
}
