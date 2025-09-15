import { useState, useEffect, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Hook pour gérer un carousel avec support tactile
 * @param {number} itemCount - Nombre total d'éléments dans le carousel
 * @param {number} autoPlayInterval - Intervalle en ms pour l'autoplay (0 pour désactiver)
 * @param {boolean} initialAutoPlay - État initial de l'autoplay
 * @returns {Object} - Propriétés et méthodes du carousel
 */
export const useCarousel = (itemCount, autoPlayInterval = 4000, initialAutoPlay = true) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(initialAutoPlay);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Fonction pour passer à la diapositive suivante
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  // Fonction pour passer à la diapositive précédente
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  // Fonction pour aller à une diapositive spécifique
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Gestion de l'autoplay
  useEffect(() => {
    if (!isAutoPlaying || autoPlayInterval === 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  // Gestionnaires d'événements tactiles
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50; // Distance minimale pour un swipe
    
    if (isSwipe) {
      if (distance > 0) {
        // Swipe vers la gauche - diapositive suivante
        nextSlide();
      } else {
        // Swipe vers la droite - diapositive précédente
        prevSlide();
      }
    }
    
    // Réinitialisation des valeurs
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  // Gestionnaires pour la souris
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(initialAutoPlay);
  }, [initialAutoPlay]);

  // Variants pour les animations du carousel
  const slideVariants = {
    enter: prefersReducedMotion 
      ? { opacity: 0 } 
      : { opacity: 0, x: 300 },
    center: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.5,
        ease: "easeInOut"
      }
    },
    exit: prefersReducedMotion 
      ? { opacity: 0 } 
      : { opacity: 0, x: -300 }
  };

  // Props pour le conteneur du carousel
  const carouselProps = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    role: "region",
    "aria-roledescription": "carousel",
  };

  return {
    currentIndex,
    setCurrentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    isAutoPlaying,
    setIsAutoPlaying,
    slideVariants,
    carouselProps,
    prefersReducedMotion
  };
};

export default useCarousel;
