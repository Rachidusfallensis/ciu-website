import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, Video, FileText, Download, Filter, Search, ChevronRight, GraduationCap, Heart, FileCheck } from 'lucide-react';
import { resources, categories } from '../data/resourcesData';



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

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-primary-600 text-sm font-bold uppercase tracking-wider mb-6">
              <BookOpen className="w-4 h-4" />
              Centre de Ressources
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight flex flex-col md:block items-center justify-center gap-2">
              <span className="block md:inline">Bibliothèque</span>{' '}
              <span className="relative inline-block px-6 py-2">
                <span className="absolute inset-0 bg-primary-600 -skew-x-6 rounded-xl shadow-xl shadow-primary-500/20 transform md:rotate-2 opacity-90" />
                <span className="relative z-10 text-white">& Ressources</span>
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
              Accédez à notre collection complète de documents, guides et médias pour enrichir votre parcours <span className="font-bold text-primary-700">académique</span> et <span className="font-bold text-primary-700">spirituel</span>.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un document, une vidéo..."
                className="w-full pl-14 pr-4 py-5 rounded-2xl border-0 ring-1 ring-slate-200 shadow-lg shadow-slate-200/50 focus:ring-2 focus:ring-primary-500 focus:shadow-xl transition-all text-lg font-medium text-slate-900 placeholder:text-slate-400"
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
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10 ${activeCategory === cat
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300"
                }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
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
    </main>
  );
}
