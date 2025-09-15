import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import useCarousel from '../../hooks/useCarousel';

/**
 * Composant Carousel réutilisable avec support tactile
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode[]} props.items - Tableau des éléments à afficher dans le carousel
 * @param {number} props.autoPlayInterval - Intervalle en ms pour l'autoplay (0 pour désactiver)
 * @param {boolean} props.showControls - Afficher les boutons de navigation
 * @param {boolean} props.showIndicators - Afficher les indicateurs de position
 * @param {string} props.className - Classes CSS additionnelles pour le conteneur
 * @param {string} props.slideClassName - Classes CSS additionnelles pour chaque diapositive
 * @param {string} props.ariaLabel - Label ARIA pour le carousel
 * @returns {React.ReactElement} - Élément React
 */
const Carousel = ({
  items,
  autoPlayInterval = 4000,
  showControls = true,
  showIndicators = true,
  className = "",
  slideClassName = "",
  ariaLabel = "Carousel",
}) => {
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    slideVariants,
    carouselProps,
    prefersReducedMotion,
  } = useCarousel(items.length, autoPlayInterval);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl sm:rounded-3xl shadow-xl sm:shadow-2xl",
        className
      )}
      {...carouselProps}
      aria-label={ariaLabel}
    >
      <div className="relative h-[70vh] sm:h-96 md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={slideVariants.enter}
            animate={slideVariants.center}
            exit={slideVariants.exit}
            className={cn("absolute inset-0", slideClassName)}
            aria-hidden="false"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-sm hover:bg-white/40 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-105 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-white focus-visible:ring-2 z-10"
            aria-label="Élément précédent"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-sm hover:bg-white/40 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-105 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-white focus-visible:ring-2 z-10"
            aria-label="Élément suivant"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 min-h-[8px] min-w-[8px]",
                index === currentIndex ? "bg-white" : "bg-white/50"
              )}
              aria-label={`Aller à l'élément ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
