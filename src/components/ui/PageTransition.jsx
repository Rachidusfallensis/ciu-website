import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Page transition component that wraps page content with animations
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.transitionType - Type of transition ('fade', 'slide', 'scale')
 * @returns {JSX.Element} - Animated page component
 */
const PageTransition = ({ children, transitionType = 'fade' }) => {
  const prefersReducedMotion = useReducedMotion();
  
  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <>{children}</>;
  }
  
  // Different transition variants
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    },
    slide: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: 0.4, ease: 'easeInOut' }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  };
  
  // Get the selected variant
  const selectedVariant = variants[transitionType] || variants.fade;
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariant}
      transition={selectedVariant.transition}
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  transitionType: PropTypes.oneOf(['fade', 'slide', 'scale', 'slideUp'])
};

export default PageTransition;
