import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Target, Eye, Heart, Users, BookOpen, Globe, ChevronRight, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import TeamAccordion from '../TeamAccordion';

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

  // Removed Tabs Logic
  // const [activeTab, setActiveTab] = useState("Points Focaux");

  // Hero Logic (Static)
  // const heroImage = "/about-slide-3.jpg"; // Using direct string in style for simplicity

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
      {/* Premium Hero Section - Text Mask Style ("Voices United") */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about-slide-5.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 w-full max-w-[90vw] text-center flex flex-col items-center justify-center">

          {/* Masked Text Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Title - Fun & Dynamic Sticker Style */}
            <h1 className="flex flex-col items-center justify-center font-black tracking-tight select-none">

              {/* Line 1: À (Simple) + PROPOS (Yellow Sticker) */}
              <div className="flex items-center gap-4 md:gap-6 mb-2 md:mb-4">
                <span className="text-4xl md:text-7xl lg:text-8xl text-slate-900 leading-none">
                  À
                </span>
                <span className="bg-secondary-400 text-white px-6 md:px-10 py-1 md:py-4 rounded-xl md:rounded-3xl text-4xl md:text-7xl lg:text-8xl -rotate-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  PROPOS
                </span>
              </div>

              {/* Line 2: DE NOUS (Blue Sticker) */}
              <div className="relative">
                <span className="block bg-primary-600 text-white px-8 md:px-12 py-3 md:py-6 rounded-2xl md:rounded-[2rem] text-5xl md:text-8xl lg:text-9xl rotate-2 shadow-xl transform hover:rotate-1 transition-transform duration-300 z-10">
                  DE NOUS
                </span>

                {/* Decorative dots/elements for sticker feel */}
                <div className="absolute -right-4 -top-4 w-4 h-4 md:w-8 md:h-8 bg-secondary-400 rounded-full animate-bounce delay-700" />
                <div className="absolute -left-2 -bottom-2 w-3 h-3 md:w-6 md:h-6 bg-primary-300 rounded-full animate-pulse" />
              </div>

            </h1>

            {/* Floating Decorative Elements - Harmonized */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-secondary-400/20 rounded-full blur-2xl -z-10"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 md:mt-12 text-lg md:text-2xl text-slate-600 max-w-3xl font-medium leading-relaxed"
          >
            Nous fédérons l'intelligentsia moustarchidine au service de l'excellence académique et des valeurs spirituelles.
          </motion.p>
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

            {/* Team Grid (Consolidated Accordion) */}
            <div className="min-h-[500px]">
              <TeamAccordion members={team} />
            </div>
          </div>


          {/* 6. FAQ Section */}
          < FAQSection />



        </div >
      </section >
    </>
  );
}
