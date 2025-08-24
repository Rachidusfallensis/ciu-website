import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, MapPin, Users, Image, Video, FileText, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '../utils/cn';

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

const newsArticles = [
  {
    id: 1,
    title: "COLLOQUE INTERUNIVERSITAIRE 2025",
    excerpt: "Synergie Pluridisciplinaire, Horizons Multiples : Comment Bâtir un Avenir Meilleur. Premier colloque interuniversitaire organisé par le CIU du 21-23 février 2025 à l'UIDT Thiès.",
    content: "Le Comité Interuniversitaire (CIU) a organisé son premier colloque interuniversitaire...",
    author: "Comité Interuniversitaire",
    date: new Date(2025, 1, 21),
    category: "Colloque",
    image: "/api/placeholder/600/300",
    featured: true,
    gradient: "from-primary-500 to-blue-600",
    link: "/colloque"
  },
  {
    id: 2,
    title: "Succès de la Conférence Annuelle 2024",
    excerpt: "Plus de 400 participants ont assisté à notre conférence annuelle sur le thème 'Islam et Innovation Technologique'.",
    content: "La conférence s'est tenue...",
    author: "Amadou Diallo",
    date: new Date(2024, 10, 10),
    category: "Événement",
    image: "/api/placeholder/600/300",
    featured: false,
    gradient: "from-accent-500 to-secondary-500"
  },
  {
    id: 3,
    title: "Nouvelle Section CIU à l'Université de Thiès",
    excerpt: "Inauguration officielle de notre nouvelle section à l'UIDT avec plus de 50 membres fondateurs.",
    content: "Nous sommes fiers d'annoncer...",
    author: "Fatou Sow",
    date: new Date(2024, 10, 5),
    category: "Expansion",
    image: "/api/placeholder/600/300",
    featured: false,
    gradient: "from-secondary-500 to-primary-600"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Conférence: Islam et Sciences Modernes",
    date: new Date(2024, 11, 15),
    time: "14h00 - 17h00",
    location: "Amphithéâtre UCAD",
    university: "UCAD",
    type: "conference",
    participants: 120,
    description: "Une conférence sur l'harmonie entre foi et science moderne, animée par des experts reconnus.",
    gradient: "from-primary-500 to-accent-500"
  },
  {
    id: 2,
    title: "Journée Solidarité Inter-Universitaire",
    date: new Date(2024, 11, 22),
    time: "09h00 - 18h00",
    location: "Campus UGB",
    university: "UGB",
    type: "community",
    participants: 200,
    description: "Journée d'activités caritatives et de renforcement des liens entre les universités.",
    gradient: "from-accent-500 to-secondary-500"
  },
  {
    id: 3,
    title: "Atelier Développement Personnel",
    date: new Date(2024, 11, 28),
    time: "15h00 - 18h00",
    location: "Salle polyvalente UASZ",
    university: "UASZ",
    type: "workshop",
    participants: 50,
    description: "Atelier pratique sur le développement personnel et la gestion du stress académique.",
    gradient: "from-secondary-500 to-primary-600"
  },
  {
    id: 4,
    title: "Iftar Collectif Ramadan",
    date: new Date(2025, 2, 15),
    time: "19h30 - 21h00",
    location: "Mosquée Universitaire",
    university: "Multi-campus",
    type: "spiritual",
    participants: 300,
    description: "Iftar collectif réunissant tous les membres du CIU pendant le mois sacré.",
    gradient: "from-primary-600 to-accent-600"
  }
];

const eventTypes = [
  { type: 'conference', label: 'Conférences', icon: Users, color: 'bg-primary-100 text-primary-700' },
  { type: 'workshop', label: 'Ateliers', icon: FileText, color: 'bg-accent-100 text-accent-700' },
  { type: 'community', label: 'Communautaire', icon: Users, color: 'bg-secondary-100 text-secondary-700' },
  { type: 'spiritual', label: 'Spirituel', icon: Calendar, color: 'bg-primary-100 text-primary-700' }
];

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Conférence Annuelle 2024',
    description: 'Plus de 400 participants réunis',
    thumbnail: '/api/placeholder/300/200',
    university: 'UCAD'
  },
  {
    id: 2,
    type: 'video',
    title: 'Témoignages Étudiants',
    description: 'Parcours inspirants de nos membres',
    thumbnail: '/api/placeholder/300/200',
    university: 'UGB'
  },
  {
    id: 3,
    type: 'image',
    title: 'Journée Portes Ouvertes',
    description: 'Accueil des nouveaux étudiants',
    thumbnail: '/api/placeholder/300/200',
    university: 'UASZ'
  },
  {
    id: 4,
    type: 'image',
    title: 'Atelier Calligraphie Arabe',
    description: 'Art et spiritualité réunis',
    thumbnail: '/api/placeholder/300/200',
    university: 'UADB'
  }
];

