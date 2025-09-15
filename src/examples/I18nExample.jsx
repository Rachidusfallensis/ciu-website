import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

/**
 * Example component showing how to use internationalization
 */
export default function I18nExample() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {t('home.hero.title')} <span className="gradient-text">{t('home.hero.subtitle')}</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t('home.hero.description')}
        </p>
        
        {/* Language switcher */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            onClick={() => changeLanguage('fr')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              i18n.language === 'fr' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label={i18n.language === 'fr' ? 'Langue actuelle: Français' : 'Changer la langue en Français'}
            aria-pressed={i18n.language === 'fr'}
          >
            <Globe size={18} />
            <span>Français</span>
          </button>
          
          <button
            onClick={() => changeLanguage('en')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              i18n.language === 'en' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label={i18n.language === 'en' ? 'Current language: English' : 'Change language to English'}
            aria-pressed={i18n.language === 'en'}
          >
            <Globe size={18} />
            <span>English</span>
          </button>
        </div>
      </div>
      
      {/* Example of translated content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: t('home.features.community.title'),
            description: t('home.features.community.description'),
          },
          {
            title: t('home.features.academic.title'),
            description: t('home.features.academic.description'),
          },
          {
            title: t('home.features.spiritual.title'),
            description: t('home.features.spiritual.description'),
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            
            <Link
              to="/about"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              {t('home.features.learnMore')}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* Example of dynamic content with translations */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </h2>
        
        <div className="flex justify-center space-x-6 mt-4">
          {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
            <button
              key={platform}
              className="text-primary-600 hover:text-primary-700"
              aria-label={t('footer.followUs', { platform })}
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
