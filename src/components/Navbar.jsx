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
              className="flex items-center gap-3 group cursor-pointer"
              aria-label="Retour à l'accueil"
              onClick={(e) => {
                e.stopPropagation();
                handleNavClick();
              }}
            >
              <div className="w-11 h-11 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-6">
                <span className="text-white font-bold text-lg">CIU</span>
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                Comité <span className="text-primary-600">IU</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" id="desktop-menu">
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
                    "text-sm font-bold tracking-tight uppercase transition-colors duration-300",
                    location.pathname === item.href
                      ? "text-primary-600"
                      : "text-slate-500 hover:text-primary-600"
                  )}
                  aria-label={`Naviguer vers ${item.name}`}
                >
                  {item.name}
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
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-600 transition-all text-sm shadow-lg shadow-slate-200 uppercase tracking-wide"
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
                  className="bg-slate-900 text-white w-full text-center block py-4 px-4 rounded-xl font-bold hover:bg-primary-600 transition-all text-sm shadow-lg shadow-slate-200 uppercase tracking-wide"
                >
                  Nouveaux Bacheliers
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}