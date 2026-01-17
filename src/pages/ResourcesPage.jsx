import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Download, Library } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

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

          {/* Section en Développement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Section en <span className="gradient-text">Développement</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Notre bibliothèque de ressources est en cours de constitution. Nous rassemblons une collection 
                complète de contenus éducatifs, spirituels et académiques pour enrichir votre parcours universitaire.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bibliothèque Numérique</h3>
                  <p className="text-sm text-gray-600">Livres, articles et publications académiques</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Médiathèque</h3>
                  <p className="text-sm text-gray-600">Conférences et témoignages en vidéo</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Documents Officiels</h3>
                  <p className="text-sm text-gray-600">Formulaires et guides administratifs</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8"
              >
                <p className="text-sm text-gray-500 mb-6">
                  📚 Bientôt disponible : une plateforme complète de ressources éducatives !
                </p>
                
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Être Notifié du Lancement
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
