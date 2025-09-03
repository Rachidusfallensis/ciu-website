import { useState, useRef, useEffect } from 'react';
import { cn } from '../utils/cn';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  placeholder = 'blur',
  onLoad,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
        )}>
          {placeholder === 'blur' ? (
            <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
          ) : (
            <div className="text-gray-400 text-sm">Chargement...</div>
          )}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-400 text-sm text-center">
            <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2" />
            Image non disponible
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
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
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
    </div>
  );
};

export default OptimizedImage;
