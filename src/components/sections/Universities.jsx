import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Users, GraduationCap, Calendar, ExternalLink, Phone, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

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

const universities = [
  {
    id: 1,
    name: "Université Cheikh Anta Diop (UCAD)",
    location: "Dakar",
    members: 530,
    established: "1957",
    description: "La plus ancienne et prestigieuse université du Sénégal, située au cœur de Dakar.",
    logo: "/ucad.png",
    contact: [
      { name: "ASSANE NIANG", phone: "+221 78 198 24 07" },
      { name: "Khalifa Cisse", phone: "+221 77 291 10 84" }
    ],
    coordinates: [14.6928, -17.4467],
    gradient: "from-primary-600 to-blue-500"
  },
  {
    id: 2,
    name: "Université Gaston Berger (UGB)",
    location: "Saint-Louis",
    members: 264,
    established: "1990",
    description: "Université moderne axée sur la recherche et l'innovation, située dans la ville historique de Saint-Louis.",
    logo: "/ugb.png",
    contact: [
      { name: "Gade Fall", phone: "+221 77 273 43 30" },
      { name: "Pape Gora Guéne", phone: "+221 77 284 57 78" }
    ],
    coordinates: [16.0378, -16.4894],
    gradient: "from-accent-500 to-secondary-500"
  },
  {
    id: 3,
    name: "Université Assane Seck (UASZ)",
    location: "Ziguinchor",
    members: 140,
    established: "2007",
    description: "Université dynamique du Sud, contribuant au développement de la Casamance.",
    logo: "/uasz.png",
    contact: [
      { name: "Baba Diaw", phone: "+221 76 321 23 90" },
      { name: "Ndiaga Ndiaye", phone: "+221 77 789 63 79" }
    ],
    coordinates: [12.5444, -16.2736],
    gradient: "from-secondary-500 to-primary-600"
  },
  {
    id: 4,
    name: "Université Alioune Diop (UADB)",
    location: "Bambey",
    members: 168,
    established: "2007",
    description: "L’Université Alioune Diop de Bambey (UADB), héritière du premier Centre Universitaire Régional du Sénégal, est une université au cœur du Baol.",
    logo: "/uadb.png",
    contact: [
      { name: "Idrissa Pouye", phone: "+221 70 548 90 75" },
      { name: "Abdou Seydi", phone: "+221 77 611 50 66" }
    ],
    coordinates: [14.7022, -16.4522],
    gradient: "from-primary-600 to-accent-600"
  },
  {
    id: 5,
    name: "Université du Sine Saloum (USSEIN)",
    location: "Kaolack",
    members: 97,
    established: "2007",
    description: "Université régionale contribuant au développement du bassin arachidier.",
    logo: "/ussein.png",
    contact: [
      { name: "Moustapha Diakhate", phone: "+221 76 155 03 95" },
      { name: "Saly", phone: "+221 78 481 09 11" }
    ],
    coordinates: [14.1372, -16.0728],
    gradient: "from-accent-600 to-secondary-600"
  },
  {
    id: 6,
    name: "Université Iba Der Thiam (UIDT)",
    location: "Thiès",
    members: 178,
    established: "2007",
    description: "Université technologique spécialisée dans l'ingénierie et les sciences appliquées.",
    logo: "/uidt.png",
    contact: [
      { name: "Massata", phone: "+221 77 096 45 41" },
      { name: "Demba Ndiaye", phone: "+221 77 492 78 83" }
    ],
    coordinates: [14.7886, -16.9260],
    gradient: "from-secondary-600 to-primary-500"
  },
  {
    id: 7,
    name: "Université Amadou Mahtar Mbow & Institut supérieur d'enseignement professionnel (ISEP) de Diamniadio ",
    location: "Dakar",
    members: 55,
    established: "2012",
    description: "Conseil universitaire unifiant deux institutions d'enseignement supérieur de Diamniadio.",
    logos: ["/uam.png", "/isep.png"],
    contact: [
      { name: "Mademba Gueye", phone: "+221 77 830 86 39" },
      { name: "Fatima Diallo", phone: "+221 77 447 50 38" }
    ],
    coordinates: [14.7645, -17.3660],
    gradient: "from-primary-500 to-accent-500"
  }
];

