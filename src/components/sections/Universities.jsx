import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Users, GraduationCap, Calendar, ExternalLink, Phone, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';

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
    members: 150,
    established: "1957",
    description: "La plus ancienne et prestigieuse université du Sénégal, située au cœur de Dakar.",
    contact: {
      phone: "+221 33 824 23 79",
      email: "contact.ucad@ciu-senegal.org"
    },
    coordinates: [14.6928, -17.4467],
    faculties: ["Médecine", "Droit", "Sciences", "Lettres", "Sciences Économiques"],
    gradient: "from-primary-600 to-blue-500"
  },
  {
    id: 2,
    name: "Université Gaston Berger (UGB)",
    location: "Saint-Louis",
    members: 85,
    established: "1990",
    description: "Université moderne axée sur la recherche et l'innovation, située dans la ville historique de Saint-Louis.",
    contact: {
      phone: "+221 33 961 23 56",
      email: "contact.ugb@ciu-senegal.org"
    },
    coordinates: [16.0378, -16.4894],
    faculties: ["Sciences Appliquées", "Sciences Juridiques", "Lettres", "Sciences Économiques"],
    gradient: "from-accent-500 to-secondary-500"
  },
  {
    id: 3,
    name: "Université Assane Seck (UASZ)",
    location: "Ziguinchor",
    members: 65,
    established: "2007",
    description: "Université dynamique du Sud, contribuant au développement de la Casamance.",
    contact: {
      phone: "+221 33 991 15 77",
      email: "contact.uasz@ciu-senegal.org"
    },
    coordinates: [12.5444, -16.2736],
    faculties: ["Sciences et Technologies", "Sciences Économiques", "Lettres"],
    gradient: "from-secondary-500 to-primary-600"
  },
  {
    id: 4,
    name: "Université Alioune Diop (UADB)",
    location: "Bambey",
    members: 45,
    established: "2007",
    description: "Université agricole spécialisée dans les sciences agronomiques et vétérinaires.",
    contact: {
      phone: "+221 33 973 12 34",
      email: "contact.uadb@ciu-senegal.org"
    },
    coordinates: [14.7022, -16.4522],
    faculties: ["Agronomie", "Sciences Vétérinaires", "Sciences Appliquées"],
    gradient: "from-primary-600 to-accent-600"
  },
  {
    id: 5,
    name: "Université du Sine Saloum (USSEIN)",
    location: "Kaolack",
    members: 40,
    established: "2007",
    description: "Université régionale contribuant au développement du bassin arachidier.",
    contact: {
      phone: "+221 33 941 56 78",
      email: "contact.ussein@ciu-senegal.org"
    },
    coordinates: [14.1372, -16.0728],
    faculties: ["Sciences Économiques", "Lettres", "Sciences de l'Éducation"],
    gradient: "from-accent-600 to-secondary-600"
  },
  {
    id: 6,
    name: "Université Iba Der Thiam (UIDT)",
    location: "Thiès",
    members: 55,
    established: "2007",
    description: "Université technologique spécialisée dans l'ingénierie et les sciences appliquées.",
    contact: {
      phone: "+221 33 951 23 45",
      email: "contact.uidt@ciu-senegal.org"
    },
    coordinates: [14.7886, -16.9260],
    faculties: ["Génie Civil", "Génie Informatique", "Sciences Appliquées"],
    gradient: "from-secondary-600 to-primary-500"
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
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Nos Universités Partenaires
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Réseau National</span> d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Présent dans toutes les universités publiques du Sénégal, le CIU unit {totalMembers}+ étudiants 
            moustarchidines à travers le pays dans une communauté d'apprentissage et de spiritualité.
          </p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isUniversitiesInView ? "visible" : "hidden"}
          >
            {[
              { icon: GraduationCap, number: universities.length, label: "Universités", color: "text-primary-600" },
              { icon: Users, number: `${totalMembers}+`, label: "Étudiants", color: "text-accent-600" },
              { icon: MapPin, number: "6", label: "Régions", color: "text-secondary-600" },
              { icon: Calendar, number: "15+", label: "Années", color: "text-primary-700" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <stat.icon className={cn("h-8 w-8 mx-auto mb-3", stat.color)} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Carte Interactive</span> du Réseau
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explorez notre présence à travers tout le Sénégal et découvrez nos communautés universitaires.
            </p>
          </motion.div>

          {/* Map Placeholder with Interactive Points */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 mb-12 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-gray-800">Sénégal - Réseau CIU</span>
                </div>
              </div>

              {/* Simplified Map with University Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((university, index) => (
                  <motion.div
                    key={university.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cn(
                      "group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer",
                      selectedUniversity?.id === university.id ? "ring-2 ring-primary-500 scale-105" : ""
                    )}
                    onClick={() => setSelectedUniversity(selectedUniversity?.id === university.id ? null : university)}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-2xl",
                        `bg-gradient-to-br ${university.gradient}`
                      )}>
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{university.members}</div>
                        <div className="text-xs text-gray-500">membres</div>
                      </div>
                    </div>

                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                      {university.name}
                    </h4>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2 text-secondary-500" />
                      <span className="text-sm">{university.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {university.description}
                    </p>

                    <motion.div
                      className={cn(
                        "h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        `bg-gradient-to-r ${university.gradient}`
                      )}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Selected University Details */}
        {selectedUniversity && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className={cn(
                        "flex items-center justify-center w-16 h-16 rounded-2xl mr-4",
                        `bg-gradient-to-br ${selectedUniversity.gradient}`
                      )}>
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{selectedUniversity.name}</h3>
                        <p className="text-gray-600">Établie en {selectedUniversity.established}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {selectedUniversity.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-50 rounded-xl p-4 text-center">
                        <Users className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary-700">{selectedUniversity.members}</div>
                        <div className="text-sm text-gray-600">Membres CIU</div>
                      </div>
                      <div className="bg-secondary-50 rounded-xl p-4 text-center">
                        <GraduationCap className="h-6 w-6 text-secondary-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-secondary-700">{selectedUniversity.faculties.length}</div>
                        <div className="text-sm text-gray-600">Facultés</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Facultés Représentées</h4>
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {selectedUniversity.faculties.map((faculty, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center bg-gray-50 rounded-lg p-3"
                        >
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                          <span className="text-gray-700">{faculty}</span>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Contact Local</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary-600 mr-3" />
                        <a 
                          href={`tel:${selectedUniversity.contact.phone}`}
                          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {selectedUniversity.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary-600 mr-3" />
                        <a 
                          href={`mailto:${selectedUniversity.contact.email}`}
                          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {selectedUniversity.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                        <span className="text-gray-600">{selectedUniversity.location}, Sénégal</span>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => setSelectedUniversity(null)}
                      className="mt-6 btn-outline w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Fermer les détails
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Rejoignez Notre Réseau</h3>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Votre université n'est pas encore représentée ? Contactez-nous pour créer 
            une nouvelle section CIU dans votre établissement.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous Contacter
            <ExternalLink className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
