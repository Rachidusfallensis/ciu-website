import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Eye, Heart, Users, BookOpen, Globe, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

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

export default function About() {
  const aboutRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 });

  const [activeTab, setActiveTab] = useState("Points Focaux");

  const values = [
    {
      icon: Heart,
      title: "Spiritualité",
      description: "Préserver et renforcer les valeurs spirituelles islamiques dans un environnement académique moderne.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Excellence",
      description: "Promouvoir l'excellence académique et encourager la recherche de la connaissance sous toutes ses formes.",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Users,
      title: "Fraternité",
      description: "Cultiver l'esprit de fraternité et de solidarité entre tous les membres de notre communauté.",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      icon: Globe,
      title: "Ouverture",
      description: "Encourager l'ouverture d'esprit et le dialogue interculturel tout en restant fidèles à nos principes.",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const team = [
    { name: "Khalifa Ababacar Sy Traoré", university: "UIDT", commission: "Point Focal", photo: "/khalifa.JPG" },
    { name: "Mouhamed Diouf", university: "UGB", commission: "Point Focal", photo: "/diouf.jpg" },
    { name: "El Hadj Gaye", university: "UCAD", commission: "Point Focal", photo: "/elhadj.JPG" },
    { name: "Mame Ousmane Sarr", university: "UIDT", commission: "Commission Administrative", photo: "/ousmane.jpg" },
    { name: "Mouhamadou Fadilou Chimere Diallo", university: "UADB", commission: "Commission Administrative", photo: "/chimere.jpg" },
    { name: "Mademba Gueye", university: "UAM", commission: "Commission Administrative", photo: "/mademba.jpg" },
    { name: "Arona Fall", university: "UADB", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/arona.jpeg" },
    { name: "Adama Niang", university: "UCAD", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/adama.jpg" },
    { name: "Mouhamed Seck", university: "UGB", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/seck.jpg" },
    { name: "El Hadj Ndiouga", university: "UIDT", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/ndiouga.JPG" },
    { name: "Cheikh Becaye", university: "UASZ", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/becaye.jpg" },
    { name: "El Hadj Malick", university: "USSEIN", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/elhadjmalick.jpg" },
    { name: "Saer Diop", university: "UASZ", commission: "Commission d'Intelligence et de Perception Spirituelle" },
    { name: "Tallab Diop", university: "UCAD", commission: "Commission Trésor et Capacitation", photo: "/tallab.jpg" },
    { name: "Mame Gaydel Gaye", university: "UADB", commission: "Commission Trésor et Capacitation", photo: "/gaydel.JPG" },
    { name: "Moustapha Gueye", university: "UASZ", commission: "Commission Trésor et Capacitation", photo: "/moustapha.JPG" },
    { name: "Mbaye Samb", university: "UGB", commission: "Commission Logistique", photo: "/mbaye.jpg" },
    { name: "Ismaila", university: "USSEIN", commission: "Commission Logistique", photo: "/ismaila.jpg" }
  ];

  const commissions = [
    "Points Focaux",
    "Commission Administrative",
    "Commission d'Intelligence et de Perception Spirituelle",
    "Commission Trésor et Capacitation",
    "Commission Logistique"
  ];

  const getFilteredMembers = () => {
    if (activeTab === "Points Focaux") return team.filter(m => m.commission === "Point Focal");
    return team.filter(m => m.commission === activeTab);
  };

  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Hero & Story Section */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-6">
            <Eye className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">Qui sommes-nous (CIU) ?</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 tracking-tight">
            <span className="text-primary-600">Notre Histoire</span> & Mission
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Depuis 2022, le comité Inter-Universitaire œuvre pour l'épanouissement
            des étudiants moustarchidines, créant un pont entre <span className="font-medium text-primary-600">excellence académique</span> et <span className="font-medium text-primary-600">valeurs spirituelles</span>.
          </p>
        </motion.div>

        {/* 2. Mission & Vision Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Notre Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Le CIU a été créé avec la vision d'unir tous les étudiants moustarchidines
                des universités sénégalaises sous une même bannière de fraternité,
                d'excellence académique et de Tarbiya.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Tarbiya', 'Excellence', 'Fraternité'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-slate-900 rounded-[2.5rem] p-10 shadow-xl overflow-hidden text-white"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Notre Vision</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Former des leaders conscients et engagés pour l'avenir du Sénégal.
                Notre vision dépasse le cadre universitaire pour créer un réseau national de diplômés moustarchidines, porteurs d'un projet de société.
              </p>

              <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                En savoir plus <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 3. Values Section - Premium Cards */}
        <div ref={valuesRef} className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              <span className="text-primary-600">Nos Valeurs</span> Fondamentales
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des piliers solides qui définissent notre identité.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col items-start text-left h-full"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm flex-grow">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. Leadership Team - Tabbed Interface */}
        <div ref={teamRef} className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              <span className="text-primary-600">Notre Équipe</span> Dirigeante
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Une organisation structurée en commissions spécialisées pour une efficacité optimale.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
            {commissions.map((commission) => (
              <button
                key={commission}
                onClick={() => setActiveTab(commission)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                  activeTab === commission
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg transform scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                )}
              >
                {commission === "Commission d'Intelligence et de Perception Spirituelle" ? "Comm. Intelligence & Spirituelle" : commission}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {getFilteredMembers().map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center relative overflow-hidden"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="w-24 h-24 rounded-full mb-4 relative z-10 group-hover:scale-105 transition-transform duration-300 ring-4 ring-slate-50 shadow-inner overflow-hidden bg-slate-100">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                          <Users className="w-8 h-8" />
                        </div>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-1 active:text-primary-600 group-hover:text-primary-700 transition-colors z-10">
                      {member.name}
                    </h4>

                    <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600 mb-2 z-10">
                      {member.university}
                    </div>

                    <p className="text-xs text-slate-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity -mt-2 group-hover:mt-0">
                      {member.commission}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
