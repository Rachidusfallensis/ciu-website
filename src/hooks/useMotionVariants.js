import { useReducedMotion } from 'framer-motion';

/**
 * Hook qui fournit des variants d'animation communs pour Framer Motion
 * avec support pour prefers-reduced-motion
 */
export const useMotionVariants = () => {
  const prefersReducedMotion = useReducedMotion();

  // Variants pour les conteneurs avec enfants animés
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: prefersReducedMotion ? 0 : 0.3,
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  // Variants pour les éléments individuels avec animation de bas en haut
  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: prefersReducedMotion ? 0 : 0.6
      }
    }
  };

  // Variants pour les éléments avec animation de gauche à droite
  const slideInLeftVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: prefersReducedMotion ? 0 : 0.6
      }
    }
  };

  // Variants pour les éléments avec animation de droite à gauche
  const slideInRightVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: prefersReducedMotion ? 0 : 0.6
      }
    }
  };

  // Variants pour les éléments avec animation de fondu
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6
      }
    }
  };

  // Fonction utilitaire pour désactiver les animations si nécessaire
  const getTransition = (duration = 0.6, delay = 0) => ({
    duration: prefersReducedMotion ? 0 : duration,
    delay: prefersReducedMotion ? 0 : delay
  });

  return {
    prefersReducedMotion,
    containerVariants,
    itemVariants,
    slideInLeftVariants,
    slideInRightVariants,
    fadeInVariants,
    getTransition
  };
};

export default useMotionVariants;
