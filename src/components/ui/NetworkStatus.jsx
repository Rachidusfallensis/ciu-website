import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff, X } from 'lucide-react';

/**
 * Component that shows a notification when the user goes offline or comes back online
 */
const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowNotification(true);
      // Hide the notification after 5 seconds
      setTimeout(() => setShowNotification(false), 5000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNotification(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center ${
            isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
          role="alert"
          aria-live="assertive"
        >
          <div className="mr-3">
            {isOnline ? (
              <Wifi className="h-5 w-5" aria-hidden="true" />
            ) : (
              <WifiOff className="h-5 w-5" aria-hidden="true" />
            )}
          </div>
          <div className="text-sm font-medium">
            {isOnline
              ? 'Vous êtes de nouveau connecté'
              : 'Vous êtes hors ligne'}
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className={`ml-4 p-1 rounded-full ${
              isOnline ? 'hover:bg-green-200' : 'hover:bg-red-200'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isOnline ? 'focus:ring-green-500' : 'focus:ring-red-500'
            }`}
            aria-label="Fermer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NetworkStatus;