export default function Universities() {
  const universitiesRef = useRef(null);
  const mapRef = useRef(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  
  const isUniversitiesInView = useInView(universitiesRef, { once: true, amount: 0.2 });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 });

  const totalMembers = universities.reduce((sum, uni) => sum + uni.members, 0);

  return (
    <section id="universities" className="section-padding bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={universitiesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isUniversitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            className="inline-block px-3 sm:px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-medium mb-3 sm:mb-4 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Nos Conseils Universitaires
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className="gradient-text">Réseau National</span> d'Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Présent dans toutes les universités publiques du Sénégal, le CIU unit {totalMembers}+ étudiants 
            moustarchidines à travers le pays.
          </p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isUniversitiesInView ? "visible" : "hidden"}
          >
            {[
              { icon: GraduationCap, number: universities.length, label: "Universités", color: "text-primary-600" },
              { icon: Users, number: `${totalMembers}+`, label: "Étudiants", color: "text-accent-600" },
              { icon: MapPin, number: "8", label: "Régions", color: "text-secondary-600" },
              { icon: Calendar, number: "5+", label: "Années", color: "text-primary-700" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <stat.icon className={cn("h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mx-auto mb-2 sm:mb-3", stat.color)} />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div
          ref={mapRef}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10 md:mb-12 px-4"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Carte Interactive</span> du CIU
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-3 sm:mb-4 leading-relaxed">
              Explorez notre présence à travers tout le Sénégal et découvrez nos conseils universitaires.
            </p>
            <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto font-medium">
              Cliquez sur les cartes pour obtenir plus d'informations sur chaque conseil universitaire.
            </p>
          </motion.div>

          {/* Map Placeholder with Interactive Points */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                  <span className="font-semibold text-sm sm:text-base text-gray-800">Conseils Universitaires</span>
                </div>
              </div>

              {/* Simplified Map with University Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {universities.map((university, index) => (
                  <motion.div
                    key={university.id}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cn(
                      "group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[280px] sm:min-h-[320px]",
                      selectedUniversity?.id === university.id ? "ring-2 ring-primary-500 scale-[1.02] sm:scale-105" : ""
                    )}
                    onClick={() => setSelectedUniversity(selectedUniversity?.id === university.id ? null : university)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      {university.logos ? (
                        <div className="flex space-x-2">
                          {university.logos.map((logo, logoIndex) => (
                            <div 
                              key={logoIndex}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white shadow-md flex items-center justify-center flex-shrink-0"
                            >
                              <img 
                                src={logo} 
                                alt={`Logo ${university.name}`}
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-md flex items-center justify-center flex-shrink-0">
                          <img 
                            src={university.logo} 
                            alt={`Logo ${university.name}`}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                          />
                        </div>
                      )}
                      <div className="text-right ml-2">
                        <div className="text-xl sm:text-2xl font-bold gradient-text">{university.members}</div>
                        <div className="text-xs text-gray-500">membres</div>
                      </div>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                      {university.name}
                    </h4>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-secondary-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{university.location}</span>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                      {university.description}
                    </p>

                    <motion.div
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-1 rounded-b-xl sm:rounded-b-2xl",
                        `bg-gradient-to-r ${university.gradient}`
                      )}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* University Details Modal */}
        <Modal 
          isOpen={!!selectedUniversity} 
          onClose={() => setSelectedUniversity(null)}
          title={selectedUniversity?.name || "Détails de l'université"}
        >
          {selectedUniversity && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center mb-4 sm:mb-6">
                  {selectedUniversity.logos ? (
                    <div className="flex space-x-2 sm:space-x-3 mr-3 sm:mr-4">
                      {selectedUniversity.logos.map((logo, logoIndex) => (
                        <div 
                          key={logoIndex}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-lg flex items-center justify-center"
                        >
                          <img 
                            src={logo} 
                            alt={`Logo ${selectedUniversity.name}`}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-lg mr-3 sm:mr-4 flex items-center justify-center">
                      <img 
                        src={selectedUniversity.logo} 
                        alt={`Logo ${selectedUniversity.name}`}
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm sm:text-base text-gray-600">Établie en {selectedUniversity.established}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {selectedUniversity.description}
                </p>

                <div className="grid grid-cols-1 gap-4 mb-4 sm:mb-6">
                  <div className="bg-primary-50 rounded-xl p-4 text-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-primary-700">{selectedUniversity.members}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Membres CIU</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Points Focaux</h4>
                <div className="space-y-3 sm:space-y-4">
                  {selectedUniversity.contact.map((contact, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-3 sm:p-4"
                    >
                      <div className="font-medium text-sm sm:text-base text-gray-900 mb-2 text-center">{contact.name}</div>
                      <div className="flex items-center justify-center">
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600 mr-2 flex-shrink-0" />
                        <a 
                          href={`tel:${contact.phone}`}
                          className="text-xs sm:text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">{selectedUniversity.location}, Sénégal</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2">Rejoignez Notre Réseau</h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-100 max-w-2xl mx-auto leading-relaxed px-4">
            Votre université n'est pas encore représentée ? Contactez-nous pour créer 
            une nouvelle section CIU dans votre établissement.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center btn-secondary text-sm sm:text-base"
            >
              Nous Contacter
              <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