export default function NewsPage() {
  const newsRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const isNewsInView = useInView(newsRef, { once: true, amount: 0.2 });
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.2 });
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.3 });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const filteredEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeFilter);

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
              Restez informé des dernières actualités, événements et activités 
              du Comité Inter-Universitaire à travers tout le Sénégal.
            </p>
          </motion.div>

          {/* Featured Article */}
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
                    <div className={`absolute inset-0 bg-gradient-to-br ${featuredArticle.gradient} opacity-90`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2">À LA UNE</div>
                        <div className="text-lg opacity-90">Article Principal</div>
                      </div>
                    </div>
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

                      <motion.a
                        href={featuredArticle.link || "#"}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        {featuredArticle.link ? "Voir le colloque" : "Lire l'article"}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isNewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Autres Actualités</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-80`} />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-xs mb-3">
                      <Clock className="h-3 w-3 mr-1" />
                      {format(article.date, 'd MMM yyyy', { locale: fr })}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{article.author}</span>
                      </div>

                      <motion.button
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
                        whileHover={{ x: 3 }}
                      >
                        Lire plus
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events & Activities Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50/30 via-white to-accent-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Events Header */}
          <motion.div
            ref={eventsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Nos Événements & Activités
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Événements</span> à Venir
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
              Découvrez notre riche programme d'activités conçu pour enrichir votre parcours 
              académique et spirituel à travers des événements variés et engageants.
            </p>
          </motion.div>

          {/* Event Filters */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isEventsInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button
              variants={itemVariants}
              onClick={() => setActiveFilter('all')}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeFilter === 'all'
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tous les événements
            </motion.button>
            {eventTypes.map((type) => (
              <motion.button
                key={type.type}
                variants={itemVariants}
                onClick={() => setActiveFilter(type.type)}
                className={cn(
                  "flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300",
                  activeFilter === type.type
                    ? "bg-primary-600 text-white shadow-lg"
                    : `bg-white text-gray-600 hover:${type.color.replace('text-', 'bg-').replace('bg-', 'bg-').replace('-700', '-50')} hover:${type.color}`
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <type.icon className="h-4 w-4 mr-2" />
                {type.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isEventsInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-90",
                      event.gradient
                    )} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-white/80" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <div className="text-sm font-bold text-gray-900">
                          {format(event.date, 'd', { locale: fr })}
                        </div>
                        <div className="text-xs text-gray-600">
                          {format(event.date, 'MMM', { locale: fr })}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        eventTypes.find(t => t.type === event.type)?.color || 'bg-gray-100 text-gray-700'
                      )}>
                        {eventTypes.find(t => t.type === event.type)?.label}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                      {event.title}
                    </h4>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-secondary-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-secondary-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-secondary-500" />
                        {event.participants} participants attendus
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                      {event.description}
                    </p>

                    <motion.button
                      onClick={() => setSelectedEvent(event)}
                      className="w-full btn-outline text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Voir les détails
                    </motion.button>
                  </div>

                  <motion.div
                    className={cn(
                      "h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      event.gradient
                    )}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gallery Section */}
          <motion.div ref={galleryRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Galerie</span> d'Activités
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                Revivez les moments forts de nos événements passés
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isGalleryInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover"
                  whileHover={{ y: -3 }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Video className="h-12 w-12 text-primary-600" />
                    ) : (
                      <Image className="h-12 w-12 text-primary-600" />
                    )}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
                        {item.type === 'video' ? (
                          <Video className="h-4 w-4 text-primary-600" />
                        ) : (
                          <Image className="h-4 w-4 text-primary-600" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="text-xs text-secondary-600 font-medium">{item.university}</div>
                  </div>

                  <motion.div
                    className="h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Event Organization CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center bg-gradient-to-br from-secondary-600 to-primary-600 rounded-3xl p-12 text-white mb-20"
          >
            <h3 className="text-3xl font-bold mb-4">Organisez Votre Événement</h3>
            <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto text-center">
              Vous avez une idée d'événement ? Proposez-la et bénéficiez du soutien 
              du réseau CIU pour la réaliser.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="mr-2 h-5 w-5" />
              Proposer un Événement
            </motion.a>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Restez Informé</h3>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
              et annonces importantes du CIU directement dans votre boîte mail.
            </p>
            <motion.button
              className="inline-flex items-center btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              S'abonner à la Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}