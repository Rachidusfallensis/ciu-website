import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Target, Eye, Heart, Users, BookOpen, Globe, ChevronRight, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
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


const faqItems = [
  {
    question: <span>Comment rejoindre le <span className="text-primary-600">Comité Inter-Universitaire</span> ?</span>,
    answer: "L'adhésion est ouverte à tout moustarchide étudiant inscrit dans une université publique ou privée. Il suffit de se rapprocher du point focal de votre université ou de remplir le formulaire d'adhésion en ligne lors des campagnes de recensement."
  },
  {
    question: "Comment puis-je contribuer au CIU ?",
    answer: "Vous pouvez contribuer de plusieurs façons : rejoindre une commission selon vos compétences, participer aux événements et activités, proposer des initiatives, partager vos connaissances et expertise, ou simplement être actif au sein de votre point conseil universitaire."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Questions <span className="text-primary-600">Fréquentes</span>
        </h3>
        <p className="text-lg text-slate-600">
          Quelques réponses aux interrogations courantes.
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <h4 className="text-lg font-bold text-slate-900 pr-8">{item.question}</h4>
              <div className={`p-2 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-primary-100 text-primary-600' : 'bg-slate-50 text-slate-400'}`}>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50/50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

    

    </div>
  );
}

export default function About() {
  const aboutRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.1 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 });

  const [activeTab, setActiveTab] = useState("Points Focaux");

  // Hero Carousel Logic
  const heroImages = [
    "/about-slide-1.jpg",
    "/about-slide-2.jpg",
    "/about-slide-3.jpg",
    "/about-slide-4.jpg",
    "/about-slide-5.jpg"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload images
    heroImages.forEach((image) => {
      new Image().src = image;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

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
    { name: "Khalifa Ababacar Sy Traoré", university: "UIDT", commission: "Point Focal", photo: "/khalifa_traore.jpeg" },
    { name: "Mouhamed Diouf", university: "UGB", commission: "Point Focal", photo: "/diouf.jpg" },
    { name: "El Hadj Gaye", university: "UCAD", commission: "Point Focal", photo: "/elhadj.JPG" },
    { name: "Mame Ousmane Sarr", university: "UIDT", commission: "Commission Administrative", photo: "/mame_ousmane_sarr.png" },
    { name: "Pape Samba Dia", university: "N/A", commission: "Commission Administrative" },
    { name: "Mademba Gueye", university: "UAM", commission: "Commission Administrative", photo: "/mademba_gueye.jpeg" },
    { name: "Mouhamadou Fadilou Chimere Diallo", university: "UADB", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/chimere.jpg" },
    { name: "Adama Niang", university: "UCAD", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/adama.jpg" },
    { name: "Idrissa Pouye", university: "UADB", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/idrissa_pouye.jpg" },
    { name: "Ndiaga Ndiaye", university: "UASZ", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/ndiaga_ndiaye.jpg" },
    { name: "Mame Cheikh Seck", university: "UGB", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/mame_cheikh.jpg" },
    { name: "El Hadj Ndiouga", university: "UIDT", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/ndiouga.JPG" },
    { name: "Cheikh Becaye", university: "UASZ", commission: "Commission d'Intelligence et de Perception Spirituelle", photo: "/becaye.jpg" },
    { name: "Tallab Diop", university: "UCAD", commission: "Commission Trésor et Capacitation", photo: "/tallab_diop.jpg" },
    { name: "Mame Gaydel Gaye", university: "UADB", commission: "Commission Trésor et Capacitation", photo: "/gaydel.JPG" },
    { name: "Moustapha Gueye", university: "UASZ", commission: "Commission Trésor et Capacitation", photo: "/moustapha_gueye.jpg" },
    { name: "Mbaye Samb", university: "UGB", commission: "Commission Logistique", photo: "/mbaye_samb.jpg" },
    { name: "Ismaila Cissé", university: "USSEIN", commission: "Commission Logistique", photo: "/ismaila_cisse.jpg" }
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

  const getAbbreviatedCommission = (name) => {
    const map = {
      "Point Focal": "PF",
      "Commission Administrative": "CA",
      "Commission d'Intelligence et de Perception Spirituelle": "CIPS",
      "Commission Trésor et Capacitation": "CTC",
      "Commission Logistique": "CL",
      "Ex-CIPS": "CIPS", // Handle legacy/alumni cases if needed
      "CIPS": "CIPS"
    };
    return map[name] || name;
  };

  return (
    <>
      {/* Premium Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="Rencontre Comité Inter-Universitaire"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
          {/* Multi-layer gradient overlays for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-primary-900/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              <span className="block mb-2 sm:inline sm:mb-0 sm:mr-3">Notre</span>
              <motion.span
                className="inline-block relative px-4 py-1 sm:mr-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              >
                <motion.span
                  className="absolute inset-0 bg-yellow-500 -skew-x-6 rounded-lg backdrop-blur-sm"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                />
                <span className="relative z-10 text-white drop-shadow-sm">
                  Histoire
                </span>
              </motion.span>
              <span className="text-white mr-3">&</span>
              <motion.span
                className="inline-block relative px-4 py-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              >
                <motion.span
                  className="absolute inset-0 bg-primary-600 -skew-x-6 rounded-lg backdrop-blur-sm"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
                <span className="relative z-10 text-white drop-shadow-sm">
                  Mission
                </span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Depuis 2022, le <span className="font-bold text-secondary-400">Comité Inter-Universitaire</span> œuvre pour l'épanouissement des moustarchides étudiants,
            créant un pont entre excellence académique et valeurs spirituelles.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-12 sm:gap-24"
          >
            {[
              { value: "9+", label: "Universités" },
              { value: "1500+", label: "Membres" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500 mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-300 font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Wave Transition */}

      </section>

      <section id="about" ref={aboutRef} className="pt-12 pb-20 bg-slate-50 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          {/* 2. Mission & Vision Split Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Mission (Yin - Dark & Yellow) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-gradient-to-br from-primary-900 to-primary-800 rounded-[2.5rem] p-8 sm:p-10 shadow-xl overflow-hidden text-white flex flex-col h-full"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <Target className="w-8 h-8 text-secondary-400" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 flex-wrap">
                  <span>Notre</span>
                  <span className="relative inline-block px-3 py-1">
                    <span className="absolute inset-0 bg-secondary-400 -skew-x-6 rounded-lg transform transition-transform duration-300 group-hover:skew-x-0" />
                    <span className="relative z-10 text-primary-900 font-extrabold">Mission</span>
                  </span>
                </h3>

                <p className="text-lg text-primary-100 leading-relaxed mb-8 flex-grow">
                  Le CIU a été créé avec la vision d'unir tous les moustarchides étudiants
                  des universités sénégalaises, créant un pont solide entre foi et savoir.
                </p>

                {/* Structure Mirror: Timeline */}
                <div className="relative pl-6 border-l-2 border-primary-500/30 space-y-8 mb-8">
                  {[
                    { year: "2022", event: "Création du CIU" },
                    { year: "2023", event: "Premier Congrès National" },
                    { year: "2024", event: "Lancement Plateforme" }
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-secondary-400 ring-4 ring-primary-900" />
                      <span className="text-sm font-bold text-secondary-400 block tracking-wide uppercase">{item.year}</span>
                      <span className="text-primary-50 font-medium">{item.event}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Tarbiya', 'Excellence', 'Fraternité'].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-xl bg-white/10 text-white font-medium text-sm border border-white/10 hover:bg-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision (Yang - Light & Blue) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl overflow-hidden border border-slate-100 flex flex-col h-full"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Eye className="w-8 h-8 text-primary-600" />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3 flex-wrap">
                  <span>Notre</span>
                  <span className="relative inline-block px-3 py-1">
                    <span className="absolute inset-0 bg-primary-600 -skew-x-6 rounded-lg transform transition-transform duration-300 group-hover:skew-x-0" />
                    <span className="relative z-10 text-white font-extrabold">Vision</span>
                  </span>
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 flex-grow">
                  Former des leaders conscients et engagés pour l'avenir du Sénégal.
                  Une vision qui dépasse le cadre universitaire pour bâtir un projet de société.
                </p>

                {/* Structure Mirror: Key Points */}
                <div className="relative pl-6 border-l-2 border-slate-100 space-y-8 mb-8">
                  {[
                    { title: "Leadership", desc: "Forger des décideurs éthiques" },
                    { title: "Réseau", desc: "Connecter les talents nationaux" },
                    { title: "Impact", desc: "Solutions aux défis sociétaux" }
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-primary-600 ring-4 ring-white shadow-sm" />
                      <span className="text-sm font-bold text-primary-600 block tracking-wide uppercase">{item.title}</span>
                      <span className="text-slate-600 font-medium">{item.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <button className="px-6 py-2 rounded-xl bg-slate-50 text-slate-900 font-bold text-sm border border-slate-200 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-all flex items-center gap-2 group-hover:pl-8">
                    En savoir plus <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. Values Section - Premium Cards */}
          <div ref={valuesRef} className="mb-20">
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
                  className="group relative bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Decorative Gradient Blob on Hover */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500 blur-2xl`} />

                  {/* Icon Container with Soft Glow */}
                  <div className="relative mb-6 inline-block">
                    <div className={`active-glow absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                      <value.icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {value.title}
                  </h4>

                  <p className="text-slate-500 leading-relaxed text-sm">
                    {value.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-500 ease-out`} />
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

            {/* Tabs - Horizontal Scroll on Mobile */}
            <div className="flex flex-nowrap overflow-x-auto pb-4 mb-12 px-4 gap-3 justify-start lg:justify-center scrollbar-hide -mx-4 sm:mx-0">
              {commissions.map((commission) => (
                <button
                  key={commission}
                  onClick={() => setActiveTab(commission)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border flex-shrink-0 whitespace-nowrap",
                    activeTab === commission
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg transform scale-105"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  )}
                >
                  {commission === "Commission d'Intelligence et de Perception Spirituelle" ? "CIPS" : commission}
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
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {getFilteredMembers().map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-white rounded-[2rem] p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col relative overflow-hidden"
                    >
                      {/* Image */}
                      <div className="w-full aspect-[6/7] rounded-[2rem] mb-4 relative z-10 overflow-hidden bg-slate-100">
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                            <Users className="w-16 h-16" />
                          </div>
                        )}
                        {/* Overlay gradient on image bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-col items-center text-center px-2 pb-2">

                        {/* Name + Verified Badge */}
                        <h4 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2 justify-center">
                          {member.name}
                        </h4>

                        {/* Commission */}
                        <p className="text-sm text-slate-500 font-medium mb-1">
                          {getAbbreviatedCommission(member.commission)}
                        </p>

                        {/* Bottom Row / Stats Style */}


                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* 5. Alumni Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Nos <span className="text-primary-600">Anciens</span>
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ils ont marqué l'histoire du CIU par leur engagement et leur dévouement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Arona Fall", university: "UADB", commission: "CIPS", photo: "/arona_new.JPG" },
                { name: "Mouhamed Seck", university: "UGB", commission: "CIPS", photo: "/seck.jpg" },
                { name: "El Hadj Malick Niang", university: "USSEIN", commission: "CIPS", photo: "/elhadjmalick.jpg" },
                { name: "Saer Diop", university: "UASZ", commission: "CIPS", photo: "/saer_diop.jpeg" }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-[2rem] p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col relative overflow-hidden grayscale hover:grayscale-0"
                >
                  {/* Image */}
                  <div className="w-full aspect-[6/7] rounded-[2rem] mb-4 relative z-10 overflow-hidden bg-slate-100">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                        <Users className="w-16 h-16" />
                      </div>
                    )}
                    {/* Overlay gradient on image bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col items-center text-center px-2 pb-2">

                    {/* Name */}
                    < h4 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2 justify-center" >
                      {member.name}
                    </h4>

                    {/* Commission */}
                    <p className="text-sm text-slate-500 font-medium mb-1">
                      {getAbbreviatedCommission(member.commission)}
                    </p>



                  </div>
                </motion.div>
              ))}
            </div>
          </div >

          {/* 6. FAQ Section */}
          < FAQSection />



        </div >
      </section >
    </>
  );
}
