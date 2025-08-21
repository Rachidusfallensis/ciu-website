import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Users, Award, BookOpen, Globe, Star } from 'lucide-react';
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
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 });

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
      name: "Amadou Diallo",
      role: "Président",
      university: "Université Cheikh Anta Diop",
      description: "Étudiant en Master de Gestion, passionné par le développement communautaire et l'excellence académique."
    },
    {
      name: "Fatou Sow",
      role: "Vice-Présidente",
      university: "Université Gaston Berger",
      description: "Étudiante en Sciences Politiques, engagée dans la promotion des valeurs spirituelles en milieu universitaire."
    },
    {
      name: "Moussa Kane",
      role: "Secrétaire Général",
      university: "Université Assane Seck",
      description: "Étudiant en Informatique, responsable de la coordination des activités inter-universitaires."
    },
    {
      name: "Aïcha Ndiaye",
      role: "Trésorière",
      university: "Université Alioune Diop",
      description: "Étudiante en Économie, spécialisée dans la gestion financière et la planification budgétaire."
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
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            À Propos du CIU
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Notre Histoire</span> & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Depuis plus d'une décennie, le Comité Inter-Universitaire œuvre pour l'épanouissement 
            des étudiants moustarchidines dans toutes les universités publiques du Sénégal.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-2xl">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Notre Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Le CIU a été créé avec la vision d'unir tous les étudiants moustarchidines 
              des universités publiques sénégalaises sous une même bannière de fraternité, 
              d'excellence académique et de développement spirituel.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous croyons fermement qu'il est possible de concilier réussite académique 
              et épanouissement spirituel, en créant un environnement propice à 
              l'excellence sous toutes ses formes.
            </p>
            <motion.div 
              className="flex items-center space-x-4 pt-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
              <span className="text-primary-600 font-semibold">Excellence • Spiritualité • Fraternité</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-2xl">
                <Eye className="h-6 w-6 text-primary-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Notre Vision</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous aspirons à devenir le pont entre les valeurs spirituelles traditionnelles 
              et les exigences du monde académique moderne, en formant des leaders conscients 
              et engagés pour l'avenir du Sénégal.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre vision s'étend au-delà des frontières universitaires pour créer 
              un réseau national de diplômés moustarchidines qui contribuent positivement 
              au développement de notre société.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { number: "500+", label: "Membres Actifs" },
                { number: "8", label: "Universités" },
                { number: "50+", label: "Événements/An" },
                { number: "10+", label: "Années d'Expérience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-100"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
                
                <motion.div
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto",
                    `bg-gradient-to-br ${value.gradient}`
                  )}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h4 className="text-xl font-bold text-center text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>

                <motion.div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-r ${value.gradient}`
                  )}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des leaders étudiants dévoués qui œuvrent quotidiennement pour 
              le développement et l'épanouissement de notre communauté.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </motion.div>

                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                  {member.name}
                </h4>
                
                <div className="text-primary-600 font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-secondary-600 mb-4 font-medium">{member.university}</div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>

                <motion.div
                  className="mt-4 h-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
