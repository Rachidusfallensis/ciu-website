import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Calendar, Star, Globe, Heart, MapPin, GraduationCap } from 'lucide-react';
import { cn } from '../utils/cn';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import { getOrganizationData, getWebPageData } from '../utils/structuredData';

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
  const servicesRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  
  // Structured data for the homepage
  const organizationData = getOrganizationData();
  const webpageData = getWebPageData(
    'Comité Inter-Universitaire',
    "Unir les étudiants moustarchidines de toutes les universités du Sénégal pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif.",
    window.location.href
  );

  return (
    <main className="pt-20">
      <SEO
        title="Comité Inter-Universitaire | CIU"
        description="Unir les étudiants moustarchidines de toutes les universités du Sénégal pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif."
        image="/background.jpg"
        canonicalUrl="/"
        keywords={['comité', 'inter-universitaire', 'ciu', 'université', 'sénégal', 'étudiants', 'moustarchidines']}
        structuredData={[organizationData, webpageData]}
      />
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src="/background.jpg"
            alt="Rencontre du Comité Inter-Universitaire à Saint-Louis - 11 février 2023"
            className="w-full h-full object-cover"
            initial={prefersReducedMotion ? { scale: 1 } : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 10, ease: "easeOut" }}
            loading="lazy"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-accent-900/80"></div>
          {/* Additional dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Animated Background Elements (subtle) */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-secondary-400/10 rounded-full blur-3xl"
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 8,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"
            animate={prefersReducedMotion ? {} : {
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 10,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <motion.div 
            className="text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 sm:mb-6"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-xs sm:text-sm mb-4"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-secondary-300 rounded-full flex-shrink-0"
                />
                <span className="text-center leading-tight">Dahiratoul Moustarchidina Wal Moustarchidaty</span>
              </motion.div>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <motion.span 
                className="block"
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                animate={prefersReducedMotion ? {} : { 
                  opacity: [0, 1, 0.8, 1],
                  x: [-30, 0, 0, 0]
                }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 4,
                  times: [0, 0.3, 0.65, 1],
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              >
                Comité
              </motion.span>
              <span className="block bg-gradient-to-r from-secondary-300 to-secondary-100 bg-clip-text text-transparent">
                {"Inter-Universitaire".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={prefersReducedMotion ? {} : {
                      opacity: index < 17 ? [0, 1, 0.9, 1] : [0, 1, 0.9, 1],
                      y: [20, 0, 0, 0]
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 6,
                      times: [0, 0.1 + index * 0.02, 0.6, 1],
                      delay: prefersReducedMotion ? 0 : 1.2 + index * 0.05,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      repeatDelay: 2,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                    style={{ 
                      display: letter === " " ? "inline" : "inline-block",
                      backgroundImage: "linear-gradient(to right, rgb(253 224 71), rgb(254 240 138))",
                      backgroundSize: "200% 200%",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent"
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            
         

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-primary-200 max-w-4xl mx-auto leading-relaxed text-center px-2"
            >
              Unir les étudiants moustarchidines de toutes les universités  du Sénégal 
              pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif.
            </motion.p>

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

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "8+", label: "Universités Partenaires", icon: Globe, color: "from-blue-400 to-blue-600" },
                { number: "1500+", label: "Étudiants Membres", icon: Users, color: "from-yellow-400 to-yellow-600" },
                { number: "5+", label: "Années d'Excellence", icon: Star, color: "from-orange-400 to-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative text-center p-5 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                      `bg-gradient-to-br ${stat.color}`
                    )}
                  />
                  
                  {/* Icon with Gradient */}
                  <motion.div
                    className="relative mx-auto mb-3 sm:mb-4 w-fit"
                    whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={cn(
                      "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center",
                      `bg-gradient-to-br ${stat.color} shadow-lg`
                    )}>
                      <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500",
                        `bg-gradient-to-br ${stat.color}`
                      )}
                    />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-primary-100 text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <motion.svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-16 fill-white"
            initial={prefersReducedMotion ? { opacity: 1 } : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.5 }}
          >
            <motion.path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25"
              animate={prefersReducedMotion ? {} : { d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V56.29c47.79,12.2,103.59,22.17,158,18,70.36-5.37,136.33-23.31,206.8-27.5C438.64,42.43,512.34,63.67,583,82.05c69.27,8,138.3,14.88,209.4,3.08,36.15-6,69.85-17.84,104.45-19.34C989.49,35,1113-4.29,1200,62.47V0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              ]}}
              transition={{ duration: prefersReducedMotion ? 0 : 8, repeat: prefersReducedMotion ? 0 : Infinity, ease: "easeInOut" }}
            />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </motion.svg>
        </div>
      </section>

      {/* Mission Overview */}
      <section 
        ref={missionRef}
        className="section-padding bg-gradient-to-br from-gray-50 to-primary-50/30" 
        aria-labelledby="mission-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.div
              className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-primary-100 text-primary-700 rounded-full font-medium mb-3 sm:mb-4 text-sm sm:text-base"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            >
              Notre Mission
            </motion.div>
            <h2 id="mission-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Accompagner</span> l'Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center px-2">
            Nous accompagnons les membres pour exceller tant dans leurs études universitaires que dans leur parcours spirituel.
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
                description: "Rassembler tous les étudiants moustarchidines des universités publiques et privées du Sénégal.",
                gradient: "from-blue-500 to-yellow-500",
                link: "/about",
                color: "blue"
              },
              {
                icon: BookOpen,
                title: "Excellence Académique",
                description: "Promouvoir l'excellence dans les études.",
                gradient: "from-blue-500 to-yellow-500",
                link: "/universities",
                color: "yellow"
              },
              {
                icon: Heart,
                title: "Tarbiya Implicatif",
                description: "Organiser des événements qui contribuent au développement personnel et spirituel.",
                gradient: "from-yellow-500 to-primary-600",
                link: "/news",
                color: "primary"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover"
                whileHover={prefersReducedMotion ? {} : { scale: [1, 1.02], y: [0, -8] }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    `bg-gradient-to-br ${card.gradient}`
                  )}
                />
                
                {/* Decorative Corner Element - Hidden on mobile */}
                <div className="hidden sm:block absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className={cn(
                    "absolute top-0 right-0 w-full h-full transform translate-x-8 -translate-y-8 rotate-45 opacity-10",
                    `bg-gradient-to-br ${card.gradient}`
                  )} />
                </div>
                
                <div className="relative p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col items-center mb-4 sm:mb-6">
                    <motion.div 
                      className={cn(
                        "flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-3 sm:mb-4 relative",
                        `bg-gradient-to-br ${card.gradient} shadow-lg`
                      )}
                      whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                    >
                      <card.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" aria-hidden="true" />
                      
                      {/* Glow effect - Hidden on mobile for performance */}
                      <motion.div
                        className={cn(
                          "hidden sm:block absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                          `bg-gradient-to-br ${card.gradient}`
                        )}
                      />
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 text-center px-2">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4 sm:mb-6 text-center text-sm sm:text-base px-2">
                    {card.description}
                  </p>

                  <Link
                    to={card.link}
                    className="group/link inline-flex items-center justify-center text-primary-600 hover:text-primary-700 font-medium transition-all duration-200 min-h-[44px] py-2 px-4 rounded-lg hover:bg-primary-50 w-full text-sm sm:text-base"
                  >
                    <span>En savoir plus</span>
                    <motion.div
                      className="ml-1 sm:ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Access Services */}
      <section 
        ref={servicesRef}
        className="section-padding bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Découvrez</span> Nos Services
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center px-2">
              Explorez toutes les ressources et services que nous offrons à notre communauté
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            {[
              {
                title: "Universités",
                description: "Découvrez notre réseau de 8 universités partenaires",
                icon: GraduationCap,
                link: "/universities",
                gradient: "from-primary-600 to-blue-500",
                badge: "8+"
              },
              {
                title: "Actualités",
                description: "Actualités, événements et activités du CIU",
                icon: Calendar,
                link: "/news",
                gradient: "from-blue-500 to-yellow-500",
                badge: "Nouveau"
              },
              {
                title: "Ressources",
                description: "Bibliothèque, médias et outils d'apprentissage",
                icon: BookOpen,
                link: "/resources",
                gradient: "from-yellow-500 to-primary-600",
                badge: "Bientôt"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  to={service.link}
                  className="group relative block bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover min-h-[44px] overflow-hidden border border-gray-100 hover:border-primary-200"
                >
                  {/* Background Pattern - Hidden on mobile for performance */}
                  <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent" />
                  </div>
                  
                  {/* Badge */}
                  <motion.div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold rounded-full shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  >
                    {service.badge}
                  </motion.div>
                  
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row items-start sm:gap-4 mb-4">
                      <motion.div
                        className={cn(
                          "flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex-shrink-0 relative mb-3 sm:mb-0",
                          `bg-gradient-to-br ${service.gradient} shadow-md`
                        )}
                        whileHover={prefersReducedMotion ? {} : { scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <service.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white relative z-10" />
                        
                        {/* Icon Glow - Hidden on mobile */}
                        <motion.div
                          className={cn(
                            "hidden sm:block absolute inset-0 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500",
                            `bg-gradient-to-br ${service.gradient}`
                          )}
                        />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 mb-2">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-primary-600 group-hover:text-primary-700 transition-colors duration-200 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-xs sm:text-sm font-semibold">Explorer</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
