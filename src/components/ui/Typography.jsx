import { cn } from '../../utils/cn';

/**
 * Composant Heading pour les titres avec styles cohérents
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu du titre
 * @param {string} props.as - Élément HTML à utiliser (h1, h2, h3, etc.)
 * @param {string} props.size - Taille du titre (lg, xl, 2xl, 3xl, etc.)
 * @param {string} props.className - Classes CSS additionnelles
 * @param {string} props.id - ID du titre
 * @returns {React.ReactElement} - Élément React
 */
export const Heading = ({
  children,
  as: Component = 'h2',
  size = '2xl',
  className = '',
  id,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl font-semibold',
    base: 'text-xl sm:text-2xl font-bold',
    lg: 'text-2xl sm:text-3xl font-bold',
    xl: 'text-3xl sm:text-4xl md:text-5xl font-bold',
    '2xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold',
    '3xl': 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
  };

  return (
    <Component
      id={id}
      className={cn(sizeClasses[size], 'leading-tight mb-4 sm:mb-6', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Composant pour le texte avec gradient
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu du texte
 * @param {string} props.className - Classes CSS additionnelles
 * @returns {React.ReactElement} - Élément React
 */
export const GradientText = ({ children, className = '', ...props }) => {
  return (
    <span
      className={cn('gradient-text', className)}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Composant pour les paragraphes
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu du paragraphe
 * @param {string} props.size - Taille du texte (sm, base, lg, xl)
 * @param {string} props.className - Classes CSS additionnelles
 * @returns {React.ReactElement} - Élément React
 */
export const Paragraph = ({
  children,
  size = 'base',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-base sm:text-lg md:text-xl',
    xl: 'text-lg sm:text-xl md:text-2xl',
  };

  return (
    <p
      className={cn(sizeClasses[size], 'leading-relaxed mb-4', className)}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Composant pour les badges/étiquettes
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu du badge
 * @param {string} props.variant - Variante du badge (primary, secondary, outline)
 * @param {string} props.className - Classes CSS additionnelles
 * @returns {React.ReactElement} - Élément React
 */
export const Badge = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    outline: 'border border-primary-200 text-primary-700',
  };

  return (
    <span
      className={cn(
        'inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-sm',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default {
  Heading,
  GradientText,
  Paragraph,
  Badge,
};
