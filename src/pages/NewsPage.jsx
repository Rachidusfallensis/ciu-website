import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag, Search, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import ScrollToTop from '../components/ScrollToTop';

const articles = [
  {
    id: 1,
    title: "Retour sur la Journée d'Intégration 2024",
    excerpt: "Une journée mémorable marquée par l'accueil chaleureux des nouveaux bacheliers à l'UCAD.",
    author: "Commission Sociale",
    date: new Date(2024, 11, 15),
    category: "Vie Étudiante",
    image: "/api/placeholder/800/600",
    readTime: "5 min",
    featured: false
  },
  {
    id: 2,
    title: "Le Culte du Savoir en Islam",
    excerpt: "Conférence du Professeur Diarra sur l'importance de la recherche scientifique dans la foi.",
    author: "Commission Culturelle",
    date: new Date(2024, 10, 28),
    category: "Spiritualité",
    image: "/api/placeholder/800/600",
    readTime: "12 min",
    featured: false
  },
  {
    id: 3,
    title: "Lancement du Programme de Mentorat",
    excerpt: "Un nouveau système de parrainage pour accompagner les étudiants de première année.",
    author: "Secrétariat Général",
    date: new Date(2025, 0, 10),
    category: "Pédagogie",
    image: "/api/placeholder/800/600",
    readTime: "3 min",
    featured: false
  },
  {
    id: 4,
    title: "Ziarra Annuelle 2025 : Préparatifs",
    excerpt: "Les commissions s'activent pour la réussite de ce grand événement religieux.",
    author: "Comité d'Organisation",
    date: new Date(2025, 2, 5),
    category: "Événement",
    image: "/api/placeholder/800/600",
    readTime: "4 min",
    featured: false
  },
  {
    id: 5,
    title: "Partenariat avec l'Université de Thiès",
    excerpt: "Signature d'une convention pour faciliter l'accès aux ressources numériques.",
    author: "Bureau Exécutif",
    date: new Date(2025, 1, 15),
    category: "Institutional",
    image: "/api/placeholder/800/600",
    readTime: "2 min",
    featured: false
  }
];

const featuredArticle = {
  id: 0,
  title: "COLLOQUE INTER-UNIVERSITAIRE 2025",
  excerpt: "Premier colloque interuniversitaire organisé par le CIU du 21-23 février 2025 à l'UIDT Thiès. Un événement majeur regroupant l'élite universitaire autour des défis contemporains.",
  author: "Cellule de Communication",
  date: new Date(2025, 1, 21),
  category: "À la Une",
  image: "/colloque-optimized/banniere_colloque.jpg",
  link: "/colloque",
  tagColor: "bg-amber-100 text-amber-800",
  readTime: "8 min"
};

const categories = ["Tout", "À la Une", "Vie Étudiante", "Spiritualité", "Pédagogie", "Événement"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredArticles = activeCategory === "Tout"
    ? articles
    : articles.filter(art => art.category === activeCategory);

  return (
    <main className="pt-20 bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">Le Journal du CIU</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              <span className="text-primary-600">Actualités</span> & Événements
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Restez connectés avec la vie de la communauté. Retrouvez ici les derniers reportages, annonces et moments forts.
            </p>

            {/* Categories Scroll */}
            <div className="flex flex-wrap justify-center gap-3">
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
            <Link to={featuredArticle.link} className="group block relative bg-black rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] sm:h-[600px]">
              <div className="absolute inset-0">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4 text-white/80 text-sm font-medium">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full backdrop-blur-md">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(featuredArticle.date, 'd MMMM yyyy', { locale: fr })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-amber-400 transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-lg text-slate-300 mb-8 line-clamp-2">
                  {featuredArticle.excerpt}
                </p>

                <div className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-full font-bold group-hover:bg-amber-400 transition-colors">
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      <ScrollToTop />
    </main>
  );
}