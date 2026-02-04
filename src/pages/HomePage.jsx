import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Calendar, Star, Globe, Heart, MapPin, GraduationCap } from 'lucide-react';
import { cn } from '../utils/cn';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import { getOrganizationData, getWebPageData } from '../utils/structuredData';

// Section Components
import PartnersLogos from '../components/sections/home/PartnersLogos';
import FeaturedNews from '../components/sections/home/FeaturedNews';

import NewStudentsCTA from '../components/sections/home/NewStudentsCTA';

import UniversityShowcase from '../components/sections/home/UniversityShowcase';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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
      damping: 10
    }
  }
};

export default function HomePage() {
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  /* Animation Logic for Mission Text */
  const missionMessages = [
    <span key="1">Unir les <span className="text-yellow-400 font-bold">moustarchides étudiants</span> de toutes les universités du Sénégal.</span>,
    <span key="2">Promouvoir un équilibre harmonieux entre <span className="text-yellow-400 font-bold">Excellence Académique</span> et <span className="text-yellow-400 font-bold">Tarbiya Implicatif</span>.</span>
  ];
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMissionIndex((prev) => (prev + 1) % missionMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    "/hero-slide-1.jpg",
    "/hero-slide-2.jpg",
    "/hero-slide-3.jpg",
    "/hero-slide-4.jpg"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload images
    heroImages.forEach((image) => {
      new Image().src = image;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const prefersReducedMotion = useReducedMotion();

  // Structured data for the homepage
  const organizationData = getOrganizationData();
  const webpageData = getWebPageData(
    'Comité Inter-Universitaire',
    "Unir les moustarchides étudiants de toutes les universités du Sénégal pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif.",
    window.location.href
  );

  return (
    <main className="pt-20">
      <SEO
        title="CIU"
        description="Unir les moustarchides étudiants de toutes les universités du Sénégal pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif."
        image="/hero-slide-1.jpg"
        canonicalUrl="/"
        keywords={['comité', 'inter-universitaire', 'ciu', 'université', 'sénégal', 'étudiants', 'moustarchidines']}
        structuredData={[organizationData, webpageData]}
      />
      {/* Hero Section */}
      <section
        className="relative min-h-[90dvh] flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="Rencontre du Comité Inter-Universitaire"
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-32">
          <motion.div
            className="text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="flex flex-col items-center justify-center mb-8 relative z-20 perspective-1000">
              {/* Comité Block */}
              <motion.div
                className="relative z-20 transform origin-bottom-center"
                initial={{ y: -80, opacity: 0, rotate: -15, scale: 0.8 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  rotate: -3,
                  scale: [1, 1.02, 1] // Breathing/Pulse effect
                }}
                transition={{
                  y: { type: "spring", stiffness: 200, damping: 15 },
                  rotate: { type: "spring", stiffness: 200, damping: 15 },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-600 px-8 py-3 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.25)] border-4 border-white transform transition-transform duration-300">
                  <span className="block text-white font-black tracking-tighter text-5xl sm:text-6xl md:text-8xl drop-shadow-md">
                    Comité
                  </span>
                </div>
              </motion.div>

              {/* Inter-Universitaire Block */}
              <motion.div
                className="relative z-10 transform origin-top-center -mt-4 sm:-mt-6 lg:-mt-8"
                initial={{ y: 80, opacity: 0, rotate: 15, scale: 0.8 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  rotate: 2,
                  scale: [1, 1.02, 1] // Breathing/Pulse effect
                }}
                transition={{
                  y: { type: "spring", stiffness: 200, damping: 15, delay: 0.1 },
                  rotate: { type: "spring", stiffness: 200, damping: 15, delay: 0.1 },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1.5 // Alternating phase (starts halfway through the other's cycle)
                  }
                }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 30, transition: { duration: 0.2 } }}
              >
                <div className="bg-yellow-400 px-8 py-3 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.25)] border-4 border-white transform transition-transform duration-300">
                  <span className="block text-white font-black tracking-tighter text-4xl sm:text-5xl md:text-7xl drop-shadow-md">
                    Inter-Universitaire
                  </span>
                </div>
              </motion.div>
            </motion.h1>

            {/* Mission Statement - Animated Carousel */}
            <div className="h-32 sm:h-28 md:h-24 mb-8 relative flex items-center justify-center overflow-hidden max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMissionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute px-4 w-full"
                >
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 font-light leading-relaxed">
                    {missionMessages[currentMissionIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/about"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-700 font-bold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl min-h-[44px] text-sm sm:text-base overflow-hidden"
                  aria-label="En savoir plus sur le CIU"
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />

                  <span className="relative z-10">Découvrir le CIU</span>
                  <motion.div
                    className="ml-1 sm:ml-2 relative z-10"
                    animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: prefersReducedMotion ? 0 : Infinity }}
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/nouveaux-bacheliers"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white hover:text-primary-700 transition-all duration-300 backdrop-blur-md min-h-[44px] text-sm sm:text-base overflow-hidden"
                  aria-label="Nous rejoindre"
                >
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 relative z-10" aria-hidden="true" />
                  <span className="relative z-10">Nouveaux Bacheliers</span>

                  {/* Gradient hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Stats - Premium Restoration */}
            <motion.div
              variants={itemVariants}
              className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 max-w-lg mx-auto"
            >
              {/* Stat 1 */}
              <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105 duration-300">
                <div className="bg-yellow-400/90 p-2 rounded-lg mb-2 text-primary-900 shadow-lg shadow-yellow-400/20">
                  <GraduationCap size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-amber-200 drop-shadow-sm">
                  9+
                </span>
                <span className="text-xs sm:text-sm text-slate-100 font-medium tracking-wide">Conseils Universitaires</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105 duration-300">
                <div className="bg-primary-500/90 p-2 rounded-lg mb-2 text-white shadow-lg shadow-primary-500/20">
                  <Users size={20} />
                </div>
                <span className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-cyan-200 drop-shadow-sm">
                  1500+
                </span>
                <span className="text-xs sm:text-sm text-slate-100 font-medium tracking-wide">Membres</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Decorative wave */}

      </section>



      {/* Mission Overview -> Renamed to Piliers */}
      <section
        ref={missionRef}
        className="section-padding bg-slate-50 pb-20"
        aria-labelledby="mission-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center space-x-2 text-primary-600 font-bold mb-4">
              <div className="w-8 h-1 bg-primary-600 rounded-full" />
              <span>NOTRE VISION</span>
            </div>
            <h2 id="mission-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Piliers d'<span className="text-primary-600">Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nous reposons sur trois piliers fondamentaux pour mieux accompagner nos confrères étudiants.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Users,
                title: "Communauté Unie",
                description: "Rassembler tous les moustarchides étudiants des universités publiques et privées du Sénégal.",
                link: "/about",
                iconColor: "text-blue-500",
                bgClass: "bg-blue-50"
              },
              {
                icon: BookOpen,
                title: "Excellence Académique",
                description: "Promouvoir l'excellence dans les études par un accompagnement rigoureux.",
                link: "/universities",
                iconColor: "text-yellow-500",
                bgClass: "bg-yellow-50"
              },
              {
                icon: Heart,
                title: "Tarbiya Implicatif",
                description: "Organiser des événements qui contribuent au développement personnel et spirituel.",
                link: "/news",
                iconColor: "text-primary-600",
                bgClass: "bg-primary-50"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", card.bgClass)}>
                  <card.icon className={cn("w-7 h-7", card.iconColor)} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {card.description}
                </p>

                <Link
                  to={card.link}
                  className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-amber-500 transition-colors group-hover:translate-x-1"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* University Showcase (New) */}
      <UniversityShowcase />

      {/* QUICK ACCESS: Featured News */}
      <FeaturedNews />



      {/* CONVERSION: New Students CTA */}
      <NewStudentsCTA />

    </main>
  );
}
