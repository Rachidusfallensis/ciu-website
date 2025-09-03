import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MapPin, Users, GraduationCap } from 'lucide-react';
import { universityAffiches, welcomeMessages, generalInfo } from '../utils/universityAffiches';
import ScrollToTop from '../components/ScrollToTop';

export default function NouveauxBacheliersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % universityAffiches.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % universityAffiches.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + universityAffiches.length) % universityAffiches.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

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
            src="/affiches-optimized/hero/background_nouveaux_bacheliers_hero.jpg"
            alt="Background nouveaux bacheliers"
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
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={{
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
              }}
              className="mb-6"
            >

              
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">{generalInfo.title}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
                {generalInfo.subtitle}
              </p>
            </motion.div>

            {/* Welcome Messages */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            >
              {welcomeMessages.map((message, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: index * 0.1
                      }
                    }
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/15 transition-colors duration-300"
                >
                  <p className="text-sm font-medium leading-relaxed">{message}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-300 mb-2">8</div>
                <div className="text-white/80">Conseils Universitaires</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-300 mb-2">1500+</div>
                <div className="text-white/80">Étudiants Membres</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez Votre <span className="gradient-text">Université</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             
              Découvrez les contacts de votre université et rejoignez la communauté estudiantine moustarchidine.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div 
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative h-96 md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="h-full relative">
                    {/* University Affiche Background */}
                    <img
                      src={universityAffiches[currentSlide].heroImage}
                      alt={`Affiche ${universityAffiches[currentSlide].shortName}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.className = `h-full bg-gradient-to-br ${universityAffiches[currentSlide].color} relative`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                    
                    {/* University Logo */}
                    <div className="absolute top-8 right-8 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <img
                        src={universityAffiches[currentSlide].image}
                        alt={universityAffiches[currentSlide].shortName}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${universityAffiches[currentSlide].shortName}&background=ffffff&color=000000&size=48`;
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full px-8 md:px-16 text-white">
                        <div className="max-w-2xl">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            <h3 className="text-3xl md:text-5xl font-bold mb-4">
                              {universityAffiches[currentSlide].name}
                            </h3>
                            
                            <div className="flex items-center mb-6">
                              <MapPin className="w-5 h-5 mr-2" />
                              <span className="text-lg">{universityAffiches[currentSlide].location}</span>
                            </div>

                            <div className="space-y-3 mb-6">
                              <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3" />
                                <span className="text-lg font-medium">Contacts :</span>
                              </div>
                              {universityAffiches[currentSlide].contacts.map((contact, index) => (
                                <motion.a
                                  key={index}
                                  href={`tel:${contact}`}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                  className="block text-xl font-mono bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-colors duration-200 w-fit"
                                >
                                  {contact}
                                </motion.a>
                              ))}
                            </div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6"
                            >
                              <div className="flex items-start">
                                <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                <p className="text-lg leading-relaxed">
                                  {universityAffiches[currentSlide].note}
                                </p>
                              </div>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-sm hover:bg-white/40 rounded-full p-3 transition-all duration-300 hover:scale-105"
              aria-label="Université précédente"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-sm hover:bg-white/40 rounded-full p-3 transition-all duration-300 hover:scale-105"
              aria-label="Université suivante"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {universityAffiches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Aller à l'université ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guide d'Orientation Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guide d'<span className="gradient-text">Orientation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Étapes essentielles pour rejoindre la communauté moustarchidine universitaire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choisissez votre Université</h3>
              <p className="text-gray-600 leading-relaxed">
                Parcourez le carousel ci-dessus pour trouver votre université et découvrir l'affiche d'orientation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contactez le Conseil</h3>
              <p className="text-gray-600 leading-relaxed">
                Appelez directement les numéros fournis pour entrer en contact avec le conseil de votre université.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rejoignez la Communauté</h3>
              <p className="text-gray-600 leading-relaxed">
                Participez aux activités et événements organisés par le conseil moustarchidine de votre université.
              </p>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gray-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions Fréquentes</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Qui peut rejoindre le CIU ?</h4>
                <p className="text-gray-600">Tous les étudiants moustarchidines des universités partenaires peuvent rejoindre le Comité Inter-Universitaire.</p>
              </div>
    
          
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Comment participer aux événements ?</h4>
                <p className="text-gray-600">Une fois inscrit dans votre conseil universitaire, vous recevrez toutes les informations sur les événements à venir.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'Aide ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {generalInfo.description}
            </p>
            <motion.a
              href={`mailto:${generalInfo.contactGeneral}`}
                              whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactez-nous
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
