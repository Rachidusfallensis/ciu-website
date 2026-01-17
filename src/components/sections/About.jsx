import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Users, BookOpen, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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

export default function About() {
  const aboutRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 });

  const values = [
    {
      icon: Heart,
      title: "Spiritualité",
      description: "Préserver et renforcer les valeurs spirituelles islamiques dans un environnement académique moderne.",
      gradient: "from-primary-500 to-accent-500"
    },
    {
      icon: BookOpen,
      title: "Excellence",
      description: "Promouvoir l'excellence académique et encourager la recherche de la connaissance sous toutes ses formes.",
      gradient: "from-accent-500 to-secondary-500"
    },
    {
      icon: Users,
      title: "Fraternité",
      description: "Cultiver l'esprit de fraternité et de solidarité entre tous les membres de notre communauté.",
      gradient: "from-secondary-500 to-primary-600"
    },
    {
      icon: Globe,
      title: "Ouverture",
      description: "Encourager l'ouverture d'esprit et le dialogue interculturel tout en restant fidèles à nos principes.",
      gradient: "from-primary-600 to-accent-600"
    }
  ];

  const team = [
    {
      name: "Khalifa Ababacar Sy Traoré",
      university: "UIDT",
      commission: "Point Focal",
      photo: "/khalifa.JPG"
    },
    {
      name: "Mouhamed Diouf",
      university: "UGB",
      commission: "Point Focal",
      photo: "/diouf.jpg"
    },
    {
      name: "El Hadj Gaye",
      university: "UCAD",
      commission: "Point Focal",
      photo: "/elhadj.JPG"
    },
    {
      name: "Mame Ousmane Sarr",
      university: "UIDT",
      commission: "Commission Administrative",
      photo: "/ousmane.jpg"
    },
    {
      name: "Mouhamadou Fadilou Chimere Diallo",
      university: "UADB",
      commission: "Commission Administrative",
      photo: "/chimere.jpg"
    },
    {
      name: "Mademba Gueye",
      university: "UAM",
      commission: "Commission Administrative",
      photo: "/mademba.jpg"
    },
    {
      name: "Arona Fall",
      university: "UADB",
      commission: "Commission d'Intelligence et de Perception Spirituelle",
      photo: "/arona.jpeg"
    },
    {
      name: "Adama Niang",
      university: "UCAD",
      commission: "Commission d'Intelligence et de Perception Spirituelle",
      photo: "/adama.jpg"
    },
    {
      name: "Mouhamed Seck",
      university: "UGB",
      commission: "Commission d'Intelligence et de Perception Spirituelle",
      photo: "/seck.jpg"
    },
    {
      name: "El Hadj Ndiouga",
      university: "UIDT",
      commission: "Commission d'Intelligence et de Perception Spirituelle",
      photo: "/ndiouga.JPG"
    },
    {
      name: "Cheikh Becaye",
      university: "UASZ",
      commission: "Commission d'Intelligence et de Perception Spirituelle",
      photo: "/becaye.jpg"
    },
    {
      name: "El Hadj Malick",
      university: "USSEIN",
      commission: "Commission d'Intelligence et de Perception Spirituelle",
      photo: "/elhadjmalick.jpg"
    },
    {
      name: "Saer Diop",
      university: "UASZ",
      commission: "Commission d'Intelligence et de Perception Spirituelle"
    },
    {
      name: "Tallab Diop",
      university: "UCAD",
      commission: "Commission Trésor et Capacitation",
      photo: "/tallab.jpg"
    },
    {
      name: "Mame Gaydel Gaye",
      university: "UADB",
      commission: "Commission Trésor et Capacitation",
      photo: "/gaydel.JPG"
    },
    {
      name: "Moustapha Gueye",
      university: "UASZ",
      commission: "Commission Trésor et Capacitation",
      photo: "/moustapha.JPG"
    },
    {
      name: "Mbaye Samb",
      university: "UGB",
      commission: "Commission Logistique",
      photo: "/mbaye.jpg"
    },
    {
      name: "Ismaila",
      university: "USSEIN",
      commission: "Commission Logistique",
      photo: "/ismaila.jpg"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 rounded-full font-medium mb-4 border border-primary-200/50 shadow-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary-600 rounded-full"
            />
            À Propos du CIU
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Notre Histoire</span> & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            Depuis sa mise en place en 2022, le comité Inter-Universitaire œuvre pour l'épanouissement 
            des étudiants moustarchidines dans toutes les universités publiques et privées du Sénégal.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          <motion.div 
            variants={itemVariants} 
            className="space-y-6 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl shadow-lg"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="h-7 w-7 text-white relative z-10" />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 bg-gradient-to-br from-primary-500 to-blue-600"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Notre Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Le CIU a été créé avec la vision d'unir tous les étudiants moustarchidines 
              des universités sénégalaises sous une même bannière de fraternité, 
              d'excellence académique et de Tarbiya.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Nous croyons fermement qu'il est possible de concilier réussite académique 
              et épanouissement spirituel, en créant un environnement propice à 
              l'excellence sous toutes ses formes.
            </p>
            <motion.div 
              className="flex items-center space-x-4 pt-4 group cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full"
                whileHover={{ width: 60 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-primary-700 font-bold group-hover:text-primary-800 transition-colors">
                Tarbiya • Excellence • Fraternité
              </span>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="space-y-6 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl shadow-lg"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="h-7 w-7 text-white relative z-10" />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 bg-gradient-to-br from-yellow-500 to-orange-600"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Notre Vision</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
            En tant que jeunesse musulmane consciente de sa responsabilité historique, nous nous engageons à jouer un rôle d'avant-garde dans la préservation et l'élévation de notre génération. Nous menons ce combat sur les plans intellectuel, moral, économique, social et surtout religieux, afin de bâtir une jeunesse forte, lucide et fidèle à ses valeurs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Nous aspirons à être le pont entre les valeurs spirituelles traditionnelles et les exigences du monde académique moderne, en formant des leaders conscients et engagés pour l'avenir du Sénégal. Notre vision dépasse le cadre universitaire pour créer un réseau national de diplômés moustarchidines, porteurs d'un projet de société ancré dans la foi et orienté vers le développement harmonieux de la nation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { number: "1400+", label: "Membres Actifs", color: "from-blue-500 to-blue-700" },
                { number: "8", label: "Conseils universitaires", color: "from-yellow-500 to-yellow-700" },
                { number: "19", label: "Collaborateur", color: "from-orange-500 to-orange-700" },
                { number: "5+", label: "Années d'Expérience", color: "from-primary-500 to-primary-700" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group text-center p-4 bg-white border-2 border-gray-100 hover:border-primary-200 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                      `bg-gradient-to-br ${stat.color}`
                    )}
                  />
                  
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold gradient-text mb-1 relative z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          ref={valuesRef}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Nos Valeurs</span> Fondamentales
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Ces quatre piliers guident toutes nos actions et définissent notre identité 
              en tant que communauté estudiantine engagée.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover overflow-hidden border border-gray-100 hover:border-primary-200"
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                    `bg-gradient-to-br ${value.gradient}`
                  )}
                />
                
                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={cn(
                    "absolute top-0 right-0 w-full h-full transform translate-x-12 -translate-y-12 rotate-45",
                    `bg-gradient-to-br ${value.gradient} opacity-20`
                  )} />
                </div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-2xl shadow-lg",
                        `bg-gradient-to-br ${value.gradient}`
                      )}
                    >
                      <value.icon className="h-8 w-8 sm:h-9 sm:w-9 text-white relative z-10" />
                    </div>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500",
                        `bg-gradient-to-br ${value.gradient}`
                      )}
                    />
                  </motion.div>

                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {value.title}
                  </h4>
                </div>
                
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-justify px-2 relative z-10">
                  {value.description}
                </p>

                {/* Bottom Border Animation */}
                <motion.div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl",
                    `bg-gradient-to-r ${value.gradient}`
                  )}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div ref={teamRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Notre Équipe</span> Dirigeante
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Le comité est constitué de 19 membres venant des différentes universités, 
              organisés en commissions spécialisées pour assurer une coordination efficace.
            </p>
          </motion.div>

          {/* Commission Containers */}
          <div className="space-y-12 sm:space-y-16">
            {/* Points Focaux */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-4 sm:p-8"
            >
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-primary-100 via-blue-100 to-primary-50 rounded-xl sm:rounded-2xl shadow-lg border-2 border-primary-200 mx-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTeamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-700 to-blue-700 bg-clip-text text-transparent text-center">
                    Points Focaux
                  </h4>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {team.filter(member => member.commission === "Point Focal").map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-primary-200 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Badge */}
                    <motion.div
                      className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-primary-200 transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={`Photo de ${member.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              {member.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        />
                      </motion.div>
                      
                      <h5 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {member.name}
                      </h5>
                      <p className="text-sm text-gray-600 font-medium px-2 bg-primary-50 rounded-full inline-block">
                        {member.university}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Commission Administrative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-4 sm:p-8"
            >
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-secondary-100 via-yellow-100 to-secondary-50 rounded-xl sm:rounded-2xl shadow-lg border-2 border-secondary-200 mx-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTeamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary-700 to-yellow-700 bg-clip-text text-transparent text-center">
                    Commission Administrative
                  </h4>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {team.filter(member => member.commission === "Commission Administrative").map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-secondary-200 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <motion.div
                      className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-secondary-500 to-yellow-600 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-secondary-200 transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={`Photo de ${member.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-secondary-500 to-yellow-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              {member.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary-400 to-yellow-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        />
                      </motion.div>
                      
                      <h5 className="font-bold text-gray-900 mb-2 group-hover:text-secondary-700 transition-colors">
                        {member.name}
                      </h5>
                      <p className="text-sm text-gray-600 font-medium px-2 bg-secondary-50 rounded-full inline-block">
                        {member.university}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Commission d'Intelligence et de Perception Spirituelle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-accent-50 to-secondary-50 rounded-3xl p-4 sm:p-8"
            >
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  className="inline-flex items-center justify-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-accent-100 via-orange-100 to-accent-50 rounded-xl sm:rounded-2xl shadow-lg border-2 border-accent-200 mx-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTeamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-accent-700 to-orange-700 bg-clip-text text-transparent text-center leading-tight">
                    Commission d'Intelligence et de Perception Spirituelle
                  </h4>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.filter(member => member.commission === "Commission d'Intelligence et de Perception Spirituelle").map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                    className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-accent-200 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-accent-500 to-orange-600 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="relative w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-accent-200 transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={`Photo de ${member.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-accent-500 to-orange-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {member.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-orange-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        />
                      </motion.div>
                      
                      <h5 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-accent-700 transition-colors">
                        {member.name}
                      </h5>
                      <p className="text-xs text-gray-600 font-medium px-2 bg-accent-50 rounded-full inline-block">
                        {member.university}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Commission Trésor et Capacitation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-4 sm:p-8"
            >
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-50 rounded-xl sm:rounded-2xl shadow-lg border-2 border-primary-200 mx-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTeamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent text-center">
                    Commission Trésor et Capacitation
                  </h4>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {team.filter(member => member.commission === "Commission Trésor et Capacitation").map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-primary-200 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <motion.div
                      className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-primary-200 transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={`Photo de ${member.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              {member.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        />
                      </motion.div>
                      
                      <h5 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {member.name}
                      </h5>
                      <p className="text-sm text-gray-600 font-medium px-2 bg-primary-50 rounded-full inline-block">
                        {member.university}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Commission Logistique */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-4 sm:p-8"
            >
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-accent-100 via-primary-100 to-accent-50 rounded-xl sm:rounded-2xl shadow-lg border-2 border-accent-200 mx-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTeamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-700 to-primary-700 bg-clip-text text-transparent text-center">
                    Commission Logistique
                  </h4>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {team.filter(member => member.commission === "Commission Logistique").map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-accent-200 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <motion.div
                      className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-lg ring-4 ring-white group-hover:ring-accent-200 transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={`Photo de ${member.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              {member.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-primary-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        />
                      </motion.div>
                      
                      <h5 className="font-bold text-gray-900 mb-2 group-hover:text-accent-700 transition-colors">
                        {member.name}
                      </h5>
                      <p className="text-sm text-gray-600 font-medium px-2 bg-accent-50 rounded-full inline-block">
                        {member.university}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
