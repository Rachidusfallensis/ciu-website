import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag, Search, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { articles, categories, dateFilters } from '../data/newsData';


export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [activeDateFilter, setActiveDateFilter] = useState("Tout");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const now = new Date();

  // Filter by category first
  let filteredArticles = activeCategory === "Tout"
    ? articles
    : articles.filter(art => art.category === activeCategory);

  // Then filter by date
  if (activeDateFilter === "À venir") {
    filteredArticles = filteredArticles.filter(art => art.date > now);
  } else if (activeDateFilter === "Passés") {
    filteredArticles = filteredArticles.filter(art => art.date <= now);
  }

  // Sort by date (upcoming first, then most recent)
  filteredArticles = [...filteredArticles].sort((a, b) => {
    const aIsFuture = a.date > now;
    const bIsFuture = b.date > now;

    if (aIsFuture && !bIsFuture) return -1;
    if (!aIsFuture && bIsFuture) return 1;

    // If both future or both past, sort by date
    return aIsFuture ? a.date - b.date : b.date - a.date;
  });

  const featuredArticle = articles.find(art => art.featured);

  return (
    <main className="pt-20 bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Background Decorators Container - kept separate to allow overflow for dropdown */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl -z-0 mix-blend-multiply opacity-70" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl -z-0 mix-blend-multiply opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight flex flex-wrap items-center justify-center gap-4">
              <span className="relative inline-block px-4 py-1">
                <span className="absolute inset-0 bg-yellow-400 -skew-x-6 rounded-xl shadow-xl shadow-yellow-400/20 transform md:-rotate-1 opacity-90" />
                <span className="relative z-10 text-white">Actualités</span>
              </span>

              <span className="text-slate-900">&</span>

              <span className="relative inline-block px-4 py-1">
                <span className="absolute inset-0 bg-primary-600 -skew-x-6 rounded-xl shadow-xl shadow-primary-500/20 transform md:rotate-2 opacity-90" />
                <span className="relative z-10 text-white">Événements</span>
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              Restez connectés avec la vie de la communauté. Retrouvez ici les derniers reportages, annonces et moments forts.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              {/* Categories Scroll */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10 ${activeCategory === cat
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow"
                      }`}
                  >
                    {activeCategory === cat && (
                      <motion.div
                        layoutId="activeCategoryNews"
                        className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {cat}
                  </button>
                ))}
              </div>

              {/* Date Dropdown */}
              <div className="relative z-20">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm hover:shadow"
                >
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>{activeDateFilter === "Tout" ? "Période" : activeDateFilter}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2"
                    >
                      {dateFilters.map((filter) => (
                        <button
                          key={filter}
                          onClick={() => {
                            setActiveDateFilter(filter);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 flex items-center justify-between ${activeDateFilter === filter ? 'text-primary-600 bg-primary-50' : 'text-slate-600'
                            }`}
                        >
                          {filter}
                          {activeDateFilter === filter && <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

        {/* Featured Article - Big Card */}
        {(activeCategory === "Tout" || activeCategory === "À la Une") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link to={featuredArticle.link} className="group relative block bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 hover:shadow-3xl transition-all duration-300">
              <div className="flex flex-col md:flex-row min-h-[500px]">
                {/* Content Section (Left on Desktop, Bottom on Mobile) */}
                <div className="relative z-10 w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight group-hover:text-primary-600 transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-lg text-slate-600 mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-2">
                    <span
                      className="group/btn relative inline-flex items-center justify-center px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-2xl hover:bg-slate-900 hover:text-white transition-all duration-300 min-h-[50px] text-base overflow-hidden"
                    >
                      <span className="relative z-10">Lire l'article</span>
                      <ArrowRight className="h-5 w-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Image Section (Right on Desktop, Top on Mobile) */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden order-1 md:order-2">
                  <div className="absolute inset-0 bg-slate-100">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.div
                layout
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onHoverStart={() => setHoveredId(article.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-900 rounded-lg shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  {/* Date Status Badge */}
                  {article.date > now && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-lg animate-pulse">
                        À venir
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {format(article.date, 'd MMM yyyy', { locale: fr })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{article.author}</span>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Aucun résultat</h3>
            <p className="text-slate-500">Aucun article dans cette catégorie pour le moment.</p>
          </div>
        )}

      </section>
    </main>
  );
}