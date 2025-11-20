import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/about' },
  { name: 'Universités', href: '/universities' },
  { name: 'Actualités', href: '/news' },
  { name: 'Ressources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);
  
  // Handle reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionPreferenceChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);
    return () => mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={prefersReducedMotion ? { y: 0 } : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100" 
          : "bg-white/90 backdrop-blur-sm"
      )} 
      role="navigation" 
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              to="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl p-2"
              aria-label="Retour à l'accueil"
              onClick={(e) => {
                e.stopPropagation();
                handleNavClick();
              }}
            >
              <motion.div 
                className="relative h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 mr-2 sm:mr-4"
                whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 rounded-xl"></div>
                <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center">
                  <span className="gradient-text font-bold text-xs xs:text-sm sm:text-lg">CIU</span>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-sm xs:text-base sm:text-lg md:text-xl text-gray-900 hidden xs:block leading-tight">
                  <span className="hidden sm:inline">Comité </span>Inter-Universitaire
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" id="desktop-menu">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "relative px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    "hover:bg-primary-50 hover:text-primary-700",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                    "focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
                    location.pathname === item.href 
                      ? "text-primary-700 bg-primary-50" 
                      : "text-gray-700"
                  )}
                  aria-label={`Naviguer vers ${item.name}`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-800 to-primary-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center" id="desktop-cta">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Link
                to="/nouveaux-bacheliers"
                className="btn-primary min-h-[44px] py-3 px-4"
              >
                Nouveaux Bacheliers
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center" id="mobile-menu-button">
            <motion.button
              onClick={toggleMenu}
                className={cn(
                  "p-2 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                  "focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
                  "transition-colors duration-200 min-h-[44px] min-w-[44px]"
                )}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={prefersReducedMotion ? { opacity: 0 } : { rotate: -90, opacity: 0 }}
                    animate={{ rotate: prefersReducedMotion ? 0 : 0, opacity: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={prefersReducedMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
                    animate={{ rotate: prefersReducedMotion ? 0 : 0, opacity: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { rotate: -90, opacity: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-primary-100 overflow-hidden w-full"
          >
            <motion.div 
              className="px-4 pt-4 pb-6 space-y-2 max-h-[70vh] overflow-y-auto"
              initial={prefersReducedMotion ? { y: 0 } : { y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.05 }}
                  whileHover={prefersReducedMotion ? {} : { x: 5 }}
                >
                  <Link
                    to={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium",
                      "transition-all duration-200 hover:bg-primary-50 hover:text-primary-700",
                      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                      "focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
                      "min-h-[44px] w-full",
                      location.pathname === item.href 
                        ? "text-primary-700 bg-primary-50" 
                        : "text-gray-700"
                    )}
                    aria-label={`Naviguer vers ${item.name}`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className="rotate-[-90deg]" />
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div 
                className="pt-4 border-t border-primary-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  to="/nouveaux-bacheliers"
                  onClick={handleNavClick}
                  className="btn-primary w-full text-center block min-h-[44px] py-3 px-4"
                >
  🎓 Nouveaux Bacheliers
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}