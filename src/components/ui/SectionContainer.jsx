import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import useMotionVariants from '../../hooks/useMotionVariants';

/**
 * Composant conteneur de section réutilisable avec animation au défilement
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu de la section
 * @param {string} props.className - Classes CSS additionnelles
 * @param {string} props.background - Classes CSS pour l'arrière-plan (ex: "bg-white", "bg-gradient-to-br from-gray-50 to-primary-50/30")
 * @param {string} props.id - ID de la section
 * @param {string} props.ariaLabelledby - ID de l'élément qui étiquette cette section
 * @param {React.RefObject} props.sectionRef - Référence pour useInView
 * @param {boolean} props.inView - État de visibilité de la section (de useInView)
 * @returns {React.ReactElement} - Élément React
 */
const SectionContainer = ({
  children,
  className = "",
  background = "bg-white",
  id,
  ariaLabelledby,
  sectionRef,
  inView = true,
}) => {
  const { prefersReducedMotion } = useMotionVariants();

  return (
    <section
      ref={sectionRef}
      className={cn(
        "section-padding", // Assurez-vous que cette classe est définie dans votre CSS global
        background,
        className
      )}
      id={id}
      aria-labelledby={ariaLabelledby}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionContainer;
