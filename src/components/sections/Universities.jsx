import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Users, GraduationCap, Calendar, ExternalLink, Phone, Mail, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
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
      damping: 15
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
    gradient: "from-primary-600 to-blue-500",
    bgGradient: "from-primary-50 to-blue-50"
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
      { name: "Abdoulaye Sow", phone: "+221 77 505 98 48" }
    ],
    coordinates: [16.0378, -16.4894],
    gradient: "from-accent-500 to-secondary-500",
    bgGradient: "from-accent-50 to-secondary-50"
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
      { name: "Baba Gueye", phone: "+221 77 986 27 98" },
      { name: "Ndiaga Ndiaye", phone: "+221 77 789 63 79" }
    ],
    coordinates: [12.5444, -16.2736],
    gradient: "from-secondary-500 to-primary-600",
    bgGradient: "from-secondary-50 to-primary-50"
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
      { name: "Assane Ngom", phone: "+221 77 669 40 42" }
    ],
    coordinates: [14.7022, -16.4522],
    gradient: "from-primary-600 to-accent-600",
    bgGradient: "from-primary-50 to-accent-50"
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
      { name: "Magatte Guéye", phone: "+221 78 960 78 60" },
      { name: "Soda Mariama Lo", phone: "+221 77 970 70 99" }
    ],
    coordinates: [14.1372, -16.0728],
    gradient: "from-accent-600 to-secondary-600",
    bgGradient: "from-accent-50 to-secondary-50"
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
      { name: "Massata Mbaye", phone: "+221 77 096 45 41" },
      { name: "Demba Ndiaye", phone: "+221 77 492 78 83" }
    ],
    coordinates: [14.7886, -16.9260],
    gradient: "from-secondary-600 to-primary-500",
    bgGradient: "from-secondary-50 to-primary-50"
  },
  {
    id: 7,
    name: "Université Amadou Mahtar Mbow & ISEP",
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
    gradient: "from-primary-500 to-accent-500",
    bgGradient: "from-primary-50 to-accent-50"
  },
  {
    id: 8,
    name: "Université Numérique Cheikh Hamidou Kane (UNCHK)",
    location: "National",
    members: 0,
    established: "2013",
    description: "Université numérique axée sur l'enseignement à distance. Section en cours d'implémentation.",
    logo: "/unchk.png",
    contact: [],
    coordinates: [14.7167, -17.4677],
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50"
  }
];

export default function Universities() {
  const universitiesRef = useRef(null);
  const mapRef = useRef(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const isUniversitiesInView = useInView(universitiesRef, { once: true, amount: 0.1 });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.05 });

  const totalMembers = universities.reduce((sum, uni) => sum + uni.members, 0);

  return (
    <section id="universities" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl -z-0 pointer-events-none mix-blend-multiply opacity-70" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl -z-0 pointer-events-none mix-blend-multiply opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          ref={universitiesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isUniversitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >


          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 text-slate-900 leading-tight">
            <span className="block mb-4 sm:mb-2">
              Nos
              <span className="relative inline-block px-4 py-1 ml-3">
                <span className="absolute inset-0 bg-yellow-400 -skew-x-6 rounded-lg shadow-lg shadow-yellow-400/30" />
                <span className="relative z-10 text-white">Conseils</span>
              </span>
            </span>
            <span className="relative inline-block px-4 py-1">
              <span className="absolute inset-0 bg-primary-600 -skew-x-6 rounded-lg shadow-lg shadow-primary-500/30" />
              <span className="relative z-10 text-white">Universitaires</span>
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Présent dans toutes les universités publiques du Sénégal, le CIU unit <span className="text-primary-600 font-bold">{totalMembers}+ étudiants</span> autour de l'excellence académique et des valeurs spirituelles.
          </p>

          {/* Quick Stats - Premium Style */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isUniversitiesInView ? "visible" : "hidden"}
          >
            {[
              { icon: GraduationCap, number: universities.length, label: "Conseils universitaires", color: "text-primary-600", bg: "bg-primary-50" },
              { icon: Users, number: `${totalMembers}+`, label: "Étudiants", color: "text-secondary-600", bg: "bg-secondary-50" },
              { icon: MapPin, number: "8", label: "Régions", color: "text-accent-600", bg: "bg-accent-50" },
              { icon: Calendar, number: "4", label: "Années", color: "text-slate-600", bg: "bg-slate-50" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">{stat.number}</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive List Section */}
        <motion.div
          ref={mapRef}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                <span className="w-12 h-1 bg-slate-200 rounded-full"></span>
                Découvrez nos Sections
                <span className="w-12 h-1 bg-slate-200 rounded-full"></span>
              </h3>
            </div>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universities.map((university, index) => (
                <motion.div
                  key={university.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "group relative bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col h-full overflow-visible",
                    selectedUniversity?.id === university.id ? "ring-4 ring-primary-100 scale-[1.02]" : "hover:-translate-y-2"
                  )}
                  onClick={() => setSelectedUniversity(selectedUniversity?.id === university.id ? null : university)}
                >
                  {/* Hover Glow Effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br -z-10 blur-xl",
                    university.bgGradient
                  )} />

                  {/* Header: Logo & Members */}
                  <div className="flex justify-between items-start mb-8">
                    {university.logos ? (
                      <div className="flex -space-x-4">
                        {university.logos.map((logo, i) => (
                          <div key={i} className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <img src={university.logo} alt={university.name} className="w-full h-full object-contain" />
                      </div>
                    )}

                    <div className="bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                      <span className="block text-2xl font-black text-slate-900 leading-none">{university.members}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Membres</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
                      {university.name}
                    </h4>
                    <div className="flex items-center text-slate-500 font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-secondary-500 fill-secondary-500/20" />
                      {university.location}
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    {university.description}
                  </p>

                  {/* Action */}
                  <div className="mt-auto">
                    <div className="w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-bold text-center group-hover:bg-primary-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                      Voir les détails
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Improved Modal */}
        <Modal
          isOpen={!!selectedUniversity}
          onClose={() => setSelectedUniversity(null)}
          title={selectedUniversity?.name || "Détails de l'université"}
        >
          {selectedUniversity && (
            <div className="flex flex-col gap-8">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 bg-slate-50 p-4 rounded-3xl border border-slate-100">
                  {selectedUniversity.logos ? (
                    <div className="flex gap-4">
                      {selectedUniversity.logos.map((l, i) => (
                        <img key={i} src={l} alt="Logo" className="w-20 h-20 object-contain" />
                      ))}
                    </div>
                  ) : (
                    <img src={selectedUniversity.logo} alt="Logo" className="w-24 h-24 object-contain" />
                  )}
                </div>

                <div>
                  <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    {selectedUniversity.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-100">
                      Est. {selectedUniversity.established}
                    </span>
                    <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium border border-accent-100">
                      {selectedUniversity.members} Membres
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                      {selectedUniversity.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contacts Grid */}
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary-600" />
                  Points Focaux
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedUniversity.contact.map((contact, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-primary-300 transition-colors flex justify-between items-center group">
                      <div>
                        <div className="font-bold text-slate-900 text-sm sm:text-base">{contact.name}</div>
                        <div className="text-xs sm:text-sm text-slate-500">Représentant</div>
                      </div>
                      <a
                        href={`tel:${contact.phone}`}
                        className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Rejoindre une section
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
