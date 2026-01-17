import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, Video, FileText, Download, Filter, Search, ChevronRight, GraduationCap, Heart, FileCheck } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

const resources = [
  {
    id: 1,
    title: "Guide de l'Étudiant Moustarchide",
    type: "document",
    category: "Administrative",
    size: "2.4 MB",
    downloads: 1240,
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
    description: "Tout ce qu'il faut savoir pour bien démarrer son année universitaire."
  },
  {
    id: 2,
    title: "Conférence: L'Excellence en Islam",
    type: "video",
    category: "Spirituelle",
    duration: "45 min",
    views: 850,
    icon: Video,
    color: "bg-emerald-50 text-emerald-600",
    description: "Une intervention marquante sur l'importance de la quête du savoir."
  },
  {
    id: 3,
    title: "Calendrier Universitaire 2024-2025",
    type: "document",
    category: "Administrative",
    size: "1.1 MB",
    downloads: 3200,
    icon: CalendarIcon, // Defined below
    color: "bg-purple-50 text-purple-600",
    description: "Les dates clés des examens et vacances pour toutes les universités."
  },
  {
    id: 4,
    title: "Recueil de Qasidas",
    type: "document",
    category: "Spirituelle",
    size: "5.6 MB",
    downloads: 5600,
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
    description: "Les textes essentiels pour les séances de Zikr du jeudi soir."
  },
  {
    id: 5,
    title: "Méthodologie de la Recherche",
    type: "document",
    category: "Académique",
    size: "3.2 MB",
    downloads: 980,
    icon: GraduationCap,
    color: "bg-amber-50 text-amber-600",
    description: "Guide pratique pour la rédaction de mémoires et thèses."
  },
  {
    id: 6,
    title: "Statuts et Règlement Intérieur",
    type: "document",
    category: "Administrative",
    size: "0.8 MB",
    downloads: 450,
    icon: FileCheck,
    color: "bg-slate-50 text-slate-600",
    description: "Les textes régissant le fonctionnement du Comité Inter-Universitaire."
  }
];

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

const categories = ["Tout", "Académique", "Spirituelle", "Administrative"];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === "Tout" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              <span className="text-primary-600">Bibliothèque</span> & Ressources
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              Accédez à notre collection complète de documents, guides et médias pour enrichir votre parcours <span className="font-medium text-slate-900">académique</span> et <span className="font-medium text-slate-900">spirituel</span>.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un document, une vidéo..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 ring-1 ring-slate-200 shadow-md focus:ring-2 focus:ring-primary-500 focus:shadow-lg transition-all text-slate-900 placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredResources.map((resource) => (
              <motion.div
                layout
                key={resource.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${resource.color}`}>
                    <resource.icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-100">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                  {resource.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {resource.description}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-400">
                    {resource.type === 'video' ? resource.views + ' vues' : resource.downloads + ' téléch.'}
                    <span className="mx-2">•</span>
                    {resource.type === 'video' ? resource.duration : resource.size}
                  </div>

                  <button className="w-10 h-10 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all group-hover:scale-110 shadow-sm">
                    {resource.type === 'video' ? <Video className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredResources.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Aucun résultat trouvé</h3>
            <p className="text-slate-500">Essayez de modifier vos termes de recherche.</p>
          </div>
        )}

      </section>

      <ScrollToTop />
    </main>
  );
}
