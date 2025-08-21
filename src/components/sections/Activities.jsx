import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Image, Video, FileText, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from '../../utils/cn';
import { format, addDays, startOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';
import { fr } from 'date-fns/locale';

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
    image: "/api/placeholder/400/250",
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
    image: "/api/placeholder/400/250",
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
    image: "/api/placeholder/400/250",
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
    image: "/api/placeholder/400/250",
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

export default function Activities() {
  const activitiesRef = useRef(null);
  const calendarRef = useRef(null);
  const galleryRef = useRef(null);
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const isActivitiesInView = useInView(activitiesRef, { once: true, amount: 0.2 });
  const isCalendarInView = useInView(calendarRef, { once: true, amount: 0.3 });
  const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.3 });

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const filteredEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeFilter);

  const getEventsForDay = (day) => {
    return upcomingEvents.filter(event => isSameDay(event.date, day));
  };

  const nextMonth = () => {
    setCurrentDate(addDays(currentDate, 30));
  };

  const prevMonth = () => {
    setCurrentDate(addDays(currentDate, -30));
  };

  return (
    <section id="activities" className="section-padding bg-gradient-to-br from-accent-50/30 via-white to-secondary-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={activitiesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isActivitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Nos Activités
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Événements</span> & Programmes
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre riche programme d'activités conçu pour enrichir votre parcours 
            académique et spirituel à travers des événements variés et engageants.
          </p>
        </motion.div>

        {/* Event Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isActivitiesInView ? "visible" : "hidden"}
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
          animate={isActivitiesInView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Événements</span> à Venir
          </h3>

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

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
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

        {/* Mini Calendar */}
        <motion.div
          ref={calendarRef}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCalendarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Calendrier</span> des Événements
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Planifiez votre participation aux événements du CIU
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isCalendarInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <motion.button
                onClick={prevMonth}
                className="p-2 rounded-xl hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              
              <h4 className="text-2xl font-bold text-gray-900">
                {format(currentDate, 'MMMM yyyy', { locale: fr })}
              </h4>
              
              <motion.button
                onClick={nextMonth}
                className="p-2 rounded-xl hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                <div key={day} className="p-3 text-center text-sm font-semibold text-gray-500">
                  {day}
                </div>
              ))}
              
              {calendarDays.map((day, index) => {
                const dayEvents = getEventsForDay(day);
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isCurrentDay = isToday(day);
                
                return (
                  <motion.div
                    key={day.toISOString()}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                    className={cn(
                      "relative p-3 text-center rounded-xl transition-all duration-200 cursor-pointer",
                      isCurrentMonth ? "text-gray-900" : "text-gray-400",
                      isCurrentDay ? "bg-primary-600 text-white" : "hover:bg-primary-50",
                      dayEvents.length > 0 && !isCurrentDay ? "bg-secondary-100 hover:bg-secondary-200" : ""
                    )}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium">
                      {format(day, 'd')}
                    </span>
                    {dayEvents.length > 0 && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                        <div className={cn(
                          "w-2 h-2 rounded-full",
                          isCurrentDay ? "bg-white" : "bg-primary-600"
                        )} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revivez les moments forts de nos événements passés
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isGalleryInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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

        {/* Event Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center bg-gradient-to-br from-secondary-600 to-primary-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Organisez Votre Événement</h3>
          <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}
