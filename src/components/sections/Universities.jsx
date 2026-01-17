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
      { name: "Pape Gora Guéne", phone: "+221 77 284 57 78" }
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
      { name: "Baba Diaw", phone: "+221 76 321 23 90" },
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
      { name: "Abdou Seydi", phone: "+221 77 611 50 66" }
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
      { name: "Moustapha Diakhate", phone: "+221 76 155 03 95" },
      { name: "Saly", phone: "+221 78 481 09 11" }
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
      { name: "Massata", phone: "+221 77 096 45 41" },
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
    <section id="universities" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-accent-100/30 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          ref={universitiesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isUniversitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
  

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
            <span className="text-primary-600">Nos Universités</span> Partenaires
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Présent dans toutes les universités publiques du Sénégal, le CIU unit <span className="font-semibold text-primary-600">{totalMembers}+ étudiants</span> pour l'excellence.
          </p>

          {/* Quick Stats - Premium Style */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isUniversitiesInView ? "visible" : "hidden"}
          >
            {[
              { icon: GraduationCap, number: universities.length, label: "Universités", color: "bg-primary-50 text-primary-600" },
              { icon: Users, number: `${totalMembers}+`, label: "Étudiants", color: "bg-accent-50 text-accent-600" },
              { icon: MapPin, number: "8", label: "Régions", color: "bg-secondary-50 text-secondary-600" },
              { icon: Calendar, number: "5+", label: "Années", color: "bg-orange-50 text-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className={`p-3 rounded-xl ${stat.color} mb-3`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Map/List Section */}
        <motion.div
          ref={mapRef}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden"
          >
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Découvrez nos <span className="text-primary-600">Sections</span>
                </h3>
                <p className="text-slate-600">Cliquez sur une carte pour plus de détails.</p>
              </div>

              {/* Grid Layout for Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {universities.map((university, index) => (
                  <motion.div
                    key={university.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 overflow-hidden flex flex-col h-full",
                      selectedUniversity?.id === university.id ? "ring-2 ring-primary-500 scale-[1.02]" : ""
                    )}
                    onClick={() => setSelectedUniversity(selectedUniversity?.id === university.id ? null : university)}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Hover Gradient Top */}
                    <div className={cn(
                      "absolute top-0 left-0 right-0 h-2 bg-gradient-to-r",
                      university.gradient
                    )} />

                    {/* Header: Logo & Members */}
                    <div className="flex justify-between items-start mb-6 pt-2">
                      {university.logos ? (
                        <div className="flex -space-x-3">
                          {university.logos.map((logo, i) => (
                            <div key={i} className="w-12 h-12 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center p-2 z-10 transition-transform hover:scale-110 hover:z-20">
                              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center p-2 transition-transform group-hover:scale-110">
                          <img src={university.logo} alt={university.name} className="w-full h-full object-contain" />
                        </div>
                      )}

                      <div className="text-right">
                        <span className="block text-2xl font-bold text-slate-900">{university.members}</span>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Membres</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
                      {university.name}
                    </h4>

                    <div className="flex items-center text-slate-500 text-sm mb-4 font-medium">
                      <MapPin className="w-4 h-4 mr-1 text-accent-500" />
                      {university.location}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {university.description}
                    </p>

                    {/* Action */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      <span>Voir détails</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
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
