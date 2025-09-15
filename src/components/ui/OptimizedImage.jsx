import { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

/**
 * Enhanced OptimizedImage component with modern format support
 * @param {Object} props - Component props
 * @param {string} props.src - Base image source path
 * @param {string} props.alt - Alt text for the image
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {boolean} props.priority - Whether to load with high priority
 * @param {string} props.placeholder - Placeholder type ('blur' or 'empty')
 * @param {Function} props.onLoad - Callback when image loads
 * @param {string} props.srcSet - Custom srcSet if provided
 * @param {string} props.sizes - Custom sizes attribute if provided
 * @returns {JSX.Element} - Optimized image component
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  placeholder = 'blur',
  onLoad,
  srcSet,
  sizes,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef();

  // Generate paths for different formats
  const getImagePath = (path, format) => {
    if (!path) return '';
    const basePath = path.substring(0, path.lastIndexOf('.')) || path;
    return `${basePath}.${format}`;
  };

  // Create WebP and AVIF paths
  const webpSrc = getImagePath(src, 'webp');
  const avifSrc = getImagePath(src, 'avif');
  
  // Default srcset if not provided
  const defaultSrcSet = srcSet || (width ? `${src} ${width}w` : undefined);
  
  // Default sizes if not provided
  const defaultSizes = sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
      {...props}
    >
      {/* Placeholder */}
      {!isLoaded && !error && (
        <div className={cn(
          "absolute inset-0 flex items-center justify-center",
          placeholder === 'blur' ? 'bg-gray-200 animate-pulse' : 'bg-gray-100'
        )}
        aria-hidden="true">
          {placeholder === 'blur' ? (
            <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
          ) : (
            <div className="text-gray-400 text-sm">Chargement...</div>
          )}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100" aria-live="polite">
          <div className="text-gray-400 text-sm text-center">
            <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2" />
            Image non disponible
          </div>
        </div>
      )}

      {/* Actual image with modern format support */}
      {isInView && (
        <picture>
          {/* AVIF format */}
          <source
            srcSet={avifSrc}
            type="image/avif"
          />
          {/* WebP format */}
          <source
            srcSet={webpSrc}
            type="image/webp"
          />
          {/* Original format fallback */}
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              "transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
              "absolute inset-0 w-full h-full object-cover"
            )}
            srcSet={defaultSrcSet}
            sizes={defaultSizes}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            width={width}
            height={height}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
