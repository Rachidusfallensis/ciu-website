import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye, FileText, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resources } from '../../../data/resourcesData';

export default function TopResources() {
    // Get top 3 resources by downloads/views
    const topResources = [...resources]
        .sort((a, b) => (b.downloads || b.views) - (a.downloads || a.views))
        .slice(0, 3);

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-1/2 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Ressources <span className="text-primary-600">Populaires</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Accédez rapidement aux documents les plus plébiscités par la communauté.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topResources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-white rounded-3xl p-1 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-600/10 transition-all duration-300"
                        >
                            <div className="bg-slate-50 rounded-[1.4rem] p-6 h-full flex flex-col relative overflow-hidden group-hover:bg-white transition-colors duration-300">
                                {/* Top Badge */}
                                <div className="absolute top-4 right-4 text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                                    TOP {index + 1}
                                </div>

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${resource.color} bg-opacity-20`}>
                                    <resource.icon className={`w-7 h-7`} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                                    {resource.title}
                                </h3>

                                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-2">
                                    {resource.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-auto">
                                    <div className="flex items-center text-slate-400 text-xs font-medium">
                                        {resource.type === 'video' ? (
                                            <>
                                                <Eye className="w-4 h-4 mr-1.5" />
                                                {resource.views} vues
                                            </>
                                        ) : (
                                            <>
                                                <Download className="w-4 h-4 mr-1.5" />
                                                {resource.downloads} téléch.
                                            </>
                                        )}
                                    </div>

                                    <Link
                                        to="/resources"
                                        className="flex items-center text-primary-600 font-bold text-sm bg-primary-50 px-3 py-2 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
                                    >
                                        {resource.type === 'video' ? 'Regarder' : 'Télécharger'}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/resources"
                        className="inline-flex items-center px-6 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-2xl hover:border-primary-600 hover:text-primary-600 transition-colors"
                    >
                        Explorer la bibliothèque complète
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
