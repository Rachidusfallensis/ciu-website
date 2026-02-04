import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
    answer: "L'adhésion est ouverte à tout étudiant moustarchide inscrit dans une université publique ou privée. Il suffit de se rapprocher du point focal de votre université ou de remplir le formulaire d'adhésion en ligne lors des campagnes de recrutement."
  },
  {
    question: "Quelles sont les activités principales du CIU ?",
    answer: "Le CIU organise régulièrement des séances de Tarbiya, des conférences académiques, des colloques nationaux, des ateliers de développement personnel, et des événements de networking entre étudiants moustarchides. Nous mettons également à disposition des ressources pédagogiques et spirituelles sur notre plateforme."
  },
  {
    question: "Y a-t-il une cotisation pour les membres ?",
    answer: "L'adhésion au CIU est gratuite. Cependant, des cotisations volontaires peuvent être demandées pour financer certains projets spécifiques ou événements majeurs. Tout reste transparent et consensuel."
  },
  {
    question: "Comment puis-je contribuer au CIU ?",
    answer: "Vous pouvez contribuer de plusieurs façons : rejoindre une commission selon vos compétences, participer aux événements et activités, proposer des initiatives, partager vos connaissances et expertise, ou simplement être actif au sein de votre point focal universitaire."
  },
  {
    question: "Le CIU organise-t-il des événements inter-universitaires ?",
    answer: "Oui ! Le CIU organise annuellement un grand Colloque National qui réunit tous les moustarchides étudiants du Sénégal. Nous organisons également des rencontres régionales, des séminaires thématiques et des activités sportives et culturelles tout au long de l'année."
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

      <div className="mt-12 text-center p-8 bg-slate-100 rounded-3xl border border-slate-200">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 shadow-sm">
          <MessageCircle className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-2">Vous avez d'autres questions ?</h4>
        <p className="text-slate-600 mb-6">Notre équipe est là pour vous répondre.</p>
        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Contacter le support
        </a>
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
    <>
      {/* Premium Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero_about.jpg"
            alt="Rencontre Comité Inter-Universitaire"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Multi-layer gradient overlays for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-primary-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
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
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-24 fill-slate-50"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#ffffff"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#f8fafc"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
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

                      {/* Modern "Squircle" Photo Style */}
                      <div className="w-32 h-32 rounded-2xl mb-4 relative z-10 group-hover:scale-105 transition-transform duration-300 ring-1 ring-slate-200/50 shadow-lg overflow-hidden bg-slate-100">
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

          {/* 5. FAQ Section */}
          <FAQSection />



        </div>
      </section>
    </>
  );
}
