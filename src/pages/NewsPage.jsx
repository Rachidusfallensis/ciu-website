import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const newsArticles = [
  {
    id: 1,
    title: "Lancement du Programme de Mentorat Inter-Universitaire",
    excerpt: "Un nouveau programme pour connecter les étudiants seniors avec les nouveaux arrivants dans toutes nos universités partenaires.",
    content: "Le CIU lance son programme de mentorat...",
    author: "Équipe CIU",
    date: new Date(2024, 10, 15),
    category: "Programme",
    image: "/api/placeholder/600/300",
    featured: true,
    gradient: "from-primary-500 to-accent-500"
  },
  {
    id: 2,
    title: "Succès de la Conférence Annuelle 2024",
    excerpt: "Plus de 400 participants ont assisté à notre conférence annuelle sur le thème 'Islam et Innovation Technologique'.",
    content: "La conférence s'est tenue...",
    author: "Amadou Diallo",
    date: new Date(2024, 10, 10),
    category: "Événement",
    image: "/api/placeholder/600/300",
    featured: false,
    gradient: "from-accent-500 to-secondary-500"
  },
  {
    id: 3,
    title: "Nouvelle Section CIU à l'Université de Thiès",
    excerpt: "Inauguration officielle de notre nouvelle section à l'UIDT avec plus de 50 membres fondateurs.",
    content: "Nous sommes fiers d'annoncer...",
    author: "Fatou Sow",
    date: new Date(2024, 10, 5),
    category: "Expansion",
    image: "/api/placeholder/600/300",
    featured: false,
    gradient: "from-secondary-500 to-primary-600"
  }
];

export default function NewsPage() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-accent-50/30 via-white to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Actualités CIU
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Dernières</span> Nouvelles
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Restez informé des dernières actualités, événements et développements 
              du Comité Inter-Universitaire à travers tout le Sénégal.
            </p>
          </motion.div>

          {/* Featured Article */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${featuredArticle.gradient} opacity-90`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2">À LA UNE</div>
                        <div className="text-lg opacity-90">Article Principal</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(featuredArticle.date, 'd MMMM yyyy', { locale: fr })}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">Par {featuredArticle.author}</span>
                      </div>

                      <motion.button
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        Lire l'article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Autres Actualités</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-80`} />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-xs mb-3">
                      <Clock className="h-3 w-3 mr-1" />
                      {format(article.date, 'd MMM yyyy', { locale: fr })}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{article.author}</span>
                      </div>

                      <motion.button
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
                        whileHover={{ x: 3 }}
                      >
                        Lire plus
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center bg-gradient-to-br from-secondary-600 to-primary-600 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Restez Informé</h3>
            <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
              et annonces importantes du CIU directement dans votre boîte mail.
            </p>
            <motion.button
              className="inline-flex items-center btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              S'abonner à la Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
