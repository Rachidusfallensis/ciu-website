import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Target, Handshake, PartyPopper, Camera, Image, Video, Users } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
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

// Article à la une (Colloque - ne pas changer)
const featuredArticle = {
  id: 1,
  title: "COLLOQUE INTER-UNIVERSITAIRE 2025",
  excerpt: "Premier colloque interuniversitaire organisé par le CIU du 21-23 février 2025 à l'UIDT Thiès.",
  content: "Le Comité Interuniversitaire (CIU) a organisé son premier colloque interuniversitaire...",
  author: "Arona Fall",
  date: new Date(2025, 1, 21),
  category: "Colloque",
  image: "/api/placeholder/600/300",
  featured: true,
  gradient: "from-primary-500 to-blue-600",
  link: "/colloque"
};

export default function NewsPage() {
  const newsRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);
  
  const isNewsInView = useInView(newsRef, { once: true, amount: 0.2 });
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.2 });
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.2 });

  return (
    <main className="pt-20">
      {/* News Section */}
      <section className="section-padding bg-gradient-to-br from-accent-50/30 via-white to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            ref={newsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isNewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Actualités & Événements CIU
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Dernières Nouvelles</span> & Activités
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez les dernières actualités, événements et activités du Comité Inter-Universitaire 
              et de nos conseils partenaires à travers le Sénégal.
            </p>
          </motion.div>

          {/* Featured Article (Colloque) */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isNewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src="/colloque-optimized/banniere_colloque.jpg" 
                      alt="Bannière Colloque Interuniversitaire 2025"
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${featuredArticle.gradient} opacity-20`} />
                  </div>
              
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(featuredArticle.date, 'd MMMM yyyy', { locale: fr })}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">Par {featuredArticle.author}</span>
                      </div>

                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          to={featuredArticle.link || "#"}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                        >
                          {featuredArticle.link ? "Voir le colloque" : "Lire l'article"}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Section En Développement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isNewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Section en <span className="gradient-text">Développement</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Nous travaillons actuellement sur la mise à jour de cette section avec les dernières actualités 
                et activités du Comité Inter-Universitaire. Revenez bientôt pour découvrir du contenu enrichi !
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Activités d'Envergure</h3>
                  <p className="text-sm text-gray-600">Colloques, conférences et formations</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Réunions de Travail</h3>
                  <p className="text-sm text-gray-600">Coordination inter-universitaire</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent-100 rounded-full flex items-center justify-center">
                    <PartyPopper className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Initiatives des Conseils</h3>
                  <p className="text-sm text-gray-600">Journées d'intégration et activités</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8"
              >
                <p className="text-sm text-gray-500">
                  📧 Pour toute information, contactez-nous à <strong>comiteinteru@gmail.com</strong>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events & Activities Section - En Développement */}
      <section className="section-padding bg-gradient-to-br from-secondary-50/30 via-white to-accent-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Événements à Venir - En Développement */}
          <motion.div
            ref={eventsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-12 text-center border border-secondary-200">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Calendar className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">Événements</span> à Venir
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Notre calendrier d'événements est en cours de mise à jour. Nous préparons un programme riche 
                en conférences, formations et activités spirituelles pour enrichir votre parcours universitaire.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Conférences & Séminaires</h3>
                  <p className="text-sm text-gray-600">Événements académiques et spirituels</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Activités Communautaires</h3>
                  <p className="text-sm text-gray-600">Rassemblements et événements sociaux</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8"
              >
                <p className="text-sm text-gray-500">
                  📅 Restez connectés pour les prochaines annonces d'événements
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Galerie d'Activités - En Développement */}
          <motion.div 
            ref={galleryRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-12 text-center border border-accent-200">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Camera className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">Galerie</span> d'Activités
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Notre galerie photo et vidéo est en cours de constitution. Nous rassemblons les meilleurs 
                moments de nos événements pour vous permettre de revivre ces instants mémorables.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent-100 rounded-full flex items-center justify-center">
                    <Image className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Photos d'Événements</h3>
                  <p className="text-sm text-gray-600">Albums photo de nos activités</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vidéos & Témoignages</h3>
                  <p className="text-sm text-gray-600">Moments forts en vidéo</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8"
              >
                <p className="text-sm text-gray-500">
                  📸 Bientôt disponible : revivez nos meilleurs moments !
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}