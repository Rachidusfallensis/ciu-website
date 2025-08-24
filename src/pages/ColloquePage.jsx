import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Users, GraduationCap, Award, FileText, Download, Share2, ChevronRight, Star, Target, BookOpen, Mic, Camera, Play } from 'lucide-react';
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
    switch(type) {
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
    switch(type) {
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

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="section-padding text-white relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/colloque-optimized/gallery/ceremonie-ouverture/21_gallery.jpg" 
            alt="Cérémonie d'ouverture du colloque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-blue-800/70 to-accent-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
         
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              COLLOQUE <span className="text-yellow-400">INTERUNIVERSITAIRE</span> 2025
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-blue-100 font-light leading-relaxed">
              Synergie Pluridisciplinaire, Horizons Multiples :<br />
              Comment Bâtir un Avenir Meilleur
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-lg font-semibold">21-23 février 2025</div>
                <div className="text-blue-200 text-sm">3 jours d'échanges</div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-lg font-semibold">UIDT Thiès</div>
                <div className="text-blue-200 text-sm">Auditorium</div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-lg font-semibold">121 participants</div>
                <div className="text-blue-200 text-sm">7 universités</div>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger les actes
              </motion.button>
              
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="mr-2 h-5 w-5" />
                Partager l'événement
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Presentation Section */}
      <section 
        ref={presentationRef}
        className="section-padding bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPresentationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Présentation</span> du Colloque
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
                Depuis sa création, le Dahiratoul Moustarchidina Wal Moustarchidaty s'est engagé à offrir
                un environnement favorable à l'épanouissement intellectuel de ses membres. C'est dans cette
                dynamique de promotion du savoir que le Comité Interuniversitaire a organisé le Colloque
                Interuniversitaire, une initiative dédiée à l'élite universitaire et aux intellectuels de tout
                horizon. L'objectif principal de cet événement est de réunir étudiants, experts, enseignants-
                chercheurs et professionnels de tous domaines, afin d'échanger sur des problématiques
                contemporaines et de formuler des propositions concrètes pour contribuer à la construction d'un
                avenir meilleur.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isPresentationInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contexte et Justification</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Face aux défis contemporains, une approche pluridisciplinaire s'impose comme nécessité. 
                Ce colloque réunit étudiants, experts, enseignants-chercheurs et professionnels pour 
                construire ensemble des solutions innovantes.
              </p>
              
              <div className="space-y-4">
                {[
                  "Favoriser les échanges interdisciplinaires",
                  "Promouvoir l'excellence académique",
                  "Construire des ponts entre théorie et pratique",
                  "Développer une vision commune de l'avenir"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isPresentationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ChevronRight className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Public Cible</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Étudiants", count: "83%" },
                  { label: "Professionnels", count: "17%" },
                  { label: "Universités", count: "7" },
                  { label: "Disciplines", count: "5+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-600">{stat.count}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section 
        ref={objectivesRef}
        className="section-padding bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isObjectivesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Objectifs</span> du Colloque
            </h2>
          </motion.div>

          {/* Objectif Général */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isObjectivesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-12"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Objectif Général</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Promouvoir la collaboration interdisciplinaire entre étudiants et experts pour bâtir un avenir meilleur
              </p>
            </div>
          </motion.div>

          {/* Objectifs Spécifiques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isObjectivesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Objectifs Spécifiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Favoriser les échanges",
                  description: "Entre universitaires et professionnels",
                  icon: Users
                },
                {
                  title: "Réfléchir ensemble",
                  description: "Sur des problématiques communes",
                  icon: BookOpen
                },
                {
                  title: "Élaborer des stratégies",
                  description: "Axes stratégiques pour le développement",
                  icon: Target
                },
                {
                  title: "Proposer des solutions",
                  description: "Feuilles de route thématiques",
                  icon: FileText
                }
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isObjectivesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl mb-4">
                    <objective.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{objective.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Section */}
      <section 
        ref={programRef}
        className="section-padding bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProgramInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Programme</span> Détaillé
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois journées intenses d'échanges, de réflexions et de partage
            </p>
          </motion.div>

          {/* Day Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isProgramInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {programData.map((day, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={cn(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  selectedDay === index
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {day.day}
              </motion.button>
            ))}
          </motion.div>

          {/* Program Content */}
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
              {programData[selectedDay].day}
            </h3>

            <div className="space-y-6">
              {programData[selectedDay].sessions.map((session, index) => {
                const IconComponent = getSessionIcon(session.type);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getSessionColor(session.type)} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {session.time}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{session.title}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshops Section */}
      <section 
        ref={workshopsRef}
        className="section-padding bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWorkshopsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ateliers</span> Thématiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quatre ateliers spécialisés pour approfondir les thématiques clés
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isWorkshopsInView ? "visible" : "hidden"}
          >
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {workshop.theme}
                </h3>
                
                <div className="space-y-6">
                  {workshop.ateliers.map((atelier, atelierIndex) => (
                    <motion.div
                      key={atelierIndex}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Atelier {index * 2 + atelierIndex + 1}: {atelier.title}
                      </h4>
                      <p className="text-gray-600">{atelier.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section 
        ref={speakersRef}
        className="section-padding bg-gradient-to-br from-primary-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSpeakersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Personnalités & <span className="text-yellow-400">Intervenants</span>
            </h2>

          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isSpeakersInView ? "visible" : "hidden"}
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={cn(
                  "mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-xl bg-white",
                  speaker.name === "Responsables DMWM" ? "w-32 h-24" : "w-24 h-32"
                )}>
                  {speaker.photo ? (
                    <img 
                      src={speaker.photo} 
                      alt={speaker.name}
                      className={cn(
                        "w-full h-full object-cover",
                        speaker.name === "Responsables DMWM" ? "object-center" : "object-center"
                      )}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Mic className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 leading-tight">{speaker.name}</h3>
                <p className="text-blue-200 text-sm">{speaker.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        ref={statsRef}
        className="section-padding bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Statistiques</span> de Participation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un événement qui a mobilisé toute la communauté universitaire sénégalaise
            </p>
          </motion.div>

          {/* Key Numbers */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {[
              { number: "121", label: "Total participants", icon: Users },
              { number: "96", label: "Participants", icon: GraduationCap },
              { number: "25", label: "Invités", icon: Star },
              { number: "7", label: "Universités", icon: BookOpen }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Statistics */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {/* Universities Distribution */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Universités Représentées</h3>
              <div className="space-y-4">
                {Object.entries(statistics.universites).map(([uni, percentage]) => (
                  <div key={uni} className="flex items-center justify-between">
                    <span className="text-gray-700">{uni}</span>
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-600 to-blue-600 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specialties Distribution */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Spécialités</h3>
              <div className="space-y-4">
                {Object.entries(statistics.specialites).map(([specialite, percentage]) => (
                  <div key={specialite} className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{specialite}</span>
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gender & Level */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Répartition</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Genre</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hommes</span>
                    <span className="font-semibold">{statistics.gender.hommes}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Femmes</span>
                    <span className="font-semibold">{statistics.gender.femmes}%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Niveau d'études</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Master</span>
                    <span className="font-semibold">{statistics.niveau.master}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Licence</span>
                    <span className="font-semibold">{statistics.niveau.licence}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Doctorat</span>
                    <span className="font-semibold">{statistics.niveau.doctorat}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Communications Section */}
      <section 
        ref={communicationsRef}
        className="section-padding bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCommunicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Communications</span> & Projets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recherches scientifiques et projets innovants présentés lors du colloque
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Communications Scientifiques */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isCommunicationsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Communications Scientifiques</h3>
              <div className="space-y-6">
                {communications.map((comm, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCommunicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{comm.title}</h4>
                        <p className="text-primary-600 font-medium">{comm.author}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Projets Primés */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isCommunicationsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Projets Primés</h3>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCommunicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                            {project.position}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                        <p className="text-primary-600 font-medium">{project.author}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section avec vraies images */}
      <ColloqueGallery />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
