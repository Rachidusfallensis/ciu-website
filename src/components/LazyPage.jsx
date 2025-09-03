import { Suspense } from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo animé */}
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl mb-4 mx-auto"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Texte de chargement */}
      <motion.div
        className="text-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-lg font-semibold text-gray-700 mb-2">Chargement...</div>
        <div className="text-sm text-gray-500">Préparation de la page</div>
      </motion.div>

      {/* Barre de progression */}
      <motion.div
        className="w-48 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  </div>
);

const LazyPage = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

export default LazyPage;
