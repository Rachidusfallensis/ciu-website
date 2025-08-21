import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Ressources CIU
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Bibliothèque</span> & Ressources
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Accédez à notre collection complète de ressources éducatives, spirituelles et académiques 
              conçues pour enrichir votre parcours universitaire.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Bibliothèque Numérique",
                description: "Collection de livres, articles et publications académiques",
                items: "150+ ressources",
                gradient: "from-primary-500 to-accent-500"
              },
              {
                icon: Video,
                title: "Médiathèque",
                description: "Conférences, cours et témoignages en format vidéo",
                items: "50+ vidéos",
                gradient: "from-accent-500 to-secondary-500"
              },
              {
                icon: FileText,
                title: "Documents Officiels",
                description: "Formulaires, guides et documents administratifs",
                items: "25+ documents",
                gradient: "from-secondary-500 to-primary-600"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${resource.gradient}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <resource.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {resource.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600">
                    {resource.items}
                  </span>
                  <motion.button
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    Accéder
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Section en Développement</h3>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Notre bibliothèque de ressources sera bientôt disponible avec une interface 
              complète pour accéder à tous nos contenus éducatifs.
            </p>
            <motion.button
              className="inline-flex items-center btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-5 w-5" />
              Être Notifié du Lancement
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
