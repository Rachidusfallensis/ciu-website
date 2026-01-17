import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Target, Handshake, PartyPopper } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import ScrollToTop from '../components/ScrollToTop';

export default function NewsPage() {
  const newsRef = useRef(null);

  // Article à la une (Colloque)
  const featuredArticle = {
    id: 1,
    title: "COLLOQUE INTER-UNIVERSITAIRE 2025",
    excerpt: "Premier colloque interuniversitaire organisé par le CIU du 21-23 février 2025 à l'UIDT Thiès.",
    author: "Arona Fall",
    date: new Date(2025, 1, 21),
    category: "Colloque",
    image: "/colloque-optimized/banniere_colloque.jpg",
    link: "/colloque",
    tagColor: "bg-amber-100 text-amber-800"
  };

  const sections = [
    { icon: Target, title: "Activités d'Envergure", desc: "Colloques, conférences et formations", color: "bg-blue-100 text-blue-600" },
    { icon: Handshake, title: "Réunions de Travail", desc: "Coordination inter-universitaire", color: "bg-green-100 text-green-600" },
    { icon: PartyPopper, title: "Initiatives des Conseils", desc: "Journées d'intégration et activités", color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <main className="pt-20 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            <span className="text-primary-600">Dernières</span> Nouvelles
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Restez informés des activités, événements et initiatives du Comité Inter-Universitaire.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all z-10" />
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${featuredArticle.tagColor}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-slate-400 text-sm font-medium flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(featuredArticle.date, 'd MMMM yyyy', { locale: fr })}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-amber-500 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-500" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{featuredArticle.author}</span>
                  </div>

                  <Link
                    to={featuredArticle.link}
                    className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-amber-500 hover:text-black transition-all group-hover:translate-x-2"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:translate-y-[-4px]"
            >
              <div className={`w-14 h-14 rounded-2xl ${section.color} flex items-center justify-center mb-6`}>
                <section.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{section.title}</h3>
              <p className="text-slate-500 leading-relaxed">{section.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl p-12 border border-dashed border-gray-300"
        >
          <h3 className="text-2xl font-bold text-slate-400 mb-4">Plus de contenu à venir</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Nous travaillons activement pour enrichir cette section avec les archives de nos événements passés et le calendrier des activités futures.
          </p>
        </motion.div>

      </section>
      <ScrollToTop />
    </main>
  );
}