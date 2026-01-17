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
        title="CIU"
        description="Unir les étudiants moustarchidines de toutes les universités du Sénégal pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif."
        image="/background.jpg"
        canonicalUrl="/"
        keywords={['comité', 'inter-universitaire', 'ciu', 'université', 'sénégal', 'étudiants', 'moustarchidines']}
        structuredData={[organizationData, webpageData]}
      />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/background.jpg"
            alt="Rencontre du Comité Inter-Universitaire"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <motion.div
            className="text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
            >
              <span className="block mb-2">Comité</span>
              <motion.span
                className="inline-block relative px-4 py-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              >
                <motion.span
                  className="absolute inset-0 bg-yellow-400 -skew-x-6 rounded-lg"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                />
                <span className="relative z-10 text-white drop-shadow-sm">
                  Inter-Universitaire
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10 font-light"
            >
              Unir les étudiants moustarchidines de toutes les universités du Sénégal
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
              animate={prefersReducedMotion ? {} : {
                d: [
                  "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                  "M0,0V56.29c47.79,12.2,103.59,22.17,158,18,70.36-5.37,136.33-23.31,206.8-27.5C438.64,42.43,512.34,63.67,583,82.05c69.27,8,138.3,14.88,209.4,3.08,36.15-6,69.85-17.84,104.45-19.34C989.49,35,1113-4.29,1200,62.47V0Z",
                  "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                ]
              }}
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
        className="section-padding bg-slate-50"
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
              <span>NOTRE MISSION</span>
            </div>
            <h2 id="mission-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              <span className="text-primary-600">Accompagner</span> l'Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              <span className="text-primary-600">Découvrez</span> Nos Services
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explorez toutes les ressources et services que nous offrons à notre communauté
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                badge: "8+",
                bgClass: "bg-blue-50",
                textClass: "text-blue-600"
              },
              {
                title: "Actualités",
                description: "Actualités, événements et activités du CIU",
                icon: Calendar,
                link: "/news",
                badge: "Nouveau",
                bgClass: "bg-yellow-50",
                textClass: "text-yellow-600"
              },
              {
                title: "Ressources",
                description: "Bibliothèque, médias et outils d'apprentissage",
                icon: BookOpen,
                link: "/resources",
                badge: "Bientôt",
                bgClass: "bg-primary-50",
                textClass: "text-primary-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <Link
                  to={service.link}
                  className="block bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", service.bgClass)}>
                      <service.icon className={cn("w-7 h-7", service.textClass)} />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed h-12">
                    {service.description}
                  </p>

                  <div className="flex items-center text-slate-900 font-bold text-sm group-hover:text-amber-500 transition-colors group-hover:translate-x-1">
                    Explorer
                    <ArrowRight className="w-4 h-4 ml-2" />
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
