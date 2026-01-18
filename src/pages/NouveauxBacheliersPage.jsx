import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MapPin, Users, GraduationCap } from 'lucide-react';
import { universityAffiches, welcomeMessages, generalInfo } from '../utils/universityAffiches';
import ScrollToTop from '../components/ScrollToTop';

export default function NouveauxBacheliersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % universityAffiches.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50; // Minimum distance for a swipe

    if (isSwipe) {
      if (distance > 0) {
        // Swipe left - go to next slide
        nextSlide();
      } else {
        // Swipe right - go to previous slide
        prevSlide();
      }
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

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
    <main className="pt-20 bg-slate-50 min-h-screen">
      <section
        className="relative min-h-[100dvh] flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="colloque-optimized/hero/ceremonie-cloture/6_hero.jpg"
            alt="Background nouveaux bacheliers"
            className="w-full h-full object-cover"
            initial={prefersReducedMotion ? { scale: 1 } : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 10, ease: "easeOut" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-32 md:pt-20">
          <motion.div
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


              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block mb-2">Bienvenue aux</span>
                <motion.span
                  className="inline-block relative px-4 py-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                >
                  <motion.span
                    className="absolute inset-0 bg-blue-600/80 -skew-x-6 rounded-lg backdrop-blur-sm"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  />
                  <span className="relative z-10 text-white drop-shadow-sm">
                    Nouveaux Bacheliers
                  </span>
                </motion.span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
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
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300"
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
                <div className="text-4xl font-bold text-yellow-400 mb-2">8</div>
                <div className="text-slate-300">Conseils Universitaires</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1500+</div>
                <div className="text-slate-300">Étudiants Membres</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Guide d'Orientation Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
             Guide d'<span className="text-primary-600"> Orientation </span> 
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Choisissez votre Université</h3>
              <p className="text-slate-600 leading-relaxed">
                Parcourez le carousel ci-dessous pour trouver votre université et découvrir l'affiche d'orientation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contactez le Conseil</h3>
              <p className="text-slate-600 leading-relaxed">
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
              <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Rejoignez la Communauté</h3>
              <p className="text-slate-600 leading-relaxed">
                Participez aux activités et événements organisés par le conseil moustarchidine de votre université.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Carousel Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-primary-600">Choisissez Votre</span> Université
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez les contacts de votre université et rejoignez la communauté estudiantine moustarchidine.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div
            className="relative bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[600px] border-4 border-white/20"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-roledescription="carousel"
            aria-label="Universités partenaires"
          >
            <div className="relative h-[600px] md:h-[700px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  {/* Background Image with Ken Burns Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={universityAffiches[currentSlide].heroImage}
                      alt=""
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.className = `absolute inset-0 bg-gradient-to-br ${universityAffiches[currentSlide].color}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  </div>

                  {/* University Logo Badge (Top Right) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 right-6 md:top-10 md:right-10 w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl p-4 shadow-xl flex items-center justify-center z-20"
                  >
                    <img
                      src={universityAffiches[currentSlide].image}
                      alt={universityAffiches[currentSlide].shortName}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${universityAffiches[currentSlide].shortName}&background=ffffff&color=000000&size=48`;
                      }}
                    />
                  </motion.div>

                  {/* Glassmorphism Content Card */}
                  <div className="absolute inset-0 flex items-end md:items-center justify-start p-6 md:p-12 lg:p-16">
                    <motion.div
                      className="relative w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {/* Decorative gradient blob inside card */}
                      <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${universityAffiches[currentSlide].color} rounded-full blur-[80px] opacity-40`} />

                      <div className="relative z-10 text-white">
                        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
                          <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                            {universityAffiches[currentSlide].name}
                          </h3>
                          <span className="hidden md:block text-2xl font-bold text-white/50 mb-1">
                            ({universityAffiches[currentSlide].shortName})
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <MapPin className="w-6 h-6 text-yellow-300" />
                          </div>
                          <span className="text-xl md:text-2xl font-medium">{universityAffiches[currentSlide].location}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div className="space-y-4">
                            <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-white/70">
                              <Phone className="w-4 h-4 mr-2" />
                              Contacts Conseil
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {universityAffiches[currentSlide].contacts.map((contact, index) => (
                                <motion.a
                                  key={index}
                                  href={`tel:${contact}`}
                                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm md:text-base font-bold transition-colors"
                                >
                                  {contact}
                                </motion.a>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-white/70">
                              <Users className="w-4 h-4 mr-2" />
                              Information
                            </h4>
                            <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                              {universityAffiches[currentSlide].note}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls (Outside the content for easier click) */}
              <div className="absolute bottom-8 right-8 flex gap-4 z-30">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 group"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 group"
                  aria-label="Suivant"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Custom Pagination Line */}
              <div className="absolute top-0 left-0 right-0 p-8 z-30 flex justify-center gap-2">
                {universityAffiches.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 rounded-full bg-white/20 overflow-hidden transition-all duration-500"
                    style={{ width: index === currentSlide ? '40px' : '10px' }}
                  >
                    {index === currentSlide && (
                      <motion.div
                        className="h-full bg-white"
                        layoutId="activeSlide"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center"><span className="text-primary-600">Questions</span> Fréquentes</h3>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-2">Qui peut rejoindre le CIU ?</h4>
                <p className="text-slate-600">Tous les étudiants moustarchidines des universités partenaires peuvent rejoindre le Comité Inter-Universitaire.</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-2">Comment participer aux événements ?</h4>
                <p className="text-slate-600">Une fois inscrit dans votre conseil universitaire, vous recevrez toutes les informations sur les événements à venir.</p>
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
