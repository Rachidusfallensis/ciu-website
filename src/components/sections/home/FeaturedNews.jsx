import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../../../data/newsData';

// Format date helper
const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
};

export default function FeaturedNews() {
    // Get the main featured article (highest priority)
    const mainFeature = articles.find(a => a.featured) || articles[0];

    // Get 2 other recent articles, excluding the main feature
    const recentArticles = articles
        .filter(a => a.id !== mainFeature.id)
        .sort((a, b) => b.date - a.date)
        .slice(0, 2);

    return (
        <section className="section-padding bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center space-x-2 text-primary-600 font-bold mb-4">
                            <div className="w-8 h-1 bg-primary-600 rounded-full" />
                            <span className="uppercase tracking-wider text-sm">Actualités</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                            À la <span className="text-primary-600">Une</span>
                        </h2>
                    </div>

                    <Link
                        to="/news"
                        className="group flex items-center gap-2 text-slate-600 font-bold hover:text-primary-600 transition-colors"
                    >
                        Toutes les actualités
                        <div className="w-8 h-8 rounded-full bg-slate-200 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Featured Article (Left Side - Large) */}
                    <motion.div
                        className="lg:col-span-7 h-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to={mainFeature.link} className="group relative block h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0">
                                <img
                                    src={mainFeature.image}
                                    alt={mainFeature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                                        {mainFeature.category}
                                    </span>
                                    <div className="flex items-center text-slate-300 text-xs font-medium">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {formatDate(mainFeature.date)}
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-primary-300 transition-colors">
                                    {mainFeature.title}
                                </h3>

                                <p className="text-slate-200 line-clamp-2 md:line-clamp-3 mb-6 leading-relaxed max-w-xl">
                                    {mainFeature.excerpt}
                                </p>

                                <span className="inline-flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                                    Lire l'article <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Recent Articles List (Right Side) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {recentArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    to={article.link || '/news'}
                                    className="group flex gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 hover:border-primary-100 hover:bg-primary-50/30"
                                >
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden relative">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2 text-xs text-slate-500 font-medium">
                                            <span className="text-primary-600 flex items-center">
                                                <Tag className="w-3 h-3 mr-1" />
                                                {article.category}
                                            </span>
                                            <span>•</span>
                                            <span>{formatDate(article.date)}</span>
                                        </div>

                                        <h4 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary-700 transition-colors">
                                            {article.title}
                                        </h4>

                                        <div className="mt-auto flex items-center text-xs font-bold text-slate-400 group-hover:text-primary-600 transition-colors">
                                            Lire la suite <ArrowRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Newsletter / More CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-auto bg-slate-900 rounded-2xl p-6 md:p-8 text-center sm:text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl -mr-10 -mt-10" />

                            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Ne manquez rien !</h4>
                                    <p className="text-slate-400 text-sm">Suivez nos événements et activités.</p>
                                </div>
                                <Link
                                    to="/news"
                                    className="px-5 py-2.5 bg-white text-slate-900 font-bold rounded-xl text-sm hover:bg-primary-50 transition-colors shadow-lg whitespace-nowrap"
                                >
                                    Voir l'agenda
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
