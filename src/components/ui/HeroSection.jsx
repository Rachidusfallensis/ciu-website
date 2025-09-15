import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import useMotionVariants from '../../hooks/useMotionVariants';

/**
 * Composant HeroSection réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.backgroundImage - URL de l'image d'arrière-plan
 * @param {string} props.backgroundAlt - Texte alternatif pour l'image d'arrière-plan
 * @param {React.ReactNode} props.children - Contenu de la section héros
 * @param {string} props.className - Classes CSS additionnelles
 * @param {string} props.overlayClassName - Classes CSS pour l'overlay
 * @param {string} props.id - ID de la section
 * @param {string} props.ariaLabelledby - ID de l'élément qui étiquette cette section
 * @returns {React.ReactElement} - Élément React
 */
const HeroSection = ({
  backgroundImage,
  backgroundAlt = "",
  children,
  className = "",
  overlayClassName = "",
  id,
  ariaLabelledby,
}) => {
  const { prefersReducedMotion, fadeInVariants, getTransition } = useMotionVariants();

  return (
    <section
      className={cn(
        "relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden",
        className
      )}
      id={id}
      aria-labelledby={ariaLabelledby}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={backgroundImage}
          alt={backgroundAlt}
          className="w-full h-full object-cover"
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 10, ease: "easeOut" }}
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-accent-900/80",
            overlayClassName
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={getTransition(1, 0.2)}
        />
        
        {/* Additional dark overlay for better text readability */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={getTransition(1, 0.4)}
        />
      </div>

      {/* Animated Background Elements (subtle) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-secondary-400/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 8,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 10,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <motion.div
          className="text-white"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
