import { motion, useInView } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Calendar, Star, Globe, Heart, MapPin, GraduationCap } from 'lucide-react';
import { cn } from '../utils/cn';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src="/background.jpg"
            alt="Rencontre du Comité Inter-Universitaire à Saint-Louis - 11 février 2023"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
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
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
             
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: [0, 1, 0.8, 1],
                  x: [-30, 0, 0, 0]
                }}
                transition={{ 
                  duration: 4,
                  times: [0, 0.3, 0.65, 1],
                  repeat: Infinity,
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index < 17 ? [0, 1, 0.9, 1] : [0, 1, 0.9, 1],
                      y: [20, 0, 0, 0]
                    }}
                    transition={{
                      duration: 6,
                      times: [0, 0.1 + index * 0.02, 0.6, 1],
                      delay: 1.2 + index * 0.05,
                      repeat: Infinity,
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
              className="text-lg md:text-xl mb-12 text-primary-200 max-w-4xl mx-auto leading-relaxed text-center"
            >
              Unir les étudiants moustarchidines de toutes les universités  du Sénégal 
              pour un équilibre harmonieux entre excellence académique et Tarbiya implicatif.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-2xl hover:bg-secondary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  aria-label="En savoir plus sur le CIU"
                >
                  Découvrir le CIU
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-primary-700 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Nous rejoindre"
                >
                  Nous Rejoindre
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "8+", label: "Universités Partenaires", icon: Globe },
                { number: "1500+", label: "Étudiants Membres", icon: Users },
                { number: "5+", label: "Années d'Excellence", icon: Star },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-secondary-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-primary-200">{stat.label}</div>
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25"
              animate={{ d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V56.29c47.79,12.2,103.59,22.17,158,18,70.36-5.37,136.33-23.31,206.8-27.5C438.64,42.43,512.34,63.67,583,82.05c69.27,8,138.3,14.88,209.4,3.08,36.15-6,69.85-17.84,104.45-19.34C989.49,35,1113-4.29,1200,62.47V0Z",
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              ]}}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Notre Mission
            </motion.div>
            <h2 id="mission-heading" className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Accompagner</span> l'Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            Nous accompagnons les membres pour exceller tant dans leurs études universitaires que dans leur parcours spirituel.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                link: "/about"
              },
              {
                icon: BookOpen,
                title: "Excellence Académique",
                description: "Promouvoir l'excellence dans les études.",
                gradient: "from-blue-500 to-yellow-500",
                link: "/universities"
              },
              {
                icon: Heart,
                title: "Tarbiya Implicatif",
                description: "Organiser des événements qui contribuent au développement personnel et spirituel.",
                gradient: "from-yellow-500 to-primary-600",
                link: "/news"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className={cn(
                        "flex items-center justify-center w-14 h-14 rounded-2xl mr-4 flex-shrink-0",
                        `bg-gradient-to-br ${card.gradient}`
                      )}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <card.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 text-center">
                    {card.description}
                  </p>

                  <Link
                    to={card.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
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
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Découvrez</span> Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
              Explorez toutes les ressources et services que nous offrons à notre communauté
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                gradient: "from-primary-600 to-blue-500"
              },
              {
                title: "Actualités",
                description: "Actualités, événements et activités du CIU",
                icon: Calendar,
                link: "/news",
                gradient: "from-blue-500 to-yellow-500"
              },
              {
                title: "Ressources",
                description: "Bibliothèque, médias et outils d'apprentissage",
                icon: BookOpen,
                link: "/resources",
                gradient: "from-yellow-500 to-primary-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  to={service.link}
                  className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-2xl mr-3 flex-shrink-0",
                        `bg-gradient-to-br ${service.gradient}`
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
                    {service.description}
                  </p>

                  <div className="flex items-center mt-4 text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                    <span className="text-sm font-medium">Explorer</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
